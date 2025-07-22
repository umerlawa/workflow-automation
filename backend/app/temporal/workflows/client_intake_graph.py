# Define the complete client intake graph
client_intake_graph = StateGraph(WorkflowState)

# Add all nodes
client_intake_graph.add_node("email_trigger", gmail_trigger_node)
client_intake_graph.add_node("extract_info", extract_client_info_node)
client_intake_graph.add_node("save_to_drive", drive_save_node)
client_intake_graph.add_node("notify_team", notification_node)

# Define edges
client_intake_graph.add_edge("email_trigger", "extract_info")
client_intake_graph.add_edge("extract_info", "save_to_drive")
client_intake_graph.add_edge("save_to_drive", "notify_team")

# Compile with persistence
client_intake_app = client_intake_graph.compile(
    checkpointer=checkpointer,
    interrupt_before=["save_to_drive"]  # Human approval point
)