import type { MedicineDetailRetrievalOutput } from "@/ai/flows/medicine-detail-retrieval";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Pill, HeartPulse, GitBranch, Workflow } from "lucide-react";

type DetailItemProps = {
  icon: React.ElementType;
  title: string;
  content: string;
};

function DetailItem({ icon: Icon, title, content }: DetailItemProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}

export default function MedicineDetailsCard({ details }: { details: MedicineDetailRetrievalOutput }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Medicine Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-0">
        <DetailItem icon={Pill} title="Uses" content={details.uses} />
        <DetailItem icon={HeartPulse} title="Side Effects" content={details.sideEffects} />
        <DetailItem icon={GitBranch} title="Dosage" content={details.dosage} />
        <DetailItem icon={Workflow} title="Interactions" content={details.interactions} />
      </CardContent>
    </Card>
  );
}
