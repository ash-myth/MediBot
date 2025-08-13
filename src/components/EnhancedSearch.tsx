import React, { useState, useEffect, useCallback } from "react";
import { Medicine, medicines as initialMedicinesData, categories as initialCategoriesData } from "../data/medicines";
import MedicineCard from "./MedicineCard"; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Loader2 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";

const localMedicinesWithSource: Medicine[] = initialMedicinesData.map(m => ({ 
  ...m, 
  source: 'local' as const 
}));
const categories: string[] = initialCategoriesData;

let apiKeyFromEnv: string = "";

if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) {
  apiKeyFromEnv = import.meta.env.VITE_GEMINI_API_KEY as string;
}

else if (typeof process !== 'undefined' && process.env && process.env.REACT_APP_GEMINI_API_KEY) {
  apiKeyFromEnv = process.env.REACT_APP_GEMINI_API_KEY;
}

else if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  apiKeyFromEnv = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
}

const GEMINI_API_KEY: string = apiKeyFromEnv;

if (!GEMINI_API_KEY && typeof window !== 'undefined') {
  console.warn(
    "Gemini API Key not found or not accessible. Please ensure it's set correctly in your .env file (e.g., VITE_GEMINI_API_KEY for Vite, REACT_APP_GEMINI_API_KEY for CRA, or NEXT_PUBLIC_GEMINI_API_KEY for Next.js) and that you've restarted your dev server. AI Search will be disabled or may fail."
  );
}


const EnhancedSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [prescriptionFilter, setPrescriptionFilter] = useState<boolean | null>(null);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>(localMedicinesWithSource);
  const [isSearchExpanded, setIsSearchExpanded] = useState<boolean>(false);
  const [isAiSearching, setIsAiSearching] = useState<boolean>(false);
  const [aiSearchResults, setAiSearchResults] = useState<Medicine[]>([]);
  const [searchMode, setSearchMode] = useState<"regular" | "ai">("regular");
  
  const [searchProgress, setSearchProgress] = useState<number>(0);
  const { toast } = useToast();

  useEffect(() => {
    let baseListToFilter: Medicine[];

    if (searchMode === "ai") {
      baseListToFilter = aiSearchResults; 
    } else {
      baseListToFilter = localMedicinesWithSource; 
    }

    const locallyFiltered = baseListToFilter.filter((medicine) => {
      const matchesSearchTerm =
        !searchTerm || 
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (medicine.useCase && medicine.useCase.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || medicine.category === selectedCategory;

      const matchesPrescription =
        prescriptionFilter === null ||
        medicine.prescriptionRequired === prescriptionFilter;

      return matchesSearchTerm && matchesCategory && matchesPrescription;
    });

    setFilteredMedicines(locallyFiltered);
  }, [searchTerm, selectedCategory, prescriptionFilter, searchMode, aiSearchResults]);


  const handleAiSearch = async () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter a search term",
        description: "Enter symptoms, conditions, or medicine names to search with AI.",
        variant: "destructive",
      });
      return;
    }

    if (!GEMINI_API_KEY) {
      toast({
        title: "AI Search Unavailable",
        description: "The Gemini API key is not configured. AI search cannot be performed. Please check console for details.",
        variant: "destructive",
      });
      console.error("Attempted AI search without GEMINI_API_KEY. Ensure your .env file is correctly set up (e.g., VITE_GEMINI_API_KEY) and the development server was restarted.");
      return;
    }
    
    setIsAiSearching(true);
    setSearchMode("ai");
    setAiSearchResults([]); 
    setFilteredMedicines([]); 
    setSearchProgress(10);
    
    try {
      const prompt = `You are a helpful medical information assistant. For the search term: "${searchTerm}", identify relevant medications. 
For each medication, provide its name, common use case, typical category (e.g., Pain Relief, Allergy, Antibiotic), whether it generally requires a prescription (true/false value), a list of common side effects (as an array of strings), and a common dosage if known.
Format your response STRICTLY as a JSON array of objects. Each object should represent one medicine.
Each object MUST have the following keys: 
- "name" (string)
- "useCase" (string)
- "category" (string)
- "prescriptionRequired" (boolean: true or false)
- "sideEffects" (array of strings, e.g., ["Nausea", "Dizziness"])
- "dosage" (string, e.g., "10mg daily" or "As directed")

Assign a unique "id" to each medicine object, preferably a lowercase, hyphenated version of the medicine name (e.g., "paracetamol-generic" or "loratadine-allergy"). Make sure the id is unique for each item if multiple are returned.

Example of a valid JSON object for one medicine:
{
  "id": "paracetamol-pain-relief", 
  "name": "Paracetamol", 
  "useCase": "Pain relief and fever reduction", 
  "category": "Pain Relief", 
  "prescriptionRequired": false, 
  "sideEffects": ["Nausea", "Allergic reactions (rare)"], 
  "dosage": "500mg to 1000mg every 4-6 hours as needed, max 4000mg/day"
}

If you cannot find any relevant medications or information for the search term, return an empty JSON array: [].
Do not include any introductory text, explanations, apologies, or markdown formatting like \`\`\`json before or after the JSON array.
Your entire response should be ONLY the JSON array.`;
      
      setSearchProgress(30);
      
      const geminiModelName = "gemini-2.5-pro";
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${geminiModelName}:generateContent?key=${GEMINI_API_KEY}`;

      const requestBody = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1, 
          maxOutputTokens: 2048, 
        },
      };
      
      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });
      
      setSearchProgress(70);
      
      if (!response.ok) {
        let errorData;
        try { 
            errorData = await response.json(); 
        } catch (e) { 
            throw new Error(response.statusText || ` API request failed (${response.status})`);
        }
        console.error("API Error Response:", errorData);
        throw new Error(errorData?.error?.message || ` API request failed (${response.status})`);
      }
      
      const data = await response.json();
      setSearchProgress(90);

      if (data.promptFeedback && data.promptFeedback.blockReason) {
          console.warn("Prompt was blocked:", data.promptFeedback.blockReason, data.promptFeedback.safetyRatings);
          throw new Error(`Search blocked by content filters: ${data.promptFeedback.blockReason}. Rephrase?`);
      }

      let contentText = "";
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content?.parts?.[0]?.text) {
        contentText = data.candidates[0].content.parts[0].text;
      } else {
        const finishReason = data.candidates?.[0]?.finishReason;
        if (finishReason && finishReason !== "STOP" && finishReason !== "MAX_TOKENS") {
            console.warn("API generation issue. Finish Reason:", finishReason, "Full response:", data);
            throw new Error(`AI generation stopped unexpectedly: ${finishReason}.`);
        }
         if (finishReason === "MAX_TOKENS") {
            console.warn("API response may be truncated (MAX_TOKENS). Full response:", data);
            
            if (data.candidates?.[0].content?.parts?.[0]?.text) {
                contentText = data.candidates[0].content.parts[0].text;
            } else {
                 throw new Error("AI response truncated and no content found.");
            }
        } else { 
            console.error("No valid content text from API:", JSON.stringify(data, null, 2));
            throw new Error("AI did not return the expected content.");
        }
      }
      
      let aiMedicineObjects: any[] = [];

      try {
        const cleanedContent = contentText.replace(/^```json\s*|```\s*$/g, '').trim();
        const jsonMatch = cleanedContent.match(/^\[.*\]$/s); 

        if (jsonMatch && jsonMatch[0]) {
            aiMedicineObjects = JSON.parse(jsonMatch[0]);
        } else {
            
            const firstBracket = cleanedContent.indexOf('[');
            const lastBracket = cleanedContent.lastIndexOf(']');
            if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
                const potentialJsonArray = cleanedContent.substring(firstBracket, lastBracket + 1);
                aiMedicineObjects = JSON.parse(potentialJsonArray);
            } else if (cleanedContent === "[]") { 
                 aiMedicineObjects = [];
            }
            else {
                
                console.warn("AI response was not a clear JSON array. Content:", cleanedContent);
                
                const parsedPotentially = JSON.parse(cleanedContent);
                if (Array.isArray(parsedPotentially)) {
                    aiMedicineObjects = parsedPotentially;
                } else {
                    throw new Error("AI response was not a JSON array after cleaning.");
                }
            }
        }

        if (!Array.isArray(aiMedicineObjects)) {
          console.warn("Parsed AI response is not an array:", aiMedicineObjects);
          throw new Error("AI response format was not a valid list (array) of medicines.");
        }
      } catch (err: any) {
        console.error("Failed to parse API response content:", contentText, "Error:", err.message);
        toast({
            title: "AI Response Error",
            description: "AI response format was unexpected. Try rephrasing or use Regular Search.",
            variant: "destructive",
        });
        setAiSearchResults([]); 
        setIsAiSearching(false);
        setSearchProgress(0);
        return; 
      }
      
      const results: Medicine[] = aiMedicineObjects.map((med: any, index: number) => ({
        id: med.id || `ai-${med.name?.toLowerCase().replace(/\s+/g, '-') || 'unknown'}-${Date.now()}-${index}`,
        name: med.name || "Unnamed Medicine",
        category: med.category || "Uncategorized",
        useCase: med.useCase || "No use case provided.",
        prescriptionRequired: typeof med.prescriptionRequired === 'boolean' ? med.prescriptionRequired : false,
        sideEffects: Array.isArray(med.sideEffects) ? med.sideEffects : ["Not specified"],
        dosage: med.dosage || "Not specified.",
        imageUrl: med.imageUrl, 
        source: 'ai' as const,
      }));
      
      setAiSearchResults(results);
      
      if (results.length === 0) {
        toast({
          title: "No AI Matches Found",
          description: "AI did not find relevant medications for your search term.",
        });
      } else {
        toast({
          title: "AI Search Results",
          description: `AI found ${results.length} medication${results.length !== 1 ? 's' : ''}. Local filters apply.`,
        });
      }

    } catch (error: any) {
      console.error("AI search error:", error);
      toast({
        title: "AI Search Failed",
        description: error.message || "An error occurred. Check API key or try regular search.",
        variant: "destructive",
      });
      setAiSearchResults([]); 
    } finally {
        setIsAiSearching(false);
        setSearchProgress(100);
        setTimeout(() => {
            setSearchProgress(0); 
        }, 1500);
    }
  };

  const handleRegularSearch = () => {
    setSearchMode("regular");
    setAiSearchResults([]); 
  };

  const handleClearAndReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setPrescriptionFilter(null);
    setSearchMode("regular");
    setAiSearchResults([]);
  };

  return (
    <section id="search" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">Find Your Medicine</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Search our local database or use AI for broader information discovery.
            {!GEMINI_API_KEY && " (AI search may be unavailable due to missing API key configuration.)"}
          </p>
        </div>

        <Card className={`shadow-lg border-border/80 p-4 md:p-6 mb-8 md:mb-10 transition-all duration-300 ${
          isSearchExpanded ? "max-w-4xl" : "max-w-2xl"
        } mx-auto`}>
          <div className="flex flex-col space-y-3 md:space-y-4">
            <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search symptoms or medicine names..."
                  className="pl-10 pr-4 py-2 h-10 md:h-11 w-full"
                  value={searchTerm}
                  onChange={(e) => {
                      setSearchTerm(e.target.value);
                      if (searchMode === 'ai' && !isAiSearching) {
                          setSearchMode('regular'); 
                          setAiSearchResults([]);
                      }
                  }}
                  onFocus={() => setIsSearchExpanded(true)}
                  aria-label="Search medicines or symptoms"
                />
              </div>
              <div className="flex gap-2 shrink-0 justify-center md:justify-start">
                <Button
                  variant="default"
                  className="gap-1.5 md:gap-2 h-10 md:h-11 whitespace-nowrap px-3 md:px-4"
                  onClick={handleAiSearch}
                  disabled={isAiSearching || !searchTerm.trim() || !GEMINI_API_KEY}
                  title={!GEMINI_API_KEY ? "AI Search unavailable: API Key not configured" : !searchTerm.trim() ? "Enter search term for AI Search" : "Search with AI"}
                >
                  {isAiSearching ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                  AI Search
                </Button>
                <Button
                  variant={searchMode === "regular" ? "secondary" : "outline"}
                  className="whitespace-nowrap h-10 md:h-11 px-3 md:px-4"
                  onClick={handleRegularSearch}
                  disabled={isAiSearching}
                >
                  <Search className="h-4 w-4 mr-1.5 md:mr-2" /> Regular
                </Button>
                <Button
                  variant="outline"
                  className="md:ml-1 h-10 md:h-11 whitespace-nowrap px-3 md:px-4"
                  onClick={() => setIsSearchExpanded(prev => !prev)}
                  aria-expanded={isSearchExpanded}
                >
                  <Filter className="h-4 w-4 mr-1.5 md:mr-2" />
                  {isSearchExpanded ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
            </div>
            
            {isAiSearching && searchProgress > 0 && searchProgress <= 100 && (
              <div className="mt-3 md:mt-4">
                <Progress value={searchProgress} className="h-1 w-full" />
                <p className="text-xs text-center text-muted-foreground mt-1">
                  MediBot AI is thinking... {searchProgress === 100 ? "Done." : `${searchProgress}%`}
                </p>
              </div>
            )}

            {isSearchExpanded && (
              <div className="animate-in fade-in-50 duration-300 pt-3 md:pt-4 border-t border-border/70">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="category-select" className="text-sm font-medium mb-1.5 block text-foreground">Category</label>
                    <div id="category-select" className="flex flex-wrap gap-2">
                      {categories.slice(0, Math.min(categories.length, 4)).map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                        >{category}</Button>
                      ))}
                      {categories.length > 4 && (
                        <div className="relative group">
                          <Button variant="outline" size="sm" aria-haspopup="true" aria-expanded="false">
                            More <span aria-hidden="true" className="ml-1">+</span>
                          </Button>
                          <div className="absolute z-20 hidden group-hover:block bg-popover border rounded-md shadow-lg p-1.5 md:p-2 mt-1 w-40 md:w-48 right-0 md:left-0 max-h-60 overflow-y-auto focus-within:block hover:block">
                            {categories.slice(4).map((category) => (
                              <Button
                                key={category}
                                variant={selectedCategory === category ? "secondary" : "ghost"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className="w-full justify-start text-left mb-1 last:mb-0 h-8"
                              >{category}</Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="prescription-select" className="text-sm font-medium mb-1.5 block text-foreground">Prescription</label>
                    <div id="prescription-select" className="flex gap-2 flex-wrap">
                      <Button variant={prescriptionFilter === null ? "default" : "outline"} size="sm" onClick={() => setPrescriptionFilter(null)}>All</Button>
                      <Button variant={prescriptionFilter === false ? "default" : "outline"} size="sm" onClick={() => setPrescriptionFilter(false)} className="flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> OTC Only
                      </Button>
                      <Button variant={prescriptionFilter === true ? "default" : "outline"} size="sm" onClick={() => setPrescriptionFilter(true)} className="flex items-center gap-1">
                        <XCircle className="h-3.5 w-3.5" /> Rx Only
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-6 md:mt-8">
          <div className="flex justify-between items-center mb-4 md:mb-6 flex-wrap gap-y-2 gap-x-4">
            <p className="text-sm text-muted-foreground">
              {isAiSearching ? 
                `AI is searching for "${searchTerm}"...` :
                `${filteredMedicines.length} medicine${filteredMedicines.length !== 1 ? "s" : ""} found`
              }
              {searchMode === "ai" && !isAiSearching && aiSearchResults.length > 0 && searchTerm && ` (AI results for "${searchTerm}", filtered locally)`}
              {searchMode === "ai" && !isAiSearching && aiSearchResults.length > 0 && !searchTerm && ` (AI results, filtered locally)`}
            </p>
            
            {searchMode === "ai" && !isAiSearching && aiSearchResults.length > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Results by MediBot AI</span>
              </div>
            )}
             {searchMode === "regular" && searchTerm && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                 <span>Local Data</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((medicine, index) => (
                <MedicineCard 
                    key={`${medicine.source || 'med'}-${medicine.id}-${index}`} 
                    medicine={medicine} 
                    index={index} 
                />
              ))
            ) : (
              !isAiSearching && (
                <div className="col-span-full text-center py-12 md:py-16 bg-card rounded-lg">
                  <Search className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {searchMode === 'ai' && searchTerm && !isAiSearching && !GEMINI_API_KEY ? `AI Search is unavailable (API Key missing)` :
                     searchMode === 'ai' && !isAiSearching ? `AI found no matches for "${searchTerm}"` : 
                     searchTerm && !isAiSearching ? `No local matches for "${searchTerm}"` : 
                     !isAiSearching ? "No medicines found" : "" 
                    }
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                    {searchMode === 'ai' && !isAiSearching && !GEMINI_API_KEY ? "The API key for AI search is not configured. Please check your .env file and restart the server." :
                     searchMode === 'ai' && !isAiSearching ? "Try rephrasing your AI search or use Regular Search." :
                     !isAiSearching ? "Try different keywords, adjust your filters, or use AI Search for broader results." : ""
                    }
                  </p>
                  {!isAiSearching && <Button 
                    variant="outline" 
                    onClick={handleClearAndReset}
                  >
                    Reset Search & Filters
                  </Button>}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSearch;
