import {z} from 'zod';

export const PatientInteractionInputSchema = z.object({
  medicineName: z.string().describe('The name of the medicine.'),
  patientAge: z.number().describe('The age of the patient in years.'),
  patientWeight: z.number().describe('The weight of the patient in kilograms.'),
  existingConditions: z
    .string()
    .describe('Any existing medical conditions of the patient.'),
  otherMedications: z
    .string()
    .describe('Other medications the patient is currently taking.'),
});
export type PatientInteractionInput = z.infer<typeof PatientInteractionInputSchema>;

export const PatientInteractionOutputSchema = z.object({
  analysis: z
    .string()
    .describe(
      'A detailed analysis of how the medicine may affect the patient, including potential side effects and interactions.'
    ),
});
export type PatientInteractionOutput = z.infer<typeof PatientInteractionOutputSchema>;
