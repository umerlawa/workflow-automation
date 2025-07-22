from typing import TypedDict, Any, Dict
from langgraph.graph import StateGraph
from langgraph.checkpoint.postgres import PostgresSaver
from openai import OpenAI

class ExecutionState(TypedDict):
    workflow_id: str
    current_step: Dict[str, Any]
    step_results: Dict[str, Any]
    error_state: Dict[str, Any]
    human_approval_needed: bool

# Initialize persistence and client
checkpointer = PostgresSaver.from_conn_string(SUPABASE_CONNECTION_STRING)
openai = OpenAI(api_key=OPENAI_API_KEY)

async def extract_email_info(state: ExecutionState, email_text: str) -> Dict[str, Any]:
    """
    Given plain email_text, call GPT to extract structured fields.
    """
    prompt = f"Extract key information from this email:\n\n{email_text}"
    resp = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    parsed = resp.choices[0].message.content
    return {"step_results": {"email_data": parsed}}

# Wire into your graph
email_extraction_graph = StateGraph(name="email_extraction")
email_extraction_graph.add_node("extract_email_info", extract_email_info)
app = email_extraction_graph.compile(checkpointer=checkpointer)
