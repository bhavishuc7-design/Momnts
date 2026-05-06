from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.detector import detect_faces
from models.schemas import DetectResponse

router = APIRouter()

class DetectRequest(BaseModel):
    photo_id: str   # passed by the Node.js worker
    image_url: str  # R2 display URL to download and process

@router.post("/detect", response_model=DetectResponse)
async def detect(req: DetectRequest):
    """
    Accepts an image URL, detects all faces, returns bounding boxes
    and embedding vectors. Called by the BullMQ worker in momnts-api.
    """
    try:
        faces = detect_faces(req.image_url)

        return DetectResponse(
            photo_id=req.photo_id,
            faces=faces,
            total_faces=len(faces),
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))