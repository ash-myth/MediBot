
import { useState } from "react";
import { Medicine } from "@/data/medicines";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MedicineCardProps {
  medicine: Medicine;
  index: number;
}

const MedicineCard = ({ medicine, index }: MedicineCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        style={{
          animationDelay: `${index * 100}ms`,
          opacity: 0,
          animation: "fade-in 0.5s ease-out forwards"
        }}
      >
        <div className={`h-2 ${medicine.prescriptionRequired ? "bg-destructive" : "bg-accent"}`}></div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-foreground">{medicine.name}</h3>
            <span className="inline-block text-xs font-medium rounded-full px-2 py-1 bg-secondary text-secondary-foreground">
              {medicine.category}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            {medicine.useCase.length > 100
              ? `${medicine.useCase.substring(0, 100)}...`
              : medicine.useCase}
          </p>
          
          <div className="flex items-center justify-between mt-4">
            <span className={`text-xs rounded-full px-2 py-1 ${
              medicine.prescriptionRequired 
                ? "bg-destructive/10 text-destructive" 
                : "bg-accent/10 text-white"
            }`}>
              {medicine.prescriptionRequired ? "Prescription Required" : "OTC"}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsDialogOpen(true)}
            >
              More Info
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {medicine.name}
              <span className={`text-xs rounded-full px-2 py-1 ml-2 ${
                medicine.prescriptionRequired 
                  ? "bg-destructive/10 text-destructive" 
                  : "bg-accent/10 text-accent-foreground"
              }`}>
                {medicine.prescriptionRequired ? "Prescription Required" : "Over the Counter"}
              </span>
            </DialogTitle>
            <DialogDescription>
              <span className="font-medium text-primary">{medicine.category}</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-2">
            <div>
              <h4 className="text-sm font-medium text-foreground">Use Case</h4>
              <p className="text-sm text-muted-foreground">{medicine.useCase}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-foreground">Dosage</h4>
              <p className="text-sm text-muted-foreground">{medicine.dosage}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-foreground">Side Effects</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {medicine.sideEffects.map((effect, idx) => (
                  <li key={idx}>{effect}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MedicineCard;
