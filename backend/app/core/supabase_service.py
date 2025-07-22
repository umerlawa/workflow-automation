# backend/app/core/supabase_service.py
from supabase import create_client, Client
from dotenv import load_dotenv
import os

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_main_URL")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY")

if not SUPABASE_URL or not SUPABASE_ANON_KEY:
    raise ValueError("Missing Supabase URL or Anon Key in .env file.")

try:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_ANON_KEY)
    print("Supabase client initialized successfully!")
except Exception as e:
    raise ConnectionError(f"Failed to initialize Supabase client: {e}")

def setup_tables():
    sql = """
    CREATE TABLE IF NOT EXISTS clients (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        status TEXT DEFAULT 'pending',
        workflow_id TEXT,
        created_at TIMESTAMP DEFAULT NOW()
    );
    
    CREATE TABLE IF NOT EXISTS workflow_instances (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        workflow_id TEXT NOT NULL,
        type TEXT NOT NULL,
        status TEXT DEFAULT 'running',
        user_id TEXT,
        created_at TIMESTAMP DEFAULT NOW()
    );
    """
    supabase.execute(sql)