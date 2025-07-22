# backend/temporal/activities/langgraph_triggers.py
from temporalio import activity
from uuid import uuid4

@activity.defn
async def trigger_langgraph_workflow(workflow_id: str) -> str:
    # Import your existing LangGraph app
    from langgraph.app import app  # Adjust import path
    
    thread_id = str(uuid4())
    config = {"configurable": {"thread_id": thread_id}}
    
    result = await app.ainvoke(
        {"workflow_id": workflow_id},
        config
    )
    
    return f"Triggered workflow {workflow_id} with thread {thread_id}"