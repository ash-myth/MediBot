import {z} from 'zod';

export const MedicineDetailRetrievalInputSchema = z.object({
  medicineName: z.string().describe('The name of the medicine to search for.'),
});
export type MedicineDetailRetrievalInput = z.infer<typeof MedicineDetailRetrievalInputSchema>;

export const MedicineDetailRetrievalOutputSchema = z.object({
  uses: z.string().describe('The uses of the medicine.'),
  dosage: z.string().describe('The dosage of the medicine.'),
  sideEffects: z.string().describe('The side effects of the medicine.'),
  interactions: z.string().describe('The interactions of the medicine.'),
});
export type MedicineDetailRetrievalOutput = z.infer<typeof MedicineDetailRetrievalOutputSchema>;
