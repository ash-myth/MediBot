import { z } from 'zod';

export const simulationSchema = z.object({
  medicineName: z.string(),
  patientAge: z.coerce
    .number({ invalid_type_error: 'Please enter a valid age.' })
    .min(0, "Age cannot be negative.")
    .max(120, "Please enter a realistic age."),
  patientWeight: z.coerce
    .number({ invalid_type_error: 'Please enter a valid weight.'})
    .min(0, "Weight cannot be negative.")
    .max(500, "Please enter a realistic weight."),
  existingConditions: z.string().min(1, "Please list conditions or enter 'None'.").max(500),
  otherMedications: z.string().min(1, "Please list medications or enter 'None'.").max(500),
});
