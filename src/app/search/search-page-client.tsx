
'use client';
import { Suspense, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ResultsSection from '@/components/sections/results-section';
import { searchMedicine } from '../actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ListFilter, Search, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSearchParams } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';

function ResultsFallback() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 text-muted-foreground">
      <Loader2 className="mx-auto h-12 w-12 animate-spin" />
      <p className="mt-4 text-lg">
        Searching for medicine details with AI...
      </p>
    </div>
  );
}

const categories = [
    "All", "Pain Relief", "Anti-inflammatory", "Antibiotic", "Blood Pressure",
    "Diabetes", "Allergy", "Gastrointestinal", "Cholesterol", "Mental Health",
    "Respiratory", "Blood Thinner", "Thyroid", "Antifungal", "Corticosteroid",
    "Diuretic", "Anticonvulsant", "Urological", "Sleep Aid", "Antiviral",
    "Muscle Relaxant", "Migraine Medication", "ADHD Medication", "Bone Health",
    "Anti-gout", "Antipsychotic", "Neurological", "Eye Care", "Ear Care",
    "Skin Care", "Men's Health", "Women's Health", "Antiemetic",
    "Immunosuppressant", "Cough & Cold", "Opioid Analgesic"
];

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
        setCheckedCategories([]);
        return;
    }
    setCheckedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-gradient-to-r from-primary/20 to-secondary/40 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-primary">Smart</span> Medicine Search
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
            Find detailed information about medications with intelligent AI-powered search or browse our comprehensive database.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Your Medicine</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={searchMedicine} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  name="medicineName"
                  placeholder="Search symptoms or medicine..."
                  className="h-12 w-full pl-10 text-lg"
                  defaultValue={query}
                />
              </div>
              <Button type="submit" size="lg" className="h-12">
                <Search className="mr-2 h-5 w-5" />
                AI Search
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="lg" className="h-12">
                    <ListFilter className="mr-2 h-5 w-5" />
                    Show Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 h-96">
                    <ScrollArea className="h-full">
                  <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                   <DropdownMenuCheckboxItem
                        checked={checkedCategories.length === 0}
                        onCheckedChange={() => handleCategoryChange("All")}
                      >
                        All
                    </DropdownMenuCheckboxItem>
                   {categories.filter(c => c !== 'All').map(category => (
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={checkedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    >
                      {category}
                    </DropdownMenuCheckboxItem>
                  ))}
                  </ScrollArea>
                </DropdownMenuContent>
              </DropdownMenu>
            </form>
          </CardContent>
        </Card>

        {query ? (
          <Suspense fallback={<ResultsFallback />}>
            <ResultsSection query={query} />
          </Suspense>
        ) : (
          <ResultsSection query={query} categories={checkedCategories} />
        )}
      </section>
    </div>
  );
}
