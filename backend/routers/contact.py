from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase
from models import ContactInquiry, ContactInquiryCreate, NewsletterSubscription, NewsletterSubscriptionCreate
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

def create_contact_router(db: AsyncIOMotorDatabase) -> APIRouter:
    router = APIRouter(prefix="/contact", tags=["contact"])
    
    @router.post("/inquiry", response_model=ContactInquiry)
    async def submit_contact_inquiry(inquiry: ContactInquiryCreate):
        """Submit a contact inquiry (general, regulatory, or partnership)"""
        try:
            # Create inquiry object
            inquiry_dict = inquiry.dict()
            inquiry_obj = ContactInquiry(**inquiry_dict)
            
            # Save to database
            result = await db.contact_inquiries.insert_one(inquiry_obj.dict())
            
            logger.info(f"Contact inquiry received from {inquiry.email} ({inquiry.form_type})")
            
            return inquiry_obj
            
        except Exception as e:
            logger.error(f"Error submitting contact inquiry: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to submit inquiry")
    
    @router.post("/newsletter", response_model=NewsletterSubscription)
    async def subscribe_newsletter(subscription: NewsletterSubscriptionCreate):
        """Subscribe to newsletter"""
        try:
            # Check if already subscribed
            existing = await db.newsletter_subscriptions.find_one({"email": subscription.email})
            
            if existing:
                # Update status to active if was unsubscribed
                await db.newsletter_subscriptions.update_one(
                    {"email": subscription.email},
                    {"$set": {"status": "active", "subscribed_at": datetime.utcnow()}}
                )
                return NewsletterSubscription(**existing)
            
            # Create new subscription
            subscription_obj = NewsletterSubscription(**subscription.dict())
            await db.newsletter_subscriptions.insert_one(subscription_obj.dict())
            
            logger.info(f"Newsletter subscription: {subscription.email}")
            
            return subscription_obj
            
        except Exception as e:
            logger.error(f"Error subscribing to newsletter: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to subscribe")
    
    @router.get("/inquiries/count")
    async def get_inquiry_count():
        """Get count of contact inquiries"""
        try:
            total = await db.contact_inquiries.count_documents({})
            by_type = {}
            for form_type in ['general', 'regulatory', 'partnership']:
                count = await db.contact_inquiries.count_documents({"form_type": form_type})
                by_type[form_type] = count
            
            return {
                "total": total,
                "by_type": by_type
            }
        except Exception as e:
            logger.error(f"Error getting inquiry count: {str(e)}")
            raise HTTPException(status_code=500, detail="Failed to get count")
    
    return router