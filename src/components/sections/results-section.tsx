
'use client';
import { medicineDetailRetrieval, MedicineDetailRetrievalOutput } from "@/ai/flows/medicine-detail-retrieval";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import MedicineDetailsCard from "../medicine-details-card";
import PatientSimulationForm from "../forms/patient-simulation-form";
import { AlertTriangle, Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import type { Medicine } from "@/app/lib/types";
import { mockMedicines } from "@/app/lib/mock-medicines";


const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

function MedicineGrid({ categories }: { categories?: string[] }) {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const handleMoreInfo = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleClose = () => {
    setSelectedMedicine(null);
  };

  const filteredMedicines = categories && categories.length > 0
    ? mockMedicines.filter(med => categories.includes(med.category))
    : mockMedicines;

  if (filteredMedicines.length === 0 && categories && categories.length > 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <Search className="mx-auto h-12 w-12" />
        <p className="mt-4 text-lg">
          No medicines found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <motion.p 
        className="text-muted-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Showing {filteredMedicines.length} of {mockMedicines.length} medicines
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMedicines.map((med, index) => (
          <motion.div
            key={med.name}
            variants={cardVariants}
            custom={index}
            initial="initial"
            animate="animate"
            layout
            whileHover={{ y: -5, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
          >
            <Card className="relative flex flex-col h-full overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg">
               <div className={`absolute top-0 left-0 right-0 h-1 ${med.prescriptionRequired ? 'bg-destructive' : 'bg-green-500'}`}></div>
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <CardTitle className="text-xl">{med.name}</CardTitle>
                  <Badge variant="outline" className="whitespace-nowrap">{med.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm">{med.useCase}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                  {med.prescriptionRequired ? (
                    <Badge variant="destructive">
                      Prescription Required
                    </Badge>
                  ) : (
                    <Badge variant="success">
                      Over-the-Counter
                    </Badge>
                  )}
                  <Button variant="secondary" size="sm" onClick={() => handleMoreInfo(med)}>
                      More Info
                  </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <Dialog open={!!selectedMedicine} onOpenChange={(isOpen) => !isOpen && handleClose()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-between items-start">
              <DialogTitle className="text-2xl font-bold">{selectedMedicine?.name}</DialogTitle>
              {selectedMedicine?.prescriptionRequired ? (
                <Badge variant="destructive">Prescription Required</Badge>
              ) : (
                <Badge variant="success">Over-the-Counter</Badge>
              )}
            </div>
            <p className="text-primary">{selectedMedicine?.category}</p>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Use Case</h3>
              <p className="text-muted-foreground">{selectedMedicine?.useCase}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Dosage</h3>
              <p className="text-muted-foreground">{selectedMedicine?.dosage}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Side Effects</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {selectedMedicine?.sideEffects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}


export default function ResultsSection({ query, categories }: { query: string, categories?: string[] }) {
  const [medicineDetails, setMedicineDetails] = useState<MedicineDetailRetrievalOutput | null>(null);
  const [retrievalError, setRetrievalError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDetails() {
      if (!query) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const details = await medicineDetailRetrieval({ medicineName: query });
        setMedicineDetails(details);
        setRetrievalError(null);
      } catch (e: any) {
        console.error(e);
        if (e.message && e.message.includes('429')) {
          setRetrievalError('You have exceeded the API request limit. Please wait a moment and try again.');
        } else {
          setRetrievalError(e.message || `Our ML model failed to find details for "${query}". Please check the spelling or try another medicine.`);
        }
        setMedicineDetails(null);
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [query]);

  if (isLoading && query) {
    // This will be handled by Suspense fallback in the page
    return null;
  }
  
  if (!query) {
     return <MedicineGrid categories={categories} />;
  }

  return (
    <motion.div 
      className="w-full space-y-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        {retrievalError && (
            <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error searching for &quot;{query}&quot;</AlertTitle>
            <AlertDescription>{retrievalError}</AlertDescription>
            </Alert>
        )}

        {medicineDetails && (
            <div className="max-w-4xl mx-auto space-y-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                    Search Results for &quot;{query}&quot;
                </h2>
                <MedicineDetailsCard details={medicineDetails} />
                <PatientSimulationForm medicineName={query} />
            </div>
        )}

        {!medicineDetails && !retrievalError && !query && <MedicineGrid />}
    </motion.div>
  );
}
