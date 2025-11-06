from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    organization: str
    email: EmailStr
    purpose: str
    region: str
    message: str
    form_type: str = "general"  # general, regulatory, partnership
    gdpr_consent: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"  # new, contacted, closed

class ContactInquiryCreate(BaseModel):
    name: str
    organization: str
    email: EmailStr
    purpose: str
    region: str
    message: str
    form_type: str = "general"
    gdpr_consent: bool

class NewsletterSubscription(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "active"

class NewsletterSubscriptionCreate(BaseModel):
    email: EmailStr