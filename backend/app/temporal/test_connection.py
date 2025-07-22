# backend/temporal/test_connection.py
import asyncio
from temporalio.client import get_temporal_client

async def test_connection():
    client = await get_temporal_client()
    print("Temporal connection successful!")
    await client.close()

if __name__ == "__main__":
    asyncio.run(test_connection())