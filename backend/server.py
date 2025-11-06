from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
import sys

# Add backend directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from routers.contact import create_contact_router
from routers.downloads import create_downloads_router

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="VaxiNovia API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "VaxiNovia API is running", "status": "healthy"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "VaxiNovia API"}

# Include feature routers
contact_router = create_contact_router(db)
downloads_router = create_downloads_router()

api_router.include_router(contact_router)
api_router.include_router(downloads_router)

# Include the main API router in the app
app.include_router(api_router)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    logger.info("VaxiNovia API starting up...")
    logger.info(f"Connected to MongoDB: {os.environ['DB_NAME']}")

@app.on_event("shutdown")
async def shutdown_db_client():
    logger.info("Shutting down VaxiNovia API...")
    client.close()