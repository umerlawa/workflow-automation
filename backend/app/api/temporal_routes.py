# backend/app/api/temporal_routes.py
from fastapi import APIRouter
from temporalio.client import Client
from app.temporal.workflows.scheduled_workflows import trigger_langgraph_workflow

router = APIRouter(prefix="/temporal")

@router.post("/schedule-workflow")
async def schedule_workflow(workflow_id: str):
    client = await get_temporal_client()
    
    handle = await client.start_workflow(
        trigger_langgraph_workflow.run,
        workflow_id,
        id=f"scheduled-{workflow_id}",
        task_queue="langgraph-tasks",
    )
    
    return {"workflow_handle": handle.id}

@router.get("/workflow-status/{workflow_handle}")
async def get_workflow_status(workflow_handle: str):
    client = await get_temporal_client()
    handle = client.get_workflow_handle(workflow_handle)
    
    return {
        "status": await handle.describe(),
        "result": await handle.result() if handle.status == "COMPLETED" else None
    }