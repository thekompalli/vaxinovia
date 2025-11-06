from fastapi import APIRouter, Response
from fastapi.responses import StreamingResponse
from pdf_generator import generate_zika_impd_pdf, generate_financing_pdf
import logging

logger = logging.getLogger(__name__)

def create_downloads_router() -> APIRouter:
    router = APIRouter(prefix="/downloads", tags=["downloads"])
    
    @router.get("/zika-impd")
    async def download_zika_impd():
        """Download ZIKAvia IMPD/CMC Overview PDF"""
        try:
            pdf_buffer = generate_zika_impd_pdf()
            logger.info("ZIKAvia IMPD PDF generated successfully")
            
            return StreamingResponse(
                pdf_buffer,
                media_type="application/pdf",
                headers={
                    "Content-Disposition": "attachment; filename=VaxiNovia_ZIKAvia_IMPD_Overview.pdf"
                }
            )
        except Exception as e:
            logger.error(f"Error generating IMPD PDF: {str(e)}")
            return Response(content="Error generating PDF", status_code=500)
    
    @router.get("/financing")
    async def download_financing():
        """Download Financing Summary PDF"""
        try:
            pdf_buffer = generate_financing_pdf()
            logger.info("Financing PDF generated successfully")
            
            return StreamingResponse(
                pdf_buffer,
                media_type="application/pdf",
                headers={
                    "Content-Disposition": "attachment; filename=VaxiNovia_Financing_Summary.pdf"
                }
            )
        except Exception as e:
            logger.error(f"Error generating Financing PDF: {str(e)}")
            return Response(content="Error generating PDF", status_code=500)
    
    return router