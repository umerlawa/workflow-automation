# backend/temporal/workflows/scheduled_workflows.py
from temporalio import workflow, activity
from datetime import timedelta
import asyncio

@activity.defn
async def trigger_langgraph_workflow(user_id: str):
    """Trigger LangGraph via API call"""
    import httpx
    
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "http://localhost:8000/api/workflows/start",
            params={"user_id": user_id}
        )
        return response.json()

@workflow.defn
class ScheduledWorkflowTrigger:
    @workflow.run
    async def run(self, user_id: str, interval_minutes: int):
        while True:
            # Trigger LangGraph workflow
            result = await workflow.execute_activity(
                trigger_langgraph_workflow,
                user_id,
                start_to_close_timeout=timedelta(minutes=5)
            )
            
            # Wait for next trigger
            await asyncio.sleep(interval_minutes * 60)