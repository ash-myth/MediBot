'use server';

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const scheduleMeeting = ai.defineTool(
  {
    name: 'scheduleMeeting',
    description: 'Provides a link for a user to schedule a meeting. Use this when the user asks to schedule a meeting or book a time to talk.',
    inputSchema: z.object({}),
    outputSchema: z.string(),
  },
  async () => {
    return 'The user can schedule a meeting by visiting https://cal.com/medibot. Please provide this link to the user.';
  }
);
