'use server';
import { config } from 'dotenv';
config({ path: '.env.local' });

// Ensure Genkit is initialized
import { ai } from '@/ai/genkit';

// Import flows to register them
import '@/ai/flows/patient-interaction-simulation.ts';
import '@/ai/flows/chatbot.ts';
import '@/ai/tools/get-medicine-details.ts';
