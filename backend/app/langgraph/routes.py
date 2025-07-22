# backend/app/langchain/routes.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def langgraph_health():
    return {"status": "LangGraph service is running"}

@router.post("/workflow-parser")
async def workflow_parser_endpoint():
    return {"message": "LangGraph workflow parser ready"}

@router.post("/workflow-parser/invoke")
async def workflow_parser_invoke():
    return {"message": "Workflow parser invoked"}

@router.post("/data-extractor/invoke") 
async def data_extractor_invoke():
    return {"message": "Data extractor invoked"}