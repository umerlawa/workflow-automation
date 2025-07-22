# backend/app/langchain/chains/decision_maker.py
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from ..schemas import DecisionInput, DecisionOutput

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

decision_prompt = PromptTemplate(
    template="""Based on the data and conditions, decide the next action:
    
Data: {data}
Conditions: {conditions}
Available actions: {available_actions}

Return JSON with next action and reasoning:
{{
    "next_action": "action_name",
    "reasoning": "why this action was chosen"
}}""",
    input_variables=["data", "conditions", "available_actions"]
)

decision_chain = (
    decision_prompt 
    | llm 
    | JsonOutputParser()
)