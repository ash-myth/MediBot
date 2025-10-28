
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { runSimulation } from '@/app/actions';
import type { SimulationState } from '@/app/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Bot, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Run Simulation
    </Button>
  );
}

export default function PatientSimulationForm({ medicineName }: { medicineName: string }) {
  const initialState: SimulationState = {};
  const [state, formAction] = useActionState(runSimulation, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error && !state.fieldErrors) {
      toast({
        variant: 'destructive',
        title: 'Simulation Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <Card className="bg-background/70">
      <CardHeader>
        <CardTitle>Patient Interaction Simulation</CardTitle>
        <CardDescription>
          See how {medicineName} might affect a patient with specific characteristics. Powered by our ML model.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <input type="hidden" name="medicineName" value={medicineName} />
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patientAge">Patient Age (years)</Label>
              <Input id="patientAge" name="patientAge" type="number" placeholder="e.g., 45" required />
              {state.fieldErrors?.patientAge && <p className="text-sm text-destructive">{state.fieldErrors.patientAge[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientWeight">Patient Weight (kg)</Label>
              <Input id="patientWeight" name="patientWeight" type="number" placeholder="e.g., 70" required />
              {state.fieldErrors?.patientWeight && <p className="text-sm text-destructive">{state.fieldErrors.patientWeight[0]}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="existingConditions">Existing Conditions</Label>
            <Textarea id="existingConditions" name="existingConditions" placeholder="e.g., Type 2 Diabetes, Hypertension" required />
            {state.fieldErrors?.existingConditions && <p className="text-sm text-destructive">{state.fieldErrors.existingConditions[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="otherMedications">Other Medications</Label>
            <Textarea id="otherMedications" name="otherMedications" placeholder="e.g., Metformin, Lisinopril" required />
            {state.fieldErrors?.otherMedications && <p className="text-sm text-destructive">{state.fieldErrors.otherMedications[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <SubmitButton />
          {state.analysis && (
            <Alert className="w-full">
              <Bot className="h-4 w-4" />
              <AlertTitle>Simulation Analysis</AlertTitle>
              <AlertDescription className="prose prose-sm text-foreground">
                {state.analysis}
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
