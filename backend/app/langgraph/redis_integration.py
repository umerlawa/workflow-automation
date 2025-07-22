# backend/app/langgraph/redis_integration.py
from app.core.redis_client import redis_client, cache_workflow_state, get_workflow_state
from typing import Dict, Any
import json

class LangGraphRedisManager:
    """Manages Redis integration for LangGraph workflows"""
    
    def __init__(self):
        self.redis = redis_client
    
    def cache_node_result(self, workflow_id: str, node_name: str, result: Dict[Any, Any]) -> bool:
        """Cache individual node execution results"""
        key = f"workflow:{workflow_id}:node:{node_name}"
        try:
            self.redis.setex(key, 1800, json.dumps(result))  # 30 min TTL
            return True
        except Exception as e:
            print(f"Failed to cache node result: {e}")
            return False
    
    def get_node_result(self, workflow_id: str, node_name: str) -> Dict[Any, Any] | None:
        """Get cached node result"""
        key = f"workflow:{workflow_id}:node:{node_name}"
        try:
            data = self.redis.get(key)
            return json.loads(data) if data else None
        except Exception:
            return None
    
    def mark_workflow_complete(self, workflow_id: str) -> bool:
        """Mark workflow as completed"""
        key = f"workflow:{workflow_id}:status"
        return bool(self.redis.setex(key, 86400, "completed"))  # 24 hour TTL

# Global instance
langgraph_redis = LangGraphRedisManager()



if __name__ == "__main__":
    # Test node caching
    test_result = {"extracted_data": {"name": "John Doe", "email": "john@test.com"}}
    success = langgraph_redis.cache_node_result("test_wf_001", "extract_info", test_result)
    print(f"Node cache: {'✅' if success else '❌'}")
    
    # Test retrieval
    retrieved = langgraph_redis.get_node_result("test_wf_001", "extract_info")
    print(f"Retrieved node result: {retrieved}")