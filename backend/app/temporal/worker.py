# backend/temporal/worker.py
import asyncio
from temporalio import Worker
from temporalio.client import Client
from app.temporal.workflows.scheduled_workflows import ScheduledWorkflowTrigger, trigger_langgraph_workflow

async def main():
    client = await Client.connect("localhost:7233")
    
    worker = Worker(
        client,
        task_queue="workflow-tasks",
        workflows=[ScheduledWorkflowTrigger],
        activities=[trigger_langgraph_workflow]
    )
    
    print("Starting Temporal worker...")
    await worker.run()

if __name__ == "__main__":
    asyncio.run(main())