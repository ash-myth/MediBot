
export type SimulationState = {
  analysis?: string;
  error?: string | null;
  fieldErrors?: {
    [key: string]: string[];
  };
};

export type Medicine = {
  id: number;
  name: string;
  category: string;
  useCase: string;
  dosage: string;
  sideEffects: string[];
  prescriptionRequired: boolean;
};
