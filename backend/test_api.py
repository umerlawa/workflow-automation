# backend/test_api.py
from dotenv import load_dotenv
import requests
import os

load_dotenv()

def test_workflow_endpoints():
    base_url = "http://localhost:8000"
    
    # Test health first
    health = requests.get(f"{base_url}/api/health")
    print(f"Health check: {health.status_code} - {health.json()}")
    
    # Test starting workflow
    workflow_data = {
        "user_id": "test123",
        "workflow_type": "client_intake", 
        "config": {"trigger": "email"}
    }
    
    # Get JWT token from environment
    
    jwt_token = os.getenv("JWT_TOKEN")
    if not jwt_token:
        print("WARNING: JWT_TOKEN not found in environment!")
    headers = {"Authorization": f"Bearer {jwt_token}"} if jwt_token else {}
    
    start_response = requests.post(f"{base_url}/api/workflows/start", json=workflow_data, headers=headers)
    print(f"Start workflow: {start_response.status_code}")
    print(f"Response: {start_response.json()}")

if __name__ == "__main__":
    test_workflow_endpoints()