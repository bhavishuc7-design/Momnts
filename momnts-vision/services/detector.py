import requests
import numpy as np
from deepface import DeepFace
from models.schemas import DetectedFace, BoundingBox
from typing import List
import tempfile
import os
from urllib.parse import urlparse

# The model we use for generating face embeddings
# ArcFace is more accurate than the default VGG-Face
EMBEDDING_MODEL = "ArcFace"

# Detector backend — retinaface is most accurate for group photos
DETECTOR_BACKEND = "retinaface"

ALLOWED_DOMAINS = [
    "r2.cloudflarestorage.com",
    "r2.dev",
]

def validate_url(url: str) -> bool:
    """
    Validates that the URL is from an allowed domain.
    """
    try:
        hostname = urlparse(url).hostname
        if not hostname:
            return False
        # Allow exact match or proper subdomain suffix
        for domain in ALLOWED_DOMAINS:
            if hostname == domain or hostname.endswith("." + domain):
                return True
        # Allow pub- prefixed R2 dev domains
        if hostname.startswith("pub-") and hostname.endswith(".r2.dev"):
            return True
        return False
    except Exception:
        return False

MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10 MB


def download_image(url: str) -> str:
    """
    Downloads an image from a URL (R2) and saves it to a temp file.
    DeepFace works with file paths, not raw bytes.
    Returns the temp file path.
    """
    response = requests.get(url, timeout=30, stream=True)
    response.raise_for_status()

    # Create a temp file with the right extension
    suffix = ".jpg"
    if "webp" in url:
        suffix = ".webp"
    elif "png" in url:
        suffix = ".png"

    tmp = tempfile.NamedTemporaryFile(delete=False, suffix=suffix)
    try:
        total_size = 0
        for chunk in response.iter_content(chunk_size=8192):
            if chunk:
                total_size += len(chunk)
                if total_size > MAX_IMAGE_SIZE:
                    tmp.close()
                    os.remove(tmp.name)
                    response.close()
                    raise ValueError(f"Image exceeds maximum size of {MAX_IMAGE_SIZE} bytes")
                tmp.write(chunk)
        tmp.close()
        return tmp.name
    except Exception:
        tmp.close()
        if os.path.exists(tmp.name):
            os.remove(tmp.name)
        response.close()
        raise

def detect_faces(image_url: str) -> List[DetectedFace]:
    """
    Downloads an image from R2 and detects all faces in it.
    For each face, returns its bounding box and 128-dim embedding vector.
    """
    tmp_path = None
    try:
        # Download image from R2 to a temp file
        if not validate_url(image_url):
            raise ValueError("Image URL is not from an allowed domain")
        tmp_path = download_image(image_url)

        # DeepFace.represent() does two things at once:
        # 1. Detects all faces in the image (finds bounding boxes)
        # 2. Generates an embedding vector for each detected face
        # enforce_detection=False means it won't throw if no faces found
        results = DeepFace.represent(
            img_path=tmp_path,
            model_name=EMBEDDING_MODEL,
            detector_backend=DETECTOR_BACKEND,
            enforce_detection=False,
        )

        faces = []
        for result in results:
            # DeepFace returns facial_area with the bounding box coordinates
            facial_area = result.get("facial_area", {})

            bbox = BoundingBox(
                x=facial_area.get("x", 0),
                y=facial_area.get("y", 0),
                w=facial_area.get("w", 0),
                h=facial_area.get("h", 0),
            )

            # embedding is the 128-float vector representing this face
            embedding = result.get("embedding", [])

            # face_confidence is how sure DeepFace is that this is a real face
            confidence = result.get("face_confidence", 1.0)

            # Skip very low confidence detections — likely not a real face
            if confidence < 0.5:
                continue

            faces.append(DetectedFace(
                bbox=bbox,
                embedding=embedding,
                confidence=confidence,
            ))

        return faces

    finally:
        # Always clean up the temp file even if an error occurs
        if tmp_path and os.path.exists(tmp_path):
            os.remove(tmp_path)

def embed_selfie(selfie_url: str) -> List[float]:
    """
    Generates an embedding for a single face (selfie).
    Used in the /match endpoint to get the attendee's face vector.
    """
    tmp_path = None
    try:
        if not validate_url(selfie_url):
            raise ValueError("Selfie URL is not from an allowed domain")
        tmp_path = download_image(selfie_url)

        results = DeepFace.represent(
            img_path=tmp_path,
            model_name=EMBEDDING_MODEL,
            detector_backend=DETECTOR_BACKEND,
            enforce_detection=False,
        )

        if not results:
            raise ValueError("No face detected in the selfie")

        # For a selfie we only care about the first (most prominent) face
        return results[0]["embedding"]

    finally:
        if tmp_path and os.path.exists(tmp_path):
            os.remove(tmp_path)