# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.auth import JWTMiddleware
from app.api.temporal_routes import router as temporal_router
from app.api.auth_routes import router as auth_router
from app.core.supabase_service import setup_tables
from app.api.routes import router as api_router  # MOVED UP
from app.langgraph.routes import router as langgraph_router  # MOVED UP
import uvicorn

app = FastAPI(title="Workflow Automation MVP")

# Apply CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Apply JWT middleware
app.add_middleware(JWTMiddleware)

# Include all routers
app.include_router(temporal_router)
app.include_router(auth_router)
app.include_router(api_router, prefix="/api")  # FIXED: Using api_router instead of undefined router
app.include_router(langgraph_router, prefix="/langgraph")

@app.get("/")
async def read_root():
    return {"message": "Hello World"}


@app.post("/langgraph/workflow-parser")
async def langgraph_workflow_parser():
    return {"message": "POST /langgraph/workflow-parser endpoint reached"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "services": ["fastapi", "langgraph", "supabase", "temporal"]}

if __name__ == "__main__":
    # Setup database tables
    setup_tables()
    
    uvicorn.run(app, host="0.0.0.0", port=8000)