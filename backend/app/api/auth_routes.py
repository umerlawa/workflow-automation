# app/api/auth_routes.py
from fastapi import APIRouter, Request, Form, HTTPException, Response
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from app.core.supabase_service import supabase

router = APIRouter()
templates = Jinja2Templates(directory="./templates")


@router.get("/signup", response_class=HTMLResponse)
async def signup_form(request: Request):
    return templates.TemplateResponse("signup.html", {"request": request})


@router.post("/signup")
async def signup(email: str = Form(...), password: str = Form(...)):
    try:
        auth_response = supabase.auth.sign_up({
            'email': email,
            'password': password
        })
        if not getattr(auth_response, 'user', None):
            raise HTTPException(status_code=400, detail="Signup failed")
        return RedirectResponse("/login", status_code=303)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/login", response_class=HTMLResponse)
async def login_form(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})


@router.post("/login")
async def login(
    response: Response,
    email: str = Form(...),
    password: str = Form(...)
):
    try:
        auth_response = supabase.auth.sign_in_with_password({
            'email': email,
            'password': password
        })
        if not getattr(auth_response, 'user', None):
            raise HTTPException(status_code=400, detail="Login failed")
        access_token = auth_response.session.access_token
        # Set token in cookies for browser clients
        response = RedirectResponse("/", status_code=303)
        response.set_cookie(
            key="access_token",
            value=f"Bearer {access_token}",
            httponly=True
        )
        return response
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/api/login-json")
async def login_json(email: str = Form(...), password: str = Form(...)):
    try:
        auth_response = supabase.auth.sign_in_with_password({
            'email': email,
            'password': password
        })
        if not getattr(auth_response, 'user', None):
            raise HTTPException(status_code=400, detail="Login failed")
        access_token = auth_response.session.access_token
        return JSONResponse({"access_token": access_token})
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/logout")
async def logout(response: Response):
    response = RedirectResponse("/login", status_code=303)
    response.delete_cookie(key="access_token")
    return response
