import type { NextApiRequest, NextApiResponse } from 'next';
import { AgentQuestion, AgentResponse } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { question, context, userId } = req.body as AgentQuestion;

    // Replace with your AI Agent API endpoint
    const agentApiUrl = process.env.AGENT_API_URL;
    const agentApiKey = process.env.AGENT_API_KEY;

    if (!agentApiUrl || !agentApiKey) {
      return res.status(500).json({ message: 'Agent API URL or Key not configured' });
    }

    const response = await fetch(agentApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${agentApiKey}`,
      },
      body: JSON.stringify({ question, context, userId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ message: 'Error from Agent API', error: errorData });
    }

    const data: AgentResponse = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
  }
} 