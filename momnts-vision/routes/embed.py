from fastapi import APIRouter, HTTPException, Body
from services.detector import download_image, EMBEDDING_MODEL, DETECTOR_BACKEND, validate_url
from deepface import DeepFace
import os
from typing import List

router = APIRouter()

@router.post("/embed")
async def get_embedding(selfie_url: str = Body(..., embed=True)):
    """
    Generates a face embedding for a selfie URL.
    Returns a list of 512 floats (ArcFace).
    """
    tmp_path = None
    try:
        if not validate_url(selfie_url):
            raise HTTPException(status_code=400, detail="Invalid image URL")
            
        tmp_path = download_image(selfie_url)
        print(f"[DEBUG] Image downloaded to: {tmp_path}")
        
        # Try RetinaFace first (more accurate), then fallback to MTCNN if needed
        detector_backends = ["retinaface", "mtcnn", "opencv"]
        results = None
        last_error = None
        
        for detector in detector_backends:
            try:
                print(f"[DEBUG] Trying detector: {detector}")
                results = DeepFace.represent(
                    img_path=tmp_path,
                    model_name=EMBEDDING_MODEL,
                    detector_backend=detector,
                    enforce_detection=False
                )
                print(f"[DEBUG] Detector {detector} returned {len(results) if results else 0} faces")
                if results and len(results) > 0:
                    print(f"[DEBUG] Successfully detected face with {detector}")
                    break
            except Exception as e:
                print(f"[DEBUG] Detector {detector} failed: {str(e)}")
                last_error = e
                continue
        
        if not results or len(results) == 0:
            raise HTTPException(status_code=400, detail="No face detected in the selfie. Please upload a clear photo.")

        # DeepFace with enforce_detection=False might return a result with very low confidence
        # We check the face_confidence if available
        first_face = results[0]
        confidence = first_face.get("face_confidence", 0)
        facial_area = first_face.get("facial_area", {})
        embedding = first_face.get("embedding", [])
        print(f"[DEBUG] Face confidence: {confidence}, facial_area: {facial_area}, embedding length: {len(embedding)}")

        # Check if we have a valid face:
        # 1. Must have embedding data (512-dim vector)
        # 2. Must have valid bounding box (not all zeros)
        # 3. Confidence check: if confidence is 0, we rely on the other checks
        #    (some detectors like RetinaFace return 0.0 even for valid faces)
        has_valid_bbox = facial_area and facial_area.get("w", 0) > 0 and facial_area.get("h", 0) > 0
        has_embedding = len(embedding) > 0

        MIN_CONFIDENCE = 0.15
        if confidence > 0 and confidence < MIN_CONFIDENCE:
            print(f"[DEBUG] Face confidence {confidence} below threshold {MIN_CONFIDENCE}")
            raise HTTPException(
                status_code=400,
                detail="No face detected. Please upload a clear photo of your face."
            )

        if not has_embedding:
            print(f"[DEBUG] No embedding data found")
            raise HTTPException(
                status_code=400,
                detail="Could not extract face features. Please upload a clearer photo."
            )

        if not has_valid_bbox:
            print(f"[DEBUG] No valid bounding box found")
            raise HTTPException(
                status_code=400,
                detail="Could not locate face in image. Please upload a photo with a clear face."
            )

        print(f"[DEBUG] Face validated - confidence: {confidence}, has_embedding: {has_embedding}, has_bbox: {has_valid_bbox}")
        return {"embedding": embedding}
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Embedding error: {str(e)}")
        raise HTTPException(status_code=500, detail="Face processing failed. Please try again with a clearer photo.")
    finally:
        if tmp_path and os.path.exists(tmp_path):
            os.remove(tmp_path)
