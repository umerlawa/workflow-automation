# backend/app/langgraph/test_cached_workflow.py
from app.langgraph.cached_nodes import cached_node
import asyncio

@cached_node(cache_duration=300)
async def test_extraction_node(state):
    """Test node that simulates AI extraction"""
    print("🔄 Running expensive AI extraction...")
    # Simulate processing time
    await asyncio.sleep(1)
    
    return {
        "extracted_data": {"client": "Test Client", "amount": "$1000"},
        "workflow_id": state.get("workflow_id", "test_123")
    }

async def test_caching():
    test_state = {"workflow_id": "test_workflow_123"}
    
    print("First run:")
    result1 = await test_extraction_node(test_state)
    
    print("\nSecond run (should use cache):")
    result2 = await test_extraction_node(test_state)
    
    return result1 == result2

if __name__ == "__main__":
    asyncio.run(test_caching())