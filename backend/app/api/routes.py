# backend/app/api/routes.py
from fastapi import APIRouter, HTTPException, Request, Body
from fastapi import APIRouter

router = APIRouter()


from fastapi import APIRouter, HTTPException
from app.langgraph.workflow_session import workflow_sessions
from app.langgraph.redis_integration import langgraph_redis
from pydantic import BaseModel
from typing import Dict, Any
# Commented out: from app.temporal.workflows import workflow_builder, ai_orchestration, client_intake_graph, workflow_engine

router = APIRouter()
temporal_client = TemporalClient()

@router.get("/api/health")
async def api_health():
    return {"status": "API is running", "version": "1.0.0"}

@router.get("/api/test")
async def test_endpoint():
    return {"message": "Test endpoint working"}

# 1. Accept user query and extract workflow intent using Claude (via workflow_builder)
@router.post("/api/workflow/intent")
async def extract_workflow_intent(request: Request, body: dict = Body(...)):
    user_query = body.get("query")
    # Simulate Claude intent extraction
    # In real code, use workflow_builder.parse_intent or similar
    intent = {"intent": "client_intake", "steps": ["extract_email", "save_to_drive", "notify_team"]}
    # Store intent in session or DB as needed
    return {"workflow_intent": intent}

# 2. Accept Gmail access and trigger GPT-4o extraction (via ai_orchestration)
@router.post("/api/workflow/gmail-access")
async def gmail_access_and_extract(request: Request, body: dict = Body(...)):
    gmail_token = body.get("gmail_token")
    # Simulate fetching email and extracting info with GPT-4o
    # In real code, use ai_orchestration.AIOrchestrator.extract_client_data
    extracted_data = {"email_data": {"from": "client@example.com", "subject": "Legal Help", "body": "..."}}
    # Store extracted data in session or DB as needed
    return {"extracted_data": extracted_data}

# 3. Return a visualization/JSON of the workflow graph
@router.get("/api/workflow/graph")
async def get_workflow_graph():
    # Simulate returning a graph structure (could use client_intake_graph or workflow_builder)
    graph = {
        "nodes": ["email_trigger", "extract_info", "save_to_drive", "notify_team"],
        "edges": [
            ["email_trigger", "extract_info"],
            ["extract_info", "save_to_drive"],
            ["save_to_drive", "notify_team"]
        ]
    }
    return {"workflow_graph": graph}

# 4. User approves workflow, trigger workflow_engine to run the workflow via Temporal
@router.post("/api/workflow/approve")
async def approve_and_run_workflow(request: Request, body: dict = Body(...)):
    # Simulate user approval and workflow execution
    # In real code, use workflow_engine.app.ainvoke or similar, and Temporal orchestration
    workflow_run_id = "wf_123456"
    # Optionally, trigger compliance logging, etc.
    return {"status": "Workflow started", "workflow_run_id": workflow_run_id}
@router.post("/workflows/start")
async def start_workflow(user_id: str):
    """Start LangGraph workflow"""
    workflow_id = str(uuid.uuid4())
    
    try:
        # Store in Supabase
        supabase.table("workflow_instances").insert({
            "workflow_id": workflow_id,
            "type": "client_intake",
            "status": "running",
            "user_id": user_id
        }).execute()
        
        # Start LangGraph workflow
        result = await workflow_engine.ainvoke(
            {
                "workflow_id": workflow_id,
                "user_id": user_id,
                "current_step": "email_trigger",
                "execution_data": {},
                "requires_approval": False,
                "messages": []
            },
            config={"configurable": {"thread_id": workflow_id}}
        )
        
        return {"workflow_id": workflow_id, "status": "started", "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/workflows/{workflow_id}")
async def get_workflow_status(workflow_id: str):
    """Get workflow state from LangGraph"""
    try:
        state = await workflow_engine.aget_state(
            config={"configurable": {"thread_id": workflow_id}}
        )
        return {"workflow_id": workflow_id, "state": state.values}
    except Exception as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.post("/temporal/schedule")
async def schedule_workflow(user_id: str, schedule_minutes: int = 60):
    """Start Temporal scheduled workflow"""
    try:
        workflow_id = await temporal_client.start_scheduled_workflow(user_id, schedule_minutes)
        return {"temporal_workflow_id": workflow_id, "status": "scheduled"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/clients")
async def list_clients():
    """List all clients from Supabase"""
    result = supabase.table("clients").select("*").execute()
    return {"clients": result.data}
