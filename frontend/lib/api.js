// lib/api.js
export const api = {
    parseWorkflow,
    createWorkflow,
  }
  
  /**
   * Calls our Next.js API route to parse the description
   */
  async function parseWorkflow(description) {
    const res = await fetch('/api/workflows/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.error || 'Failed to parse workflow')
    }
    return await res.json()
  }
  
  /**
   * Stub for saving a workflow.
   * You can replace this with a real backend call when ready.
   */
  async function createWorkflow(workflowData) {
    // For now, just simulate a network/save delay
    await new Promise((r) => setTimeout(r, 500))
    // In future, you might call:
    // return fetch('/api/workflows', { method: 'POST', ... })
    return { success: true, ...workflowData }
  }
  