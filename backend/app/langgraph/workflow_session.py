# backend/app/langgraph/workflow_session.py
from app.langgraph.redis_integration import langgraph_redis
from app.core.redis_client import redis_client
import json
from typing import Dict, Any, Optional
import uuid

class WorkflowSessionManager:
    """Manages workflow execution sessions in Redis"""
    
    def start_workflow_session(self, user_id: str, workflow_config: Dict[Any, Any]) -> str:
        """Start a new workflow session"""
        session_id = str(uuid.uuid4())
        
        session_data = {
            "session_id": session_id,
            "user_id": user_id,
            "workflow_config": workflow_config,
            "status": "active",
            "current_step": "initialized",
            "created_at": "now"
        }
        
        key = f"workflow_session:{session_id}"
        redis_client.setex(key, 7200, json.dumps(session_data))  # 2 hour TTL
        
        return session_id
    
    def update_session_step(self, session_id: str, current_step: str, step_data: Dict[Any, Any] = None) -> bool:
        """Update current step in workflow session"""
        key = f"workflow_session:{session_id}"
        
        try:
            session_data = redis_client.get(key)
            if not session_data:
                return False
            
            data = json.loads(session_data)
            data["current_step"] = current_step
            if step_data:
                data["step_data"] = step_data
            
            redis_client.setex(key, 7200, json.dumps(data))
            return True
        except Exception:
            return False
    
    def get_active_sessions(self, user_id: str) -> list:
        """Get all active sessions for a user"""
        pattern = "workflow_session:*"
        sessions = []
        
        try:
            for key in redis_client.scan_iter(match=pattern):
                data = redis_client.get(key)
                if data:
                    session = json.loads(data)
                    if session.get("user_id") == user_id and session.get("status") == "active":
                        sessions.append(session)
        except Exception:
            pass
        
        return sessions

# Global instance
workflow_sessions = WorkflowSessionManager()


if __name__ == "__main__":
    # Test session creation
    config = {"workflow_type": "client_intake", "trigger": "email"}
    session_id = workflow_sessions.start_workflow_session("user123", config)
    print(f"Created session: {session_id}")
    
    # Test step update
    success = workflow_sessions.update_session_step(session_id, "extracting_data", {"progress": "50%"})
    print(f"Updated step: {'✅' if success else '❌'}")
    
    # Test get active sessions
    active = workflow_sessions.get_active_sessions("user123")
    print(f"Active sessions: {len(active)}")



def debug_session_details(user_id: str):
    """Show detailed session information"""
    active = workflow_sessions.get_active_sessions(user_id)
    
    for i, session in enumerate(active):
        print(f"\n--- Session {i+1} ---")
        print(f"ID: {session['session_id']}")
        print(f"User: {session['user_id']}")
        print(f"Status: {session['status']}")
        print(f"Current Step: {session['current_step']}")
        print(f"Workflow Config: {session['workflow_config']}")
        if 'step_data' in session:
            print(f"Step Data: {session['step_data']}")

if __name__ == "__main__":
    # Previous test code...
    
    # Add this debug call
    print("\n=== SESSION DETAILS ===")
    debug_session_details("user123")