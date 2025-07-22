# backend/temporal/client.py
from temporalio.client import Client
from temporal.workflows.scheduled_workflows import ScheduledWorkflowTrigger
import uuid

class TemporalClient:
    def __init__(self):
        self.client = None
    
    async def get_client(self):
        if not self.client:
            self.client = await Client.connect("localhost:7233")
        return self.client
    
    async def start_scheduled_workflow(self, user_id: str, interval_minutes: int):
        client = await self.get_client()
        workflow_id = f"scheduled-{user_id}-{uuid.uuid4()}"
        
        await client.start_workflow(
            ScheduledWorkflowTrigger.run,
            args=[user_id, interval_minutes],
            id=workflow_id,
            task_queue="workflow-tasks"
        )
        
        return workflow_id