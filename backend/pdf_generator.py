from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from io import BytesIO
from datetime import datetime

def generate_zika_impd_pdf() -> BytesIO:
    """Generate Zika IMPD/CMC Overview PDF"""
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4,
                            rightMargin=72, leftMargin=72,
                            topMargin=72, bottomMargin=18)
    
    story = []
    styles = getSampleStyleSheet()
    
    # Title Style
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1E2A5A'),
        spaceAfter=30,
        alignment=TA_CENTER
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor('#1E2A5A'),
        spaceAfter=12,
        spaceBefore=12
    )
    
    # Title
    title = Paragraph("ZIKAvia™ Vaccine Program", title_style)
    subtitle = Paragraph("IMPD/CMC Overview", styles['Heading2'])
    story.append(title)
    story.append(subtitle)
    story.append(Spacer(1, 20))
    
    # Document Info
    info_data = [
        ['Document Type:', 'Investigational Medicinal Product Dossier (IMPD) Overview'],
        ['Product Name:', 'ZIKAvia™'],
        ['Active Substance:', 'Recombinant Zika Virus E+NS1 Antigen'],
        ['Sponsor:', 'VaxiNovia S.A.'],
        ['Date:', datetime.now().strftime('%B %d, %Y')],
    ]
    
    info_table = Table(info_data, colWidths=[2*inch, 4*inch])
    info_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#EEF3F7')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 1, colors.grey),
    ]))
    story.append(info_table)
    story.append(Spacer(1, 30))
    
    # Executive Summary
    story.append(Paragraph("Executive Summary", heading_style))
    summary_text = """ZIKAvia™ is a recombinant subunit vaccine candidate targeting Zika virus infection. 
    The vaccine consists of a stabilized chimeric envelope (E) protein fused with NS1 antigen, 
    formulated with an optimized adjuvant system. Preclinical studies demonstrate exceptional 
    immunogenicity with neutralizing antibody titers (PRNT₅₀ > 1:6400) and robust cellular immunity."""
    story.append(Paragraph(summary_text, styles['Normal']))
    story.append(Spacer(1, 20))
    
    # Product Composition
    story.append(Paragraph("Product Composition", heading_style))
    composition_data = [
        ['Component', 'Specification'],
        ['Active Substance', 'Recombinant Zika E+NS1 protein, 50 µg/dose'],
        ['Adjuvant', 'Aluminum hydroxide + CpG oligonucleotide'],
        ['Preservative', 'None (single-use vial)'],
        ['Buffer', 'Phosphate-buffered saline, pH 7.2'],
        ['Presentation', '0.5 mL single-dose vial'],
    ]
    
    comp_table = Table(composition_data, colWidths=[2.5*inch, 3.5*inch])
    comp_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1E2A5A')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 1, colors.grey),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
    ]))
    story.append(comp_table)
    story.append(Spacer(1, 20))
    
    # Manufacturing Process
    story.append(Paragraph("Manufacturing Process", heading_style))
    manufacturing_text = """<b>Expression System:</b> Baculovirus-insect cell and CHO cell platforms<br/>
    <b>Purification:</b> Multi-step chromatography achieving >95% purity<br/>
    <b>Formulation:</b> Sterile filtration and aseptic filling under GMP conditions<br/>
    <b>Quality Control:</b> Identity, purity, potency, sterility, and endotoxin testing per ICH Q6B"""
    story.append(Paragraph(manufacturing_text, styles['Normal']))
    story.append(Spacer(1, 20))
    
    # Preclinical Data
    story.append(Paragraph("Key Preclinical Results", heading_style))
    preclinical_data = [
        ['Parameter', 'Result'],
        ['Immunogenicity (NHP)', 'PRNT₅₀ > 1:6400'],
        ['Cellular Immunity', 'Strong IFN-γ and IL-2 responses'],
        ['Safety (GLP Toxicology)', 'No adverse findings'],
        ['Antibody Duration', 'Sustained titers at 6+ months'],
        ['Cross-Neutralization', 'Broad activity across Zika strains'],
    ]
    
    preclinical_table = Table(preclinical_data, colWidths=[3*inch, 3*inch])
    preclinical_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#29B7C5')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 1, colors.grey),
    ]))
    story.append(preclinical_table)
    story.append(Spacer(1, 20))
    
    # Development Timeline
    story.append(Paragraph("Clinical Development Timeline", heading_style))
    timeline_text = """<b>Q4 2025:</b> IND/CTA Submission<br/>
    <b>2026:</b> Phase 1 Initiation (Safety & Dose-Finding)<br/>
    <b>2027-2028:</b> Phase 1 Completion & Phase 2 Initiation<br/>
    <b>2029:</b> Phase 2 Completion (Immunogenicity Assessment)<br/>
    <b>2030+:</b> Phase 3 Design & Regulatory Submissions"""
    story.append(Paragraph(timeline_text, styles['Normal']))
    story.append(Spacer(1, 20))
    
    # Contact
    story.append(PageBreak())
    story.append(Paragraph("Contact Information", heading_style))
    contact_text = """<b>VaxiNovia S.A.</b><br/>
    Lyon Science Park<br/>
    2500m² Integrated R&D + GMP Facility<br/>
    69007 Lyon, France<br/><br/>
    Email: contact@vaxinovia.com<br/>
    Phone: +33 (0) 4 72 XX XX XX<br/><br/>
    <i>This document is confidential and proprietary to VaxiNovia S.A.</i>"""
    story.append(Paragraph(contact_text, styles['Normal']))
    
    # Build PDF
    doc.build(story)
    buffer.seek(0)
    return buffer

def generate_financing_pdf() -> BytesIO:
    """Generate Financing Summary PDF"""
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4,
                            rightMargin=72, leftMargin=72,
                            topMargin=72, bottomMargin=18)
    
    story = []
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1E2A5A'),
        spaceAfter=30,
        alignment=TA_CENTER
    )
    
    # Title
    title = Paragraph("ZIKAvia™ Financing Plan", title_style)
    subtitle = Paragraph("6-Year Financial Overview", styles['Heading2'])
    story.append(title)
    story.append(subtitle)
    story.append(Spacer(1, 30))
    
    # Summary
    summary_text = """Total Program Funding: <b>USD 9.0M</b> over 6 years<br/>
    Balanced contributions from VaxiNovia S.A., EA-RIVAC, and Sanofi<br/>
    Date: %s""" % datetime.now().strftime('%B %d, %Y')
    story.append(Paragraph(summary_text, styles['Normal']))
    story.append(Spacer(1, 20))
    
    # Annual Budget Table
    budget_data = [
        ['Year', 'Key Tasks', 'VaxiNovia', 'EA-RIVAC', 'Sanofi', 'Total'],
        ['1', 'Preclinical tox, PD, DRF', '$0.2M', '$0.2M', '$0.2M', '$0.6M'],
        ['2', 'Preclinical cont.; Phase 1 submission', '$0.3M', '$0.3M', '$0.3M', '$0.9M'],
        ['3', 'Phase 1 Clinical Trial', '$0.6M', '$0.6M', '$0.7M', '$1.9M'],
        ['4', 'Phase 1 completion; Phase 2 init', '$0.6M', '$0.6M', '$0.5M', '$1.7M'],
        ['5', 'Phase 2 continuation', '$0.9M', '$0.9M', '$0.9M', '$2.7M'],
        ['6', 'Phase 2 completion & analysis', '$0.4M', '$0.4M', '$0.4M', '$1.2M'],
        ['TOTAL', '', '$3.0M', '$3.0M', '$3.0M', '$9.0M'],
    ]
    
    budget_table = Table(budget_data, colWidths=[0.5*inch, 2.2*inch, 0.9*inch, 0.9*inch, 0.9*inch, 0.9*inch])
    budget_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1E2A5A')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (2, 0), (-1, -1), 'RIGHT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 1, colors.grey),
        ('BACKGROUND', (0, -1), (-1, -1), colors.HexColor('#29B7C5')),
        ('TEXTCOLOR', (0, -1), (-1, -1), colors.white),
        ('FONTNAME', (0, -1), (-1, -1), 'Helvetica-Bold'),
    ]))
    story.append(budget_table)
    story.append(Spacer(1, 30))
    
    # Footer
    footer_text = """<i>For detailed cost breakdown and milestone payments, please contact VaxiNovia S.A.</i>"""
    story.append(Paragraph(footer_text, styles['Normal']))
    
    doc.build(story)
    buffer.seek(0)
    return buffer