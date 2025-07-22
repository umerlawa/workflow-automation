# backend/app/core/auth.py

import os
from dotenv import load_dotenv
import jwt
from fastapi import Request, HTTPException, Depends, FastAPI
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.responses import JSONResponse

load_dotenv()

SUPABASE_JWT_SECRET = os.environ["SUPABASE_JWT_SECRET"]
JWT_ALGORITHM = os.environ.get("JWT_ALGORITHM")
JWT_AUDIENCE = os.environ.get("JWT_AUDIENCE", "authenticated")
JWT_TOKEN = os.getenv("JWT_TOKEN")

# Middleware to check for valid JWT in the Authorization header
class JWTBearer(HTTPBearer):
   def __init__(self, auto_error: bool = True):
       super(JWTBearer, self).__init__(auto_error=auto_error)

   async def __call__(self, request: Request):
       credentials: HTTPAuthorizationCredentials = await super(JWTBearer, self).__call__(request)
       if credentials:
           if not credentials.scheme == "Bearer":
               raise HTTPException(status_code=403, detail="Invalid authentication scheme.")
           if not self.verify_jwt(credentials.credentials):
               raise HTTPException(status_code=403, detail="Invalid token or expired token.")
           return credentials.credentials
       else:
           raise HTTPException(status_code=403, detail="Invalid authorization code.")

   def verify_jwt(self, token: str) -> bool:
       try:
           payload = jwt.decode(token, SUPABASE_JWT_SECRET, algorithms=[JWT_ALGORITHM], options={"verify_aud": JWT_AUDIENCE is not None}, audience=JWT_AUDIENCE)
           return True
       except jwt.ExpiredSignatureError:
           return False
       except jwt.InvalidTokenError:
           return False

# Middleware to add JWT validation to all routes
class JWTMiddleware(BaseHTTPMiddleware):
   async def dispatch(self, request: Request, call_next: RequestResponseEndpoint):
       # Skip JWT check for these paths
       bypass_paths = [
    "/",
    "/docs",
    "/openapi.json",
    "/favicon.ico",
    "/api/health",
    "/langgraph/health",
    "/langgraph/workflow-parser",
    "/api/login-json",
    "/login",
    "/signup"
    ]
       
       if request.url.path in bypass_paths:
           response = await call_next(request)
           return response
       
       try:
           token = request.headers.get("Authorization")
           if token:
               token = token.split(" ")[1]  # Extract the token part
               if not JWTBearer().verify_jwt(token):
                   return JSONResponse({"detail": "Invalid token or expired token."}, status_code=403)
           else:
               return JSONResponse({"detail": "Authorization header is missing."}, status_code=403)
       except Exception as e:
           return JSONResponse({"detail": str(e)}, status_code=403)
       response = await call_next(request)
       return response

def add_cookie_to_auth_header_middleware(app: FastAPI):
    @app.middleware("http")
    async def cookie_to_auth_header(request: Request, call_next):
        token = request.cookies.get("access_token")
        if token and token.startswith("Bearer "):
            # Inject the Authorization header if not already present
            if not request.headers.get("authorization"):
                request.headers.__dict__["_list"].append(
                    (b"authorization", f"Bearer {token.split(' ')[1]}".encode())
                )
        response = await call_next(request)
        return response