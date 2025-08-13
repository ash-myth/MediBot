
import { useState, useEffect } from "react";
import { Medicine, medicines, categories } from "../data/medicines";
import MedicineCard from "./MedicineCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchMedicines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [prescriptionFilter, setPrescriptionFilter] = useState<boolean | null>(null);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>(medicines);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const filtered = medicines.filter((medicine) => {
      // Filter by search term
      const matchesSearchTerm =
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medicine.useCase.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter by category
      const matchesCategory =
        selectedCategory === "All" || medicine.category === selectedCategory;

      // Filter by prescription status
      const matchesPrescription =
        prescriptionFilter === null ||
        medicine.prescriptionRequired === prescriptionFilter;

      return matchesSearchTerm && matchesCategory && matchesPrescription;
    });

    setFilteredMedicines(filtered);
  }, [searchTerm, selectedCategory, prescriptionFilter]);

  return (
    <section id="search" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">Find Your Medicine</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search our database of medicines to find information on usage, dosage,
            and potential side effects.
          </p>
        </div>

        <div className={`bg-card shadow-md rounded-lg p-6 mb-10 transition-all duration-300 ${
          isSearchExpanded ? "max-w-4xl" : "max-w-2xl"
        } mx-auto`}>
          <div className="flex items-center mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search medicines..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchExpanded(true)}
              />
            </div>
            <Button
              variant="outline"
              className="ml-2 whitespace-nowrap"
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            >
              {isSearchExpanded ? "Simple Search" : "Advanced Search"}
            </Button>
          </div>

          {isSearchExpanded && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(0, 5).map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="text-xs"
                      >
                        {category}
                      </Button>
                    ))}
                    <div className="relative group">
                      <Button variant="outline" size="sm" className="text-xs">
                        More +
                      </Button>
                      <div className="absolute z-10 hidden group-hover:block bg-popover border border-border rounded-md shadow-md p-2 mt-1 w-48">
                        <div className="grid grid-cols-1 gap-1">
                          {categories.slice(5).map((category) => (
                            <Button
                              key={category}
                              variant={selectedCategory === category ? "default" : "ghost"}
                              size="sm"
                              onClick={() => setSelectedCategory(category)}
                              className="justify-start text-xs h-8"
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Prescription Status</label>
                  <div className="flex gap-2">
                    <Button
                      variant={prescriptionFilter === null ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPrescriptionFilter(null)}
                    >
                      All
                    </Button>
                    <Button
                      variant={prescriptionFilter === false ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPrescriptionFilter(false)}
                    >
                      OTC Only
                    </Button>
                    <Button
                      variant={prescriptionFilter === true ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPrescriptionFilter(true)}
                    >
                      Prescription Only
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <p className="text-muted-foreground mb-6">
            Found {filteredMedicines.length} medicine{filteredMedicines.length !== 1 && "s"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((medicine, index) => (
                <MedicineCard key={medicine.id} medicine={medicine} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-xl font-medium text-foreground mb-2">No medicines found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMedicines;
