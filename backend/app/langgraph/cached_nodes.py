from app.langgraph.redis_integration import langgraph_redis
from functools import wraps
import uuid
from typing import Dict, Any, Callable

def cached_node(cache_duration: int = 1800):
    """Decorator to add Redis caching to LangGraph nodes"""
    def decorator(node_func: Callable):
        @wraps(node_func)
        async def wrapper(state: Dict[Any, Any]):
            # Generate cache key from state content
            workflow_id = state.get("workflow_id", str(uuid.uuid4()))
            node_name = node_func.__name__
            
            # Try to get cached result first
            cached_result = langgraph_redis.get_node_result(workflow_id, node_name)
            if cached_result:
                print(f"✅ Using cached result for {node_name}")
                return cached_result
            
            # Execute node function
            result = await node_func(state)
            
            # Cache the result
            langgraph_redis.cache_node_result(workflow_id, node_name, result)
            print(f"💾 Cached result for {node_name}")
            
            return result
        return wrapper
    return decorator