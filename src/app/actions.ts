
'use server';

import {
  patientInteractionSimulation,
} from '@/ai/flows/patient-interaction-simulation';
import { chatbot, type ChatbotInput } from '@/ai/flows/chatbot';
import { redirect } from 'next/navigation';
import type { SimulationState } from '@/app/lib/types';
import { simulationSchema } from '@/app/lib/schemas';

export async function searchMedicine(formData: FormData) {
  const medicineName = formData.get('medicineName') as string;
  if (medicineName && medicineName.trim() !== '') {
    redirect(`/search?query=${encodeURIComponent(medicineName.trim())}`);
  } else {
    redirect('/search');
  }
}

export async function runSimulation(
  prevState: SimulationState,
  formData: FormData
): Promise<SimulationState> {
  const validatedFields = simulationSchema.safeParse({
    medicineName: formData.get('medicineName'),
    patientAge: formData.get('patientAge'),
    patientWeight: formData.get('patientWeight'),
    existingConditions: formData.get('existingConditions'),
    otherMedications: formData.get('otherMedications'),
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid input. Please check the fields below.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await patientInteractionSimulation(validatedFields.data);
    return { analysis: result.analysis };
  } catch (e) {
    console.error(e);
    return { error: 'Our ML model failed to run the simulation. Please try again later.' };
  }
}

export async function runChatbot(input: ChatbotInput) {
  try {
    const result = await chatbot(input);
    return { message: result.message };
  } catch (e) {
    console.error(e);
    return { error: 'The chatbot encountered an error. Please try again.' };
  }
}
