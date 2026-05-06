from fastapi import FastAPI
from routes import detect, match
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="momnts-vision",
    description="Face detection and matching microservice for Momnts",
    version="1.0.0",
)

# Register route handlers
app.include_router(detect.router)
app.include_router(match.router)

@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "momnts-vision",
    }