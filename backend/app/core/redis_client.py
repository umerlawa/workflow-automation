# backend/app/core/redis_client.py

import os
import redis
import json
from typing import Optional, Dict, Any

# Read Redis connection info from environment variables, with sensible defaults
REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))
REDIS_DB = int(os.getenv("REDIS_DB", 0))
REDIS_PASSWORD = os.getenv("REDIS_PASSWORD", None)

# Create a Redis client instance
redis_client = redis.Redis(
    host=REDIS_HOST,
    port=REDIS_PORT,
    db=REDIS_DB,
    password=REDIS_PASSWORD,
    decode_responses=True  # Makes returned values strings instead of bytes
)

# Optional: Simple health check function
def check_redis_connection():
    try:
        return redis_client.ping()
    except redis.RedisError as e:
        print(f"Redis connection error: {e}")
        return False

# Workflow state caching
def cache_workflow_state(workflow_id: str, state_data: dict, ttl: int = 3600) -> bool:
    """Cache workflow state for LangGraph"""
    key = f"workflow:{workflow_id}:state"
    try:
        redis_client.setex(key, ttl, json.dumps(state_data))
        return True
    except Exception as e:
        print(f"Failed to cache workflow state: {e}")
        return False

def get_workflow_state(workflow_id: str) -> Optional[Dict[Any, Any]]:
    """Retrieve cached workflow state"""
    key = f"workflow:{workflow_id}:state"
    try:
        data = redis_client.get(key)
        return json.loads(data) if data else None
    except Exception as e:
        print(f"Failed to get workflow state: {e}")
        return None

# Session management
def set_user_session(user_id: str, session_data: dict, ttl: int = 86400) -> bool:
    """Cache user session data"""
    key = f"session:{user_id}"
    try:
        redis_client.setex(key, ttl, json.dumps(session_data))
        return True
    except Exception as e:
        print(f"Failed to set session: {e}")
        return False
