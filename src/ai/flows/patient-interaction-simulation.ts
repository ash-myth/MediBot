
'use server';

/**
 * @fileOverview This file defines a Genkit flow for simulating patient interactions with a given medicine.
 *
 * It allows doctors to input patient parameters and receive insights on potential effects.
 *
 * - patientInteractionSimulation - The main function to trigger the simulation.
 * - PatientInteractionInput - The input type for the simulation, including medicine name and patient details.
 * - PatientInteractionOutput - The output type, providing a detailed analysis of potential effects.
 */

import {ai} from '@/ai/genkit';
import {
  PatientInteractionInputSchema,
  type PatientInteractionInput,
  PatientInteractionOutputSchema,
  type PatientInteractionOutput,
} from '@/ai/schemas/patient-interaction-simulation';

export async function patientInteractionSimulation(
  input: PatientInteractionInput
): Promise<PatientInteractionOutput> {
  return patientInteractionSimulationFlow(input);
}

const patientInteractionPrompt = ai.definePrompt({
  name: 'patientInteractionPrompt',
  input: {schema: PatientInteractionInputSchema},
  output: {schema: PatientInteractionOutputSchema},
  prompt: `You are a medical expert providing insights on how a medicine may affect a patient.

  Given the following patient parameters and medicine details, provide a detailed analysis of potential effects, side effects, and interactions.

  Present the analysis in a crisp, to-the-point, bullet-point-style format.

  Medicine Name: {{{medicineName}}}
  Patient Age: {{{patientAge}}} years
  Patient Weight: {{{patientWeight}}} kg
  Existing Conditions: {{{existingConditions}}}
  Other Medications: {{{otherMedications}}}

  Provide a comprehensive analysis, anticipating potential issues and suggesting adjustments to treatment plans accordingly.`,
});

const patientInteractionSimulationFlow = ai.defineFlow(
  {
    name: 'patientInteractionSimulationFlow',
    inputSchema: PatientInteractionInputSchema,
    outputSchema: PatientInteractionOutputSchema,
  },
  async input => {
    const {output} = await patientInteractionPrompt(input, { model: 'googleai/gemini-2.5-flash' });
    return output!;
  }
);
