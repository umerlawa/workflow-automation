# backend/app/langchain/chains/data_extractor.py
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from ..schemas import DataExtractionInput, DataExtractionOutput

from app.langgraph.cached_nodes import cached_node

# Add @cached_node decorator above your existing function
@cached_node(cache_duration=3600)  # Cache for 1 hour
async def your_existing_node_function(state):
    # Your existing code stays the same
    pass

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

data_extraction_prompt = PromptTemplate(
    template="""Extract the following fields from this content:
    
Fields to extract: {fields_to_extract}
Content type: {content_type}
Content: {content}

Return a JSON object with extracted values and confidence score (0-1):
{{
    "extracted_data": {{"field1": "value1", "field2": "value2"}},
    "confidence_score": 0.95
}}""",
    input_variables=["content", "content_type", "fields_to_extract"]
)

data_extraction_chain = (
    data_extraction_prompt 
    | llm 
    | JsonOutputParser()
)