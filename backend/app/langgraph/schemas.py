# backend/app/langchain/schemas.py
from pydantic import BaseModel
from typing import List, Dict, Any, Optional

# Workflow Parser Chain
class WorkflowParserInput(BaseModel):
    description: str
    user_context: Optional[Dict[str, Any]] = None

class WorkflowParserOutput(BaseModel):
    trigger: Dict[str, Any]
    steps: List[Dict[str, Any]]
    variables: Dict[str, str]

# Data Extraction Chain
class DataExtractionInput(BaseModel):
    content: str
    content_type: str  # "email", "pdf", "form"
    fields_to_extract: List[str]

class DataExtractionOutput(BaseModel):
    extracted_data: Dict[str, Any]
    confidence_score: float

# Decision Chain
class DecisionInput(BaseModel):
    data: Dict[str, Any]
    conditions: List[str]
    available_actions: List[str]

class DecisionOutput(BaseModel):
    next_action: str
    reasoning: str