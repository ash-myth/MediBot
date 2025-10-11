
'use server';

/**
 * @fileOverview Retrieves detailed information about a medicine.
 *
 * - medicineDetailRetrieval - A function that retrieves medicine details.
 * - MedicineDetailRetrievalInput - The input type for the medicineDetailRetrieval function.
 * - MedicineDetailRetrievalOutput - The return type for the medicineDetailRetrieval function.
 */

import {ai} from '@/ai/genkit';
import {
  MedicineDetailRetrievalInputSchema,
  type MedicineDetailRetrievalInput,
  MedicineDetailRetrievalOutputSchema,
  type MedicineDetailRetrievalOutput,
} from '@/ai/schemas/medicine-detail-retrieval';

export async function medicineDetailRetrieval(input: MedicineDetailRetrievalInput): Promise<MedicineDetailRetrievalOutput> {
  return medicineDetailRetrievalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'medicineDetailRetrievalPrompt',
  input: {schema: MedicineDetailRetrievalInputSchema},
  output: {schema: MedicineDetailRetrievalOutputSchema},
  prompt: `You are a medical expert providing information about medicines.

  Provide detailed information about the medicine, including its uses, dosage, side effects, and interactions.
  
  Present the information in a crisp, to-the-point, note-like format. Use bullet points for each section (uses, dosage, side effects, interactions).

  Medicine Name: {{{medicineName}}}`,
});

const medicineDetailRetrievalFlow = ai.defineFlow(
  {
    name: 'medicineDetailRetrievalFlow',
    inputSchema: MedicineDetailRetrievalInputSchema,
    outputSchema: MedicineDetailRetrievalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input, { model: 'googleai/gemini-2.5-pro' });
    return output!;
  }
);
