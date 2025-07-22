import asyncio
import httpx
from dotenv import load_dotenv
import os

load_dotenv()

# You might still need a token for future protected endpoints
JWT_TOKEN = os.getenv("JWT_TOKEN")

headers = {
    # Make sure JWT_TOKEN is valid if you test protected routes
    "Authorization": f"Bearer {JWT_TOKEN}"
}

async def test_data_extraction():
    # Note: This endpoint is currently public (bypassed).
    # If you protect it later, the 'headers' will be necessary.
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "http://localhost:8000/langgraph/workflow-parser",
            json={
                "input": {
                    "content": "Hi, I'm John Doe from ABC Corp. My email is john@abc.com and phone is 555-1234.",
                    "content_type": "email",
                    "fields_to_extract": ["name", "email", "phone", "company"]
                }
            }
            # headers=headers # Uncomment if you protect this route
        )
        print("Data Extraction Response:", response.status_code, response.text)

if __name__ == "__main__":
    asyncio.run(test_data_extraction())