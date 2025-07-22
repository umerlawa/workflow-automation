# backend/app/langchain/prompts.py
from langchain.prompts import PromptTemplate

WORKFLOW_PARSER_PROMPT = PromptTemplate(
    input_variables=["description"],
    template="""
Convert this workflow description into structured JSON:
"{description}"

Output format:
{{
    "trigger": {{"type": "email|file|schedule", "conditions": [...]}},
    "steps": [
        {{"id": "step1", "action": "extract_data", "config": {{...}}}},
        {{"id": "step2", "action": "save_to_drive", "config": {{...}}}}
    ],
    "variables": {{"client_name": "$extracted.name"}}
}}
"""
)

DATA_EXTRACTION_PROMPT = PromptTemplate(
    input_variables=["content", "fields"],
    template="""
Extract these fields from the content:
Fields: {fields}

Content: {content}

Return JSON with extracted values:
"""
)