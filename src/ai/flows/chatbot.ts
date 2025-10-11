
'use server';
/**
 * @fileOverview A chatbot flow for the MediBot website assistant.
 */

import {ai} from '@/ai/genkit';
import { scheduleMeeting } from '@/ai/tools/schedule-meeting';
import {
  ChatbotInputSchema,
  type ChatbotInput,
  ChatbotOutputSchema,
  type ChatbotOutput,
} from '@/ai/schemas/chatbot';

export async function chatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const systemPrompt = `You are MediBot, a friendly and helpful AI assistant for the MediBot website. Your goal is to assist users by answering their questions about the website, its features, and general medical information.

You can help with:
- Information about medicines.
- Simulating patient interactions with medicines.
- Answering questions about our 'About' and 'Contact' pages.
- Scheduling meetings for users.

When asked about contact information, you MUST respond with: "If you would like to contact the creator of the MediBot website, you can find all the necessary information on our 'Contact Us' page. Feel free to visit it for more details [CONTACT_PAGE_LINK]". Do not deviate from this response.

When asked to schedule a meeting, use the scheduleMeeting tool. For all other questions, provide a helpful and concise response based on your knowledge of the website. Be friendly and professional.`;

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input) => {
    const { history, message } = input;
    
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-pro',
      tools: [scheduleMeeting],
      history: history && history.length > 0 ? history : undefined,
      prompt: message,
      system: systemPrompt,
    });
    
    return { message: response.text };
  }
);
