# app/api/core/workflow_engine.py

from langgraph.graph import StateGraph
from langgraph.checkpoint.postgres import PostgresSaver
from typing import TypedDict, Annotated, Sequence
from langchain_core.messages import BaseMessage
import operator
import os
import uuid

class WorkflowState(TypedDict):
    workflow_id: str
    user_id: str
    current_step: str
    execution_data: dict
    requires_approval: bool
    messages: Annotated[Sequence[BaseMessage], operator.add]

# Initialize checkpointer with Supabase
checkpointer = PostgresSaver.from_conn_string(os.getenv("SUPABASE_DB_URL"))

async def email_trigger_node(state: WorkflowState):
    """Simulate email processing"""
    return {
        "execution_data": {"email_processed": True},
        "current_step": "ai_extract"
    }

async def ai_extraction_node(state: WorkflowState):
    """AI extraction simulation"""
    # Save to Supabase via supabase_service
    from core.supabase_service import supabase
    
    client_data = {
        "name": "Test Client",
        "email": "test@example.com",
        "status": "extracted",
        "workflow_id": state["workflow_id"]
    }
    
    result = supabase.table("clients").insert(client_data).execute()
    
    return {
        "execution_data": {**state["execution_data"], "client_id": result.data[0]["id"]},
        "current_step": "completed"
    }

def create_workflow_engine():
    graph = StateGraph(WorkflowState)
    
    graph.add_node("email_trigger", email_trigger_node)
    graph.add_node("ai_extract", ai_extraction_node)
    
    graph.add_edge("email_trigger", "ai_extract")
    graph.set_entry_point("email_trigger")
    
    return graph.compile(checkpointer=checkpointer)

# Global instance
workflow_engine = create_workflow_engine()