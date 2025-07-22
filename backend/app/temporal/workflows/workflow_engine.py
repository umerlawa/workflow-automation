from langgraph.checkpoint.postgres import PostgresSaver
from langgraph.graph import END

# Initialize with persistence
checkpointer = PostgresSaver.from_conn_string(SUPABASE_CONNECTION_STRING)

class ExecutionState(TypedDict):
    workflow_id: str
    current_step: str
    step_results: dict
    error_state: dict
    human_approval_needed: bool

# Build execution graph
execution_graph = StateGraph(ExecutionState)

async def execute_step(state: ExecutionState):
    """Execute a single workflow step"""
    current_step = state["current_step"]
    # Dynamic step execution based on type
    result = await AVAILABLE_ACTIONS[current_step["type"]].execute(
        state["step_results"]
    )
    return {"step_results": {current_step["id"]: result}}

async def check_human_approval(state: ExecutionState):
    """Check if human approval is needed"""
    if state.get("human_approval_needed"):
        return "human_review"
    return "continue"

execution_graph.add_node("execute_step", execute_step)
execution_graph.add_node("human_review", human_review_handler)
execution_graph.add_conditional_edges(
    "execute_step",
    check_human_approval,
    {
        "human_review": "human_review",
        "continue": "execute_step",
        END: END
    }
)

# Compile with checkpointing
app = execution_graph.compile(checkpointer=checkpointer)

# LangGraph handles state persistence automatically
async def resume_workflow(thread_id: str):
    """Resume a paused workflow from checkpoint"""
    config = {"configurable": {"thread_id": thread_id}}
    state = await app.aget_state(config)
    
    # Continue from last checkpoint
    return await app.ainvoke(None, config)

# Scheduled Executions
@temporal.workflow
async def scheduled_workflow_trigger():
    """Run LangGraph workflows on schedule"""
    # Trigger LangGraph workflow
    await app.ainvoke(
        {"workflow_id": "daily_report"},
        {"configurable": {"thread_id": str(uuid4())}}
    )

# Compliance Logging
@temporal.activity
async def log_compliance_event(event_data):
    """Immutable compliance audit trail"""
    # Temporal guarantees execution
    await compliance_db.insert(event_data)

#Long-Running External API Polling

@temporal.workflow
async def poll_external_system():
    """Poll systems that don't support webhooks"""
    while True:
        result = await check_external_system()
        if result:
            # Trigger LangGraph workflow
            await trigger_langgraph_workflow(result)
        await temporal.sleep(300)  # 5 minutes