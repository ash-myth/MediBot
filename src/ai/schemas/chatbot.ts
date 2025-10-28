import {z} from 'zod';

export const ChatbotInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    parts: z.array(z.object({ text: z.string() })),
  })).optional(),
  message: z.string(),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export const ChatbotOutputSchema = z.object({
  message: z.string(),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;
