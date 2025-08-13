export type Medicine = {
  id: number;
  name: string;
  category: string;
  useCase: string;
  dosage: string;
  sideEffects: string[];
  prescriptionRequired: boolean;
};

export const medicines: Medicine[] = [

  {
    id: 1,
    name: "Paracetamol",
    category: "Pain Relief",
    useCase: "For relief of mild to moderate pain and fever",
    dosage: "500-1000mg every 4-6 hours as needed, max 4g per day",
    sideEffects: ["Nausea", "Rash", "Liver damage (at high doses)"],
    prescriptionRequired: false
  },
  {
    id: 2,
    name: "Ibuprofen",
    category: "Anti-inflammatory",
    useCase: "Pain, inflammation, and fever reduction",
    dosage: "400-800mg every 6-8 hours, max 3.2g per day",
    sideEffects: ["Stomach pain", "Heartburn", "Dizziness", "Increased risk of heart attack"],
    prescriptionRequired: false
  },
  {
    id: 3,
    name: "Amoxicillin",
    category: "Antibiotic",
    useCase: "Treatment of bacterial infections",
    dosage: "250-500mg every 8 hours or 500-875mg every 12 hours",
    sideEffects: ["Diarrhea", "Rash", "Nausea", "Vomiting"],
    prescriptionRequired: true
  },
  {
    id: 4,
    name: "Lisinopril",
    category: "Blood Pressure",
    useCase: "Treatment of high blood pressure and heart failure",
    dosage: "10-40mg once daily",
    sideEffects: ["Dry cough", "Dizziness", "Headache", "Fatigue"],
    prescriptionRequired: true
  },
  {
    id: 5,
    name: "Metformin",
    category: "Diabetes",
    useCase: "Management of type 2 diabetes",
    dosage: "500-1000mg twice daily with meals",
    sideEffects: ["Nausea", "Diarrhea", "Stomach pain", "Metallic taste"],
    prescriptionRequired: true
  },
  {
    id: 6,
    name: "Loratadine",
    category: "Allergy",
    useCase: "Relief of allergy symptoms",
    dosage: "10mg once daily",
    sideEffects: ["Headache", "Drowsiness", "Dry mouth"],
    prescriptionRequired: false
  },
  {
    id: 7,
    name: "Omeprazole",
    category: "Gastrointestinal",
    useCase: "Treatment of heartburn and acid reflux",
    dosage: "20-40mg once daily before a meal",
    sideEffects: ["Headache", "Abdominal pain", "Constipation", "Diarrhea"],
    prescriptionRequired: false 
  },
  {
    id: 8,
    name: "Atorvastatin",
    category: "Cholesterol",
    useCase: "Reduction of cholesterol and cardiovascular risk",
    dosage: "10-80mg once daily",
    sideEffects: ["Muscle pain", "Liver problems", "Digestive problems", "Increased blood sugar"],
    prescriptionRequired: true
  },
  {
    id: 9,
    name: "Sertraline",
    category: "Mental Health",
    useCase: "Treatment of depression, anxiety, and OCD",
    dosage: "50-200mg once daily",
    sideEffects: ["Nausea", "Dizziness", "Insomnia", "Dry mouth", "Sexual problems"],
    prescriptionRequired: true
  },
  {
    id: 10,
    name: "Ventolin (Salbutamol)",
    category: "Respiratory",
    useCase: "Relief of asthma symptoms and bronchospasm",
    dosage: "1-2 inhalations every 4-6 hours as needed",
    sideEffects: ["Shaking", "Headache", "Rapid heartbeat", "Nervousness"],
    prescriptionRequired: true
  },
  {
    id: 11,
    name: "Warfarin",
    category: "Blood Thinner",
    useCase: "Prevention of blood clots and strokes",
    dosage: "Individualized dosing based on INR blood tests",
    sideEffects: ["Bleeding", "Bruising", "Nausea", "Rash"],
    prescriptionRequired: true
  },
  {
    id: 12,
    name: "Cetirizine",
    category: "Allergy",
    useCase: "Relief of allergy symptoms",
    dosage: "5-10mg once daily",
    sideEffects: ["Drowsiness", "Dry mouth", "Fatigue"],
    prescriptionRequired: false
  },
  {
    id: 13,
    name: "Aspirin",
    category: "Blood Thinner", 
    useCase: "Pain relief, fever reduction, and blood clot prevention",
    dosage: "75-325mg once daily for heart health, 325-650mg every 4-6 hours for pain",
    sideEffects: ["Stomach irritation", "Bleeding", "Tinnitus (at high doses)", "Allergic reactions"],
    prescriptionRequired: false
  },
  {
    id: 14,
    name: "Losartan",
    category: "Blood Pressure",
    useCase: "Treatment of high blood pressure and kidney protection in diabetes",
    dosage: "25-100mg once daily",
    sideEffects: ["Dizziness", "Cough", "Muscle cramps", "Fatigue", "Elevated potassium levels"],
    prescriptionRequired: true
  },
  {
    id: 15,
    name: "Fluoxetine",
    category: "Mental Health",
    useCase: "Treatment of depression, OCD, panic disorder, and bulimia nervosa",
    dosage: "20-80mg once daily",
    sideEffects: ["Nausea", "Insomnia", "Anxiety", "Decreased appetite", "Sexual dysfunction"],
    prescriptionRequired: true
  },
  {
    id: 16,
    name: "Simvastatin",
    category: "Cholesterol",
    useCase: "Reduction of cholesterol and cardiovascular risk",
    dosage: "10-40mg once daily in the evening",
    sideEffects: ["Muscle pain", "Liver problems", "Abdominal pain", "Constipation"],
    prescriptionRequired: true
  },
  {
    id: 17,
    name: "Albuterol", 
    category: "Respiratory",
    useCase: "Relief of bronchospasm in asthma and COPD",
    dosage: "1-2 inhalations every 4-6 hours as needed",
    sideEffects: ["Tremors", "Nervousness", "Headache", "Increased heart rate"],
    prescriptionRequired: true
  },
  {
    id: 18,
    name: "Levothyroxine",
    category: "Thyroid",
    useCase: "Treatment of hypothyroidism",
    dosage: "Typically 50-200mcg once daily, individualized based on blood tests",
    sideEffects: ["Heart palpitations", "Insomnia", "Headache", "Weight loss", "Heat intolerance"],
    prescriptionRequired: true
  },
 
  {
    id: 19,
    name: "Clotrimazole",
    category: "Antifungal",
    useCase: "Treatment of fungal skin infections (e.g., athlete's foot, ringworm, yeast infections)",
    dosage: "Apply topically to affected area 2-3 times daily for 2-4 weeks",
    sideEffects: ["Local irritation", "Burning sensation", "Redness", "Allergic reaction (rare)"],
    prescriptionRequired: false
  },
  {
    id: 20,
    name: "Diphenhydramine",
    category: "Allergy", 
    useCase: "Relief of allergy symptoms, hay fever, and as a short-term sleep aid",
    dosage: "25-50mg every 4-6 hours for allergies; 50mg at bedtime for sleep",
    sideEffects: ["Drowsiness", "Dizziness", "Dry mouth/nose/throat", "Constipation"],
    prescriptionRequired: false
  },
  {
    id: 21,
    name: "Ranitidine", 
    category: "Gastrointestinal",
    useCase: "Treatment and prevention of heartburn, acid indigestion, and stomach ulcers",
    dosage: "75-150mg once or twice daily",
    sideEffects: ["Headache", "Constipation", "Diarrhea", "Dizziness"],
    prescriptionRequired: false 
  },
  {
    id: 22,
    name: "Prednisone",
    category: "Corticosteroid",
    useCase: "Treatment of inflammation, severe allergies, asthma, arthritis, and immune system disorders",
    dosage: "Highly variable, e.g., 5-60mg daily, often tapered",
    sideEffects: ["Increased appetite", "Weight gain", "Mood changes", "Insomnia", "Fluid retention", "Increased blood sugar"],
    prescriptionRequired: true
  },
  {
    id: 23,
    name: "Furosemide",
    category: "Diuretic",
    useCase: "Treatment of fluid retention (edema) and high blood pressure",
    dosage: "20-80mg per day as a single or divided dose",
    sideEffects: ["Increased urination", "Dizziness", "Headache", "Blurred vision", "Electrolyte imbalance"],
    prescriptionRequired: true
  },
  {
    id: 24,
    name: "Gabapentin",
    category: "Anticonvulsant", 
    useCase: "Treatment of seizures and nerve pain",
    dosage: "300-1200mg three times daily, titrated up",
    sideEffects: ["Dizziness", "Drowsiness", "Fatigue", "Coordination problems", "Swelling of extremities"],
    prescriptionRequired: true
  },
  {
    id: 25,
    name: "Hydrochlorothiazide",
    category: "Diuretic", 
    useCase: "Treatment of high blood pressure and fluid retention (edema)",
    dosage: "12.5-50mg once daily",
    sideEffects: ["Dizziness", "Lightheadedness", "Increased sensitivity to sun", "Electrolyte imbalance"],
    prescriptionRequired: true
  },
  {
    id: 26,
    name: "Insulin Aspart (NovoLog/NovoRapid)",
    category: "Diabetes",
    useCase: "Rapid-acting insulin for management of type 1 and type 2 diabetes",
    dosage: "Individualized, based on blood sugar, carbohydrate intake, and activity",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection site reactions", "Lipodystrophy"],
    prescriptionRequired: true
  },
  {
    id: 27,
    name: "Montelukast",
    category: "Respiratory", 
    useCase: "Prevention and treatment of asthma, and relief of seasonal allergy symptoms",
    dosage: "10mg once daily in the evening",
    sideEffects: ["Headache", "Stomach pain", "Cough", "Mood changes (rare but serious)"],
    prescriptionRequired: true
  },
  {
    id: 28,
    name: "Ciprofloxacin",
    category: "Antibiotic",
    useCase: "Treatment of various bacterial infections (UTIs, respiratory, skin)",
    dosage: "250-750mg every 12 hours, depending on infection",
    sideEffects: ["Nausea", "Diarrhea", "Rash", "Tendon rupture (rare)", "Photosensitivity"],
    prescriptionRequired: true
  },
  {
    id: 29,
    name: "Clopidogrel",
    category: "Blood Thinner",
    useCase: "Prevention of heart attack and stroke",
    dosage: "75mg once daily",
    sideEffects: ["Bleeding", "Bruising", "Diarrhea", "Stomach pain"],
    prescriptionRequired: true
  },
  {
    id: 30,
    name: "Tamsulosin",
    category: "Urological",
    useCase: "Treatment of symptoms of an enlarged prostate (BPH)",
    dosage: "0.4mg once daily, 30 mins after the same meal each day",
    sideEffects: ["Dizziness", "Runny nose", "Ejaculation problems", "Headache"],
    prescriptionRequired: true
  },
  {
    id: 31,
    name: "Escitalopram",
    category: "Mental Health",
    useCase: "Treatment of depression and generalized anxiety disorder (GAD)",
    dosage: "10-20mg once daily",
    sideEffects: ["Nausea", "Insomnia or drowsiness", "Sweating", "Dry mouth", "Sexual dysfunction"],
    prescriptionRequired: true
  },
  {
    id: 32,
    name: "Pantoprazole",
    category: "Gastrointestinal",
    useCase: "Treatment of GERD and conditions involving excessive stomach acid",
    dosage: "20-40mg once daily",
    sideEffects: ["Headache", "Diarrhea", "Abdominal pain", "Gas", "Long-term use risk of bone fractures"],
    prescriptionRequired: true  },
  
  {
    id: 33,
    name: "Diazepam",
    category: "Mental Health", 
    useCase: "Treatment of anxiety, muscle spasms, seizures, and alcohol withdrawal",
    dosage: "2-10mg, 2-4 times daily depending on condition",
    sideEffects: ["Drowsiness", "Fatigue", "Muscle weakness", "Coordination problems"],
    prescriptionRequired: true
  },
  {
    id: 34,
    name: "Zolpidem",
    category: "Sleep Aid",
    useCase: "Short-term treatment of insomnia",
    dosage: "5-10mg at bedtime",
    sideEffects: ["Drowsiness", "Dizziness", "Headache", "Sleep-walking (rare)"],
    prescriptionRequired: true
  },
  {
    id: 35,
    name: "Acyclovir",
    category: "Antiviral",
    useCase: "Treatment of herpes virus infections (cold sores, genital herpes, shingles)",
    dosage: "Varies (e.g., 200-800mg 2-5 times daily)",
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Headache"],
    prescriptionRequired: true
  },
  {
    id: 36,
    name: "Cyclobenzaprine",
    category: "Muscle Relaxant",
    useCase: "Relief of muscle spasms associated with acute painful musculoskeletal conditions",
    dosage: "5-10mg three times daily",
    sideEffects: ["Drowsiness", "Dry mouth", "Dizziness", "Fatigue"],
    prescriptionRequired: true
  },
  {
    id: 37,
    name: "Sumatriptan",
    category: "Migraine Medication",
    useCase: "Treatment of acute migraine headaches",
    dosage: "25-100mg at onset of migraine, may repeat after 2 hours (max 200mg/day)",
    sideEffects: ["Tingling/numbness", "Warm/cold sensation", "Dizziness", "Chest pressure"],
    prescriptionRequired: true
  },
  {
    id: 38,
    name: "Methylphenidate",
    category: "ADHD Medication", 
    useCase: "Treatment of Attention Deficit Hyperactivity Disorder (ADHD) and narcolepsy",
    dosage: "Varies, titrated (e.g., 5-20mg 2-3 times daily for IR)",
    sideEffects: ["Insomnia", "Decreased appetite", "Headache", "Nervousness", "Increased heart rate"],
    prescriptionRequired: true
  },
  {
    id: 39,
    name: "Alendronate",
    category: "Bone Health", 
    useCase: "Treatment and prevention of osteoporosis",
    dosage: "70mg once weekly or 10mg once daily",
    sideEffects: ["Abdominal pain", "Acid regurgitation", "Esophageal irritation", "Muscle pain"],
    prescriptionRequired: true
  },
  {
    id: 40,
    name: "Allopurinol",
    category: "Anti-gout",
    useCase: "Prevention of gout attacks and kidney stones by reducing uric acid levels",
    dosage: "100-300mg once daily, may increase",
    sideEffects: ["Rash", "Nausea", "Diarrhea", "Liver function changes"],
    prescriptionRequired: true
  },
  {
    id: 41,
    name: "Risperidone",
    category: "Antipsychotic",
    useCase: "Treatment of schizophrenia, bipolar disorder, and irritability associated with autism",
    dosage: "Varies, (e.g., 1-6mg daily)",
    sideEffects: ["Drowsiness", "Weight gain", "Dizziness", "Movement disorders (tardive dyskinesia)"],
    prescriptionRequired: true
  },
  {
    id: 42,
    name: "Levodopa/Carbidopa",
    category: "Neurological", 
    useCase: "Treatment of Parkinson's disease symptoms",
    dosage: "Individualized and titrated (e.g., 25/100mg three times daily)",
    sideEffects: ["Nausea", "Dizziness", "Hallucinations", "Dyskinesias (involuntary movements)"],
    prescriptionRequired: true
  },
  {
    id: 43,
    name: "Latanoprost",
    category: "Eye Care", 
    useCase: "Reduction of intraocular pressure in glaucoma and ocular hypertension",
    dosage: "1 drop in affected eye(s) once daily in the evening",
    sideEffects: ["Blurred vision", "Eye irritation/redness", "Iris color change", "Eyelash growth"],
    prescriptionRequired: true
  },
  {
    id: 44,
    name: "Ciprofloxacin/Dexamethasone Otic",
    category: "Ear Care",
    useCase: "Treatment of bacterial ear infections (otitis externa, otitis media with tubes)",
    dosage: "4 drops into affected ear twice daily for 7 days",
    sideEffects: ["Ear discomfort", "Itching", "Ear residue"],
    prescriptionRequired: true
  },
  {
    id: 45,
    name: "Hydrocortisone Cream 1%",
    category: "Skin Care", 
    useCase: "Relief of skin inflammation, itching, and rashes from eczema, dermatitis, insect bites",
    dosage: "Apply thin layer to affected area 2-4 times daily",
    sideEffects: ["Mild stinging/burning", "Skin thinning (with prolonged use)"],
    prescriptionRequired: false 
  },
  {
    id: 46,
    name: "Sildenafil",
    category: "Men's Health", 
    useCase: "Treatment of erectile dysfunction and pulmonary arterial hypertension",
    dosage: "ED: 50mg as needed ~1hr before activity (max 100mg, once daily)",
    sideEffects: ["Headache", "Flushing", "Nasal congestion", "Vision changes"],
    prescriptionRequired: true
  },
  {
    id: 47,
    name: "Ethinyl estradiol/Norgestimate",
    category: "Women's Health", 
    useCase: "Oral contraceptive for pregnancy prevention",
    dosage: "1 tablet daily as per pack instructions",
    sideEffects: ["Nausea", "Breast tenderness", "Headache", "Mood changes", "Risk of blood clots"],
    prescriptionRequired: true
  },
  {
    id: 48,
    name: "Ondansetron",
    category: "Antiemetic",
    useCase: "Prevention of nausea and vomiting due to chemotherapy, radiation, or surgery",
    dosage: "4-8mg, may be repeated",
    sideEffects: ["Headache", "Constipation", "Fatigue", "Dizziness"],
    prescriptionRequired: true
  },
  {
    id: 49,
    name: "Methotrexate",
    category: "Immunosuppressant", 
    useCase: "Treatment of rheumatoid arthritis, psoriasis, and certain cancers",
    dosage: "Varies widely (e.g., 7.5-25mg once weekly for RA)",
    sideEffects: ["Nausea", "Mouth sores", "Fatigue", "Liver toxicity", "Bone marrow suppression"],
    prescriptionRequired: true
  },
  {
    id: 50,
    name: "Fluticasone Nasal Spray",
    category: "Nasal Steroid", 
    useCase: "Treatment of nasal allergy symptoms (congestion, runny nose, sneezing)",
    dosage: "1-2 sprays in each nostril once daily",
    sideEffects: ["Nosebleeds", "Nasal irritation", "Headache"],
    prescriptionRequired: false 
  },
  {
    id: 51,
    name: "Dextromethorphan",
    category: "Cough & Cold", 
    useCase: "Temporary relief of cough due to minor throat and bronchial irritation",
    dosage: "10-20mg every 4 hours or 30mg every 6-8 hours",
    sideEffects: ["Dizziness", "Drowsiness", "Nausea"],
    prescriptionRequired: false 
  },
  {
    id: 52,
    name: "Calcium Carbonate (Tums)",
    category: "Gastrointestinal", 
    useCase: "Relief of heartburn, acid indigestion, and upset stomach",
    dosage: "500-1500mg as needed, chew thoroughly",
    sideEffects: ["Constipation", "Gas", "Belching"],
    prescriptionRequired: false
  },
  {
    id: 53,
    name: "Bisacodyl",
    category: "Gastrointestinal", 
    useCase: "Treatment of constipation and for bowel preparation before procedures",
    dosage: "5-15mg orally once daily; 10mg rectally once daily",
    sideEffects: ["Abdominal cramps", "Diarrhea", "Nausea", "Electrolyte imbalance (with overuse)"],
    prescriptionRequired: false
  },
  {
    id: 54,
    name: "Tramadol",
    category: "Opioid Analgesic",
    useCase: "Management of moderate to moderately severe pain",
    dosage: "50-100mg every 4-6 hours as needed (max 400mg/day)",
    sideEffects: ["Dizziness", "Nausea", "Constipation", "Drowsiness", "Risk of seizure"],
    prescriptionRequired: true
  },
  {
    id: 55,
    name: "Lorazepam",
    category: "Mental Health", 
    useCase: "Management of anxiety disorders or short-term relief of anxiety symptoms",
    dosage: "1-10mg daily in divided doses, varies",
    sideEffects: ["Drowsiness", "Dizziness", "Weakness", "Unsteadiness"],
    prescriptionRequired: true
  },
  {
    id: 56,
    name: "Oseltamivir (Tamiflu)",
    category: "Antiviral",
    useCase: "Treatment and prevention of influenza A and B",
    dosage: "Treatment: 75mg twice daily for 5 days; Prevention: 75mg once daily",
    sideEffects: ["Nausea", "Vomiting", "Headache", "Pain"],
    prescriptionRequired: true
  },
  {
    id: 57,
    name: "Atomoxetine",
    category: "ADHD Medication", 
    useCase: "Treatment of Attention Deficit Hyperactivity Disorder (ADHD)",
    dosage: "Titrated, typically 40-100mg daily, once or twice daily",
    sideEffects: ["Upset stomach", "Decreased appetite", "Nausea", "Dizziness", "Fatigue", "Mood swings"],
    prescriptionRequired: true
  },
  {
    id: 58,
    name: "Triamcinolone Cream",
    category: "Skin Care", 
    useCase: "Relief of skin inflammation, itching, and rashes from eczema, dermatitis",
    dosage: "Apply thin layer to affected area 2-4 times daily",
    sideEffects: ["Burning", "Itching", "Dryness", "Skin thinning (long-term use)"],
    prescriptionRequired: true 
  },
  {
    id: 59,
    name: "Guaifenesin (Mucinex)",
    category: "Cough & Cold", 
    useCase: "Helps loosen phlegm (mucus) and thin bronchial secretions to make coughs more productive",
    dosage: "200-400mg every 4 hours; ER 600-1200mg every 12 hours",
    sideEffects: ["Dizziness", "Headache", "Rash", "Nausea"],
    prescriptionRequired: false
  },
  {
    id: 60,
    name: "Polyethylene Glycol 3350 (MiraLAX)",
    category: "Gastrointestinal", 
    useCase: "Treatment of occasional constipation",
    dosage: "17g (one capful) dissolved in 8 oz liquid, once daily",
    sideEffects: ["Bloating", "Cramping", "Gas", "Nausea"],
    prescriptionRequired: false
  },
  {
    id: 61,
    name: "Morphine",
    category: "Opioid Analgesic",
    useCase: "Management of severe pain",
    dosage: "Highly variable, depends on formulation (IR, ER) and patient needs",
    sideEffects: ["Drowsiness", "Constipation", "Nausea", "Vomiting", "Respiratory depression"],
    prescriptionRequired: true
  },
  {
    id: 62,
    name: "Alprazolam (Xanax)",
    category: "Mental Health", 
    useCase: "Management of anxiety disorder and panic disorder",
    dosage: "0.25-0.5mg three times daily, titrated",
    sideEffects: ["Drowsiness", "Dizziness", "Memory problems", "Dependence risk"],
    prescriptionRequired: true
  },
  {
    id: 63,
    name: "Valacyclovir",
    category: "Antiviral",
    useCase: "Treatment of herpes zoster (shingles), genital herpes, and cold sores",
    dosage: "Varies by indication (e.g., Shingles: 1g three times daily for 7 days)",
    sideEffects: ["Headache", "Nausea", "Abdominal pain"],
    prescriptionRequired: true
  },
  {
    id: 64,
    name: "Tizanidine",
    category: "Muscle Relaxant",
    useCase: "Management of spasticity",
    dosage: "Initial 2mg, may increase up to 8mg per dose, 3 times daily",
    sideEffects: ["Dry mouth", "Drowsiness", "Dizziness", "Weakness", "Hypotension"],
    prescriptionRequired: true
  },
  {
    id: 65,
    name: "Rizatriptan",
    category: "Migraine Medication",
    useCase: "Acute treatment of migraine with or without aura",
    dosage: "5-10mg at onset, may repeat after 2 hours (max 30mg/day)",
    sideEffects: ["Dizziness", "Drowsiness", "Fatigue", "Chest/jaw/neck tightness"],
    prescriptionRequired: true
  },
  {
    id: 66,
    name: "Lisdexamfetamine (Vyvanse)",
    category: "ADHD Medication", 
    useCase: "Treatment of ADHD and binge eating disorder",
    dosage: "30-70mg once daily in the morning",
    sideEffects: ["Insomnia", "Decreased appetite", "Dry mouth", "Anxiety", "Irritability"],
    prescriptionRequired: true
  },
  {
    id: 67,
    name: "Ibandronate (Boniva)",
    category: "Bone Health",
    useCase: "Treatment and prevention of postmenopausal osteoporosis",
    dosage: "150mg once monthly (oral) or 3mg IV every 3 months",
    sideEffects: ["Abdominal pain", "Dyspepsia", "Back pain", "Flu-like symptoms (IV)"],
    prescriptionRequired: true
  },
  {
    id: 68,
    name: "Febuxostat (Uloric)",
    category: "Anti-gout",
    useCase: "Chronic management of hyperuricemia in patients with gout",
    dosage: "40-80mg once daily",
    sideEffects: ["Liver function abnormalities", "Nausea", "Arthralgia", "Rash", "Increased risk of cardiovascular events (warning)"],
    prescriptionRequired: true
  },
  {
    id: 69,
    name: "Olanzapine (Zyprexa)",
    category: "Antipsychotic",
    useCase: "Treatment of schizophrenia and bipolar disorder",
    dosage: "5-20mg once daily",
    sideEffects: ["Weight gain", "Drowsiness", "Dizziness", "Increased appetite", "Hyperglycemia"],
    prescriptionRequired: true
  },
  {
    id: 70,
    name: "Pramipexole",
    category: "Neurological", 
    useCase: "Treatment of Parkinson's disease and restless legs syndrome (RLS)",
    dosage: "Parkinson's: titrated up to 1.5mg three times daily; RLS: 0.125-0.5mg once daily before bed",
    sideEffects: ["Nausea", "Dizziness", "Drowsiness", "Insomnia", "Hallucinations", "Compulsive behaviors"],
    prescriptionRequired: true
  },
  {
    id: 71,
    name: "Travoprost",
    category: "Eye Care", 
    useCase: "Reduction of elevated intraocular pressure in open-angle glaucoma or ocular hypertension",
    dosage: "1 drop in affected eye(s) once daily in the evening",
    sideEffects: ["Eye redness", "Iris pigmentation", "Eyelash changes", "Eye pain"],
    prescriptionRequired: true
  },
  {
    id: 72,
    name: "Neomycin/Polymyxin B/Hydrocortisone Otic",
    category: "Ear Care",
    useCase: "Treatment of bacterial external ear infections with inflammation",
    dosage: "3-4 drops into affected ear 3-4 times daily",
    sideEffects: ["Local irritation", "Allergic reaction (neomycin)", "Ototoxicity (rare, with perforated eardrum)"],
    prescriptionRequired: true
  },
  {
    id: 73,
    name: "Mometasone Cream",
    category: "Skin Care", 
    useCase: "Relief of inflammatory and pruritic manifestations of corticosteroid-responsive dermatoses",
    dosage: "Apply thin film once daily",
    sideEffects: ["Burning", "Itching", "Skin atrophy (long-term use)"],
    prescriptionRequired: true
  },
  {
    id: 74,
    name: "Tadalafil (Cialis)",
    category: "Men's Health", 
    useCase: "Treatment of erectile dysfunction, BPH, and pulmonary arterial hypertension",
    dosage: "ED: 10mg as needed or 2.5-5mg daily; BPH: 5mg daily",
    sideEffects: ["Headache", "Dyspepsia", "Back pain", "Myalgia", "Flushing"],
    prescriptionRequired: true
  },
  {
    id: 75,
    name: "Levonorgestrel/Ethinyl estradiol",
    category: "Women's Health", 
    useCase: "Oral contraceptive for pregnancy prevention",
    dosage: "1 tablet daily as per pack instructions",
    sideEffects: ["Nausea", "Headache", "Breast tenderness", "Irregular bleeding", "Mood changes"],
    prescriptionRequired: true
  },
  {
    id: 76,
    name: "Promethazine",
    category: "Antiemetic", 
    useCase: "Treatment of nausea/vomiting, motion sickness, allergic reactions, and for sedation",
    dosage: "12.5-25mg every 4-6 hours as needed",
    sideEffects: ["Drowsiness", "Dizziness", "Blurred vision", "Dry mouth", "Confusion (especially in elderly)"],
    prescriptionRequired: true
  },
  {
    id: 77,
    name: "Azathioprine",
    category: "Immunosuppressant",
    useCase: "Prevention of organ rejection in transplant patients; treatment of rheumatoid arthritis",
    dosage: "Individualized, (e.g., 1-3mg/kg/day)",
    sideEffects: ["Nausea", "Vomiting", "Leukopenia", "Increased infection risk", "Liver toxicity"],
    prescriptionRequired: true
  },
  {
    id: 78,
    name: "Budesonide Nasal Spray (Rhinocort)",
    category: "Nasal Steroid",
    useCase: "Treatment of nasal allergy symptoms",
    dosage: "1-2 sprays per nostril once daily",
    sideEffects: ["Nasal irritation", "Sore throat", "Cough", "Nosebleeds"],
    prescriptionRequired: false 
  },
  {
    id: 79,
    name: "Codeine/Guaifenesin",
    category: "Cough & Cold", 
    useCase: "Relief of cough and to loosen phlegm",
    dosage: "Varies by product, e.g., 10mL every 4-6 hours",
    sideEffects: ["Drowsiness", "Dizziness", "Nausea", "Constipation"],
    prescriptionRequired: true 
  },
  {
    id: 80,
    name: "Magnesium Hydroxide (Milk of Magnesia)",
    category: "Gastrointestinal", 
    useCase: "Relief of heartburn, sour stomach, acid indigestion, and as a laxative for constipation",
    dosage: "Antacid: 5-15mL; Laxative: 30-60mL",
    sideEffects: ["Diarrhea", "Abdominal cramping", "Electrolyte imbalance (with overuse)"],
    prescriptionRequired: false
  },
  {
    id: 81,
    name: "Docusate Sodium (Colace)",
    category: "Gastrointestinal", 
    useCase: "Prevention and treatment of constipation by softening stools",
    dosage: "50-300mg daily in divided doses",
    sideEffects: ["Mild abdominal cramps", "Diarrhea"],
    prescriptionRequired: false
  },
  {
    id: 82,
    name: "Oxycodone",
    category: "Opioid Analgesic",
    useCase: "Management of moderate to severe pain",
    dosage: "Individualized (e.g., IR 5-15mg every 4-6 hours)",
    sideEffects: ["Drowsiness", "Constipation", "Nausea", "Vomiting", "Dizziness", "Respiratory depression"],
    prescriptionRequired: true
  },
  {
    id: 83,
    name: "Clonazepam (Klonopin)",
    category: "Mental Health", 
    useCase: "Treatment of panic disorder and certain types of seizures",
    dosage: "Panic: 0.25mg twice daily, titrated; Seizures: individualized",
    sideEffects: ["Drowsiness", "Dizziness", "Coordination problems", "Fatigue"],
    prescriptionRequired: true
  },
  {
    id: 84,
    name: "Amantadine",
    category: "Antiviral", 
    useCase: "Treatment/prevention of influenza A; treatment of Parkinson's disease and drug-induced extrapyramidal reactions",
    dosage: "100mg twice daily or 200mg once daily",
    sideEffects: ["Nausea", "Dizziness", "Insomnia", "Livedo reticularis (skin mottling)"],
    prescriptionRequired: true
  },
  {
    id: 85,
    name: "Carisoprodol (Soma)",
    category: "Muscle Relaxant",
    useCase: "Short-term relief of discomfort associated with acute, painful musculoskeletal conditions",
    dosage: "250-350mg three times daily and at bedtime",
    sideEffects: ["Drowsiness", "Dizziness", "Headache", "Risk of dependence"],
    prescriptionRequired: true
  },
  {
    id: 86,
    name: "Eletriptan",
    category: "Migraine Medication",
    useCase: "Acute treatment of migraine with or without aura",
    dosage: "20-40mg at onset, may repeat after 2 hours (max 80mg/day)",
    sideEffects: ["Dizziness", "Nausea", "Weakness", "Chest/throat tightness"],
    prescriptionRequired: true
  },
  {
    id: 87,
    name: "Guanfacine",
    category: "ADHD Medication", 
    useCase: "Treatment of ADHD (ER form) and hypertension (IR form)",
    dosage: "ADHD: 1-4mg once daily (ER); HTN: 1-2mg once daily (IR)",
    sideEffects: ["Drowsiness", "Fatigue", "Dizziness", "Dry mouth", "Hypotension"],
    prescriptionRequired: true
  },
  {
    id: 88,
    name: "Risedronate",
    category: "Bone Health",
    useCase: "Treatment and prevention of osteoporosis",
    dosage: "5mg daily, 35mg weekly, or 150mg monthly",
    sideEffects: ["Abdominal pain", "Dyspepsia", "Musculoskeletal pain", "Hypertension"],
    prescriptionRequired: true
  },
  {
    id: 89,
    name: "Colchicine",
    category: "Anti-gout", 
    useCase: "Treatment of acute gout flares and prevention of gout; treatment of familial Mediterranean fever",
    dosage: "Gout flare: 1.2mg initially, then 0.6mg 1 hour later; Prophylaxis: 0.6mg once or twice daily",
    sideEffects: ["Diarrhea", "Nausea", "Vomiting", "Abdominal pain", "Myelosuppression (rare)"],
    prescriptionRequired: true
  },
  {
    id: 90,
    name: "Quetiapine (Seroquel)",
    category: "Antipsychotic",
    useCase: "Treatment of schizophrenia, bipolar disorder, and adjunctive treatment for major depressive disorder",
    dosage: "Highly variable, titrated (e.g., schizophrenia: 150-750mg/day)",
    sideEffects: ["Drowsiness", "Dizziness", "Weight gain", "Dry mouth", "Constipation", "Increased blood sugar"],
    prescriptionRequired: true
  },
  {
    id: 91,
    name: "Ropinirole",
    category: "Neurological", 
    useCase: "Treatment of Parkinson's disease and moderate-to-severe primary Restless Legs Syndrome (RLS)",
    dosage: "Parkinson's: titrated up to 24mg/day; RLS: 0.25-4mg once daily before bed",
    sideEffects: ["Nausea", "Drowsiness", "Dizziness", "Fatigue", "Hallucinations", "Compulsive behaviors"],
    prescriptionRequired: true
  },
  {
    id: 92,
    name: "Dorzolamide/Timolol (Cosopt)",
    category: "Eye Care", 
    useCase: "Reduction of elevated intraocular pressure in patients with open-angle glaucoma or ocular hypertension",
    dosage: "1 drop in affected eye(s) twice daily",
    sideEffects: ["Burning/stinging in eye", "Blurred vision", "Bitter taste", "Systemic beta-blocker effects (rare)"],
    prescriptionRequired: true
  },
  {
    id: 93,
    name: "Clobetasol Propionate Cream",
    category: "Skin Care", 
    useCase: "Short-term treatment of inflammatory and pruritic manifestations of moderate to severe corticosteroid-responsive dermatoses",
    dosage: "Apply thin layer twice daily for up to 2 weeks",
    sideEffects: ["Burning", "Stinging", "Itching", "Skin atrophy", "Systemic absorption risk"],
    prescriptionRequired: true
  },
  {
    id: 94,
    name: "Vardenafil (Levitra)",
    category: "Men's Health", 
    useCase: "Treatment of erectile dysfunction",
    dosage: "10mg as needed ~1hr before activity (max 20mg, once daily)",
    sideEffects: ["Headache", "Flushing", "Nasal congestion", "Dyspepsia", "Dizziness"],
    prescriptionRequired: true
  },
  {
    id: 95,
    name: "Drospirenone/Ethinyl estradiol (Yasmin/Yaz)",
    category: "Women's Health", 
    useCase: "Oral contraceptive for pregnancy prevention; Yaz also for PMDD and acne",
    dosage: "1 tablet daily as per pack instructions",
    sideEffects: ["Nausea", "Breast tenderness", "Headache", "Mood changes", "Increased potassium risk (drospirenone)"],
    prescriptionRequired: true
  },
  {
    id: 96,
    name: "Metoclopramide",
    category: "Antiemetic", 
    useCase: "Treatment of GERD, diabetic gastroparesis, and prevention of nausea/vomiting",
    dosage: "5-10mg, 3-4 times daily, 30 mins before meals",
    sideEffects: ["Drowsiness", "Restlessness", "Fatigue", "Tardive dyskinesia (serious, long-term use)"],
    prescriptionRequired: true
  },
  {
    id: 97,
    name: "Cyclosporine",
    category: "Immunosuppressant",
    useCase: "Prevention of organ rejection in transplant; treatment of rheumatoid arthritis and psoriasis",
    dosage: "Highly individualized based on transplant type, weight, and blood levels",
    sideEffects: ["Kidney dysfunction", "Hypertension", "Tremor", "Hirsutism", "Gingival hyperplasia", "Increased infection risk"],
    prescriptionRequired: true
  },
  {
    id: 98,
    name: "Triamcinolone Nasal Spray (Nasacort)",
    category: "Nasal Steroid",
    useCase: "Treatment of nasal allergy symptoms",
    dosage: "2 sprays per nostril once daily, may reduce to 1 spray",
    sideEffects: ["Headache", "Nosebleeds", "Sore throat", "Nasal irritation"],
    prescriptionRequired: false 
  },
  {
    id: 99,
    name: "Benzonatate (Tessalon Perles)",
    category: "Cough & Cold", 
    useCase: "Symptomatic relief of cough",
    dosage: "100-200mg three times daily as needed",
    sideEffects: ["Drowsiness", "Dizziness", "Headache", "Numbness of chest/throat if chewed"],
    prescriptionRequired: true
  },
  {
    id: 100,
    name: "Famotidine (Pepcid)",
    category: "Gastrointestinal", 
    useCase: "Treatment of ulcers, GERD, and conditions with excessive stomach acid; heartburn prevention",
    dosage: "20-40mg once or twice daily",
    sideEffects: ["Headache", "Dizziness", "Constipation", "Diarrhea"],
    prescriptionRequired: false 
  },
  {
    id: 101,
    name: "Psyllium Husk (Metamucil)",
    category: "Gastrointestinal", 
    useCase: "Treatment of occasional constipation and to help maintain regularity",
    dosage: "1-2 rounded teaspoons in 8oz liquid, 1-3 times daily",
    sideEffects: ["Bloating", "Gas", "Abdominal fullness", "Ensure adequate fluid intake"],
    prescriptionRequired: false
  },
  {
    id: 102,
    name: "Hydrocodone/Acetaminophen (Vicodin, Norco)",
    category: "Opioid Analgesic",
    useCase: "Management of moderate to moderately severe pain",
    dosage: "Varies by strength (e.g., 5/325mg, 1-2 tablets every 4-6 hours)",
    sideEffects: ["Drowsiness", "Dizziness", "Constipation", "Nausea", "Risk of liver damage (acetaminophen)", "Respiratory depression"],
    prescriptionRequired: true
  },
  {
    id: 103,
    name: "Buspirone",
    category: "Mental Health", 
    useCase: "Management of anxiety disorders",
    dosage: "Initial 7.5mg twice daily, titrated up to 60mg/day",
    sideEffects: ["Dizziness", "Nausea", "Headache", "Nervousness", "Lightheadedness"],
    prescriptionRequired: true
  },
  {
    id: 104,
    name: "Donepezil",
    category: "Neurological", 
    useCase: "Treatment of mild to severe dementia of the Alzheimer's type",
    dosage: "5-10mg once daily at bedtime, may increase to 23mg",
    sideEffects: ["Nausea", "Diarrhea", "Insomnia", "Vomiting", "Muscle cramps", "Fatigue"],
    prescriptionRequired: true
  },
  {
    id: 105,
    name: "Baclofen",
    category: "Muscle Relaxant", 
    useCase: "Alleviation of signs and symptoms of spasticity resulting from multiple sclerosis",
    dosage: "Initial 5mg three times daily, titrated up to max 80mg/day",
    sideEffects: ["Drowsiness", "Dizziness", "Weakness", "Fatigue", "Confusion", "Nausea"],
    prescriptionRequired: true
  },
  {
    id: 106,
    name: "Ezetimibe",
    category: "Cholesterol",
    useCase: "Reduction of elevated total-C, LDL-C, Apo B in patients with primary hyperlipidemia, alone or with a statin",
    dosage: "10mg once daily",
    sideEffects: ["Diarrhea", "Fatigue", "Sinusitis", "Joint pain", "Muscle aches (when with statin)"],
    prescriptionRequired: true
  },
  {
    id: 107,
    name: "Dextroamphetamine/Amphetamine (Adderall)",
    category: "ADHD Medication", 
    useCase: "Treatment of ADHD and narcolepsy",
    dosage: "Individualized and titrated (e.g., IR 5mg once or twice daily, up to 40mg/day for adults)",
    sideEffects: ["Insomnia", "Dry mouth", "Loss of appetite", "Weight loss", "Nervousness", "Increased heart rate"],
    prescriptionRequired: true
  },
  {
    id: 108,
    name: "Zoledronic Acid (Reclast, Zometa)",
    category: "Bone Health", 
    useCase: "Osteoporosis treatment/prevention; Paget's disease; hypercalcemia of malignancy; bone metastases",
    dosage: "Osteoporosis: 5mg IV once yearly; Other indications vary",
    sideEffects: ["Flu-like symptoms (fever, myalgia, arthralgia)", "Headache", "Nausea", "Kidney problems", "Osteonecrosis of the jaw (rare)"],
    prescriptionRequired: true
  },
  {
    id: 109,
    name: "Probenecid",
    category: "Anti-gout", 
    useCase: "Treatment of hyperuricemia associated with gout and gouty arthritis; prolongs penicillin levels",
    dosage: "250mg twice daily for 1 week, then 500mg twice daily",
    sideEffects: ["Headache", "Loss of appetite", "Nausea", "Vomiting", "Rash", "Can precipitate gout attack initially"],
    prescriptionRequired: true
  },
  {
    id: 110,
    name: "Aripiprazole (Abilify)",
    category: "Antipsychotic",
    useCase: "Treatment of schizophrenia, bipolar disorder, major depressive disorder (adjunct), autism-related irritability, Tourette's",
    dosage: "Highly variable, (e.g., Schizophrenia: 10-15mg once daily, up to 30mg)",
    sideEffects: ["Headache", "Agitation", "Insomnia", "Nausea", "Vomiting", "Akathisia", "Weight gain (less than some others)"],
    prescriptionRequired: true
  },
  {
    id: 111,
    name: "Insulin Glargine (Lantus, Basaglar)",
    category: "Diabetes",
    useCase: "Long-acting insulin for management of type 1 and type 2 diabetes",
    dosage: "Individualized, once daily at the same time each day",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection site reactions", "Lipodystrophy"],
    prescriptionRequired: true
  },
  {
    id: 112,
    name: "Brimonidine Ophthalmic",
    category: "Eye Care", 
    useCase: "Lowering intraocular pressure in patients with open-angle glaucoma or ocular hypertension",
    dosage: "1 drop in affected eye(s) 2-3 times daily",
    sideEffects: ["Eye redness", "Allergic conjunctivitis", "Oral dryness", "Blurred vision", "Drowsiness"],
    prescriptionRequired: true
  },
  {
    id: 113,
    name: "Betamethasone Cream",
    category: "Skin Care", 
    useCase: "Relief of inflammatory and pruritic manifestations of corticosteroid-responsive dermatoses",
    dosage: "Apply thin film 1-2 times daily",
    sideEffects: ["Burning", "Itching", "Dryness", "Skin atrophy", "Telangiectasia"],
    prescriptionRequired: true
  },
  {
    id: 114,
    name: "Finasteride",
    category: "Urological", 
    useCase: "Treatment of benign prostatic hyperplasia (BPH); treatment of male pattern hair loss",
    dosage: "BPH: 5mg once daily; Hair loss: 1mg once daily",
    sideEffects: ["Decreased libido", "Erectile dysfunction", "Ejaculation disorder", "Breast tenderness/enlargement"],
    prescriptionRequired: true
  },
  {
    id: 115,
    name: "Etonogestrel/Ethinyl estradiol (NuvaRing)",
    category: "Women's Health", 
    useCase: "Contraceptive vaginal ring for pregnancy prevention",
    dosage: "1 ring inserted vaginally for 3 weeks, then removed for 1 week",
    sideEffects: ["Vaginitis", "Headache", "Nausea", "Breast tenderness", "Mood changes", "Device-related events"],
    prescriptionRequired: true
  },
  {
    id: 116,
    name: "Scopolamine Patch",
    category: "Antiemetic", 
    useCase: "Prevention of nausea and vomiting associated with motion sickness and recovery from anesthesia",
    dosage: "1 patch applied behind the ear every 3 days as needed",
    sideEffects: ["Dry mouth", "Drowsiness", "Blurred vision", "Dizziness", "Confusion"],
    prescriptionRequired: true
  },
  {
    id: 117,
    name: "Tacrolimus (Oral/Topical)",
    category: "Immunosuppressant", 
    useCase: "Oral: Prophylaxis of organ rejection in transplant. Topical: Treatment of moderate to severe atopic dermatitis",
    dosage: "Oral: Highly individualized. Topical: Apply thin layer twice daily",
    sideEffects: ["Oral: Nephrotoxicity, neurotoxicity, hypertension, hyperglycemia. Topical: Skin burning, itching"],
    prescriptionRequired: true
  },
  {
    id: 118,
    name: "Oxymetazoline Nasal Spray (Afrin)",
    category: "Cough & Cold", 
    useCase: "Temporary relief of nasal congestion due to cold, hay fever, or other upper respiratory allergies",
    dosage: "2-3 sprays in each nostril not more often than every 10-12 hours (max 2 doses/24h, max 3 days use)",
    sideEffects: ["Temporary burning/stinging", "Sneezing", "Rebound congestion (with overuse)"],
    prescriptionRequired: false
  },
  {
    id: 119,
    name: "Hydroxyzine",
    category: "Allergy", 
    useCase: "Symptomatic relief of anxiety and tension; management of pruritus due to allergic conditions; sedative",
    dosage: "Anxiety: 50-100mg 4 times daily; Pruritus: 25mg 3-4 times daily",
    sideEffects: ["Drowsiness", "Dry mouth", "Dizziness", "Blurred vision"],
    prescriptionRequired: true
  },
  {
    id: 120,
    name: "Esomeprazole (Nexium)",
    category: "Gastrointestinal", 
    useCase: "Treatment of GERD, erosive esophagitis, Zollinger-Ellison syndrome; H. pylori eradication",
    dosage: "20-40mg once daily",
    sideEffects: ["Headache", "Diarrhea", "Nausea", "Abdominal pain", "Long-term use risks (fractures, B12 deficiency)"],
    prescriptionRequired: false 
  },
  {
    id: 121,
    name: "Memantine",
    category: "Neurological", 
    useCase: "Treatment of moderate to severe dementia of the Alzheimer's type",
    dosage: "Titrated up to 10mg twice daily",
    sideEffects: ["Dizziness", "Headache", "Confusion", "Constipation", "Hypertension"],
    prescriptionRequired: true
  },
  {
    id: 122,
    name: "Pregabalin (Lyrica)",
    category: "Anticonvulsant", 
    useCase: "Management of neuropathic pain, fibromyalgia, seizures, and generalized anxiety disorder",
    dosage: "Highly variable, titrated (e.g., 75-300mg twice daily)",
    sideEffects: ["Dizziness", "Drowsiness", "Peripheral edema", "Weight gain", "Dry mouth", "Blurred vision"],
    prescriptionRequired: true
  },
  {
    id: 123,
    name: "Spironolactone",
    category: "Diuretic", 
    useCase: "Treatment of edema, hypertension, heart failure; also used for acne and hirsutism (anti-androgen effects)",
    dosage: "25-200mg daily, varies by indication",
    sideEffects: ["Hyperkalemia", "Gynecomastia (in males)", "Menstrual irregularities", "Dizziness", "Fatigue"],
    prescriptionRequired: true
  },
  {
    id: 124,
    name: "Terbinafine (Oral/Topical)",
    category: "Antifungal",
    useCase: "Oral: Treatment of fungal infections of fingernails and toenails. Topical: Athlete's foot, ringworm, jock itch.",
    dosage: "Oral: 250mg once daily for 6-12 weeks. Topical: Apply once or twice daily.",
    sideEffects: ["Oral: Headache, diarrhea, rash, liver enzyme changes, taste disturbance. Topical: Local irritation."],
    prescriptionRequired: true 
  },
  {
    id: 125,
    name: "Duloxetine (Cymbalta)",
    category: "Mental Health", 
    useCase: "Treatment of major depressive disorder, generalized anxiety disorder, diabetic peripheral neuropathic pain, fibromyalgia, chronic musculoskeletal pain",
    dosage: "30-60mg once daily, may increase to 120mg/day for some indications",
    sideEffects: ["Nausea", "Dry mouth", "Constipation", "Drowsiness", "Dizziness", "Insomnia", "Increased sweating"],
    prescriptionRequired: true
  }
];

export const categories = [
  "All",
  "Pain Relief",
  "Anti-inflammatory",
  "Antibiotic",
  "Blood Pressure",
  "Diabetes",
  "Allergy",
  "Gastrointestinal",
  "Cholesterol",
  "Mental Health", 
  "Respiratory",
  "Blood Thinner",
  "Thyroid",
  "Antifungal",
  "Corticosteroid", 
  "Diuretic",
  "Anticonvulsant",
  "Urological",
  "Sleep Aid",
  "Antiviral",
  "Muscle Relaxant",
  "Migraine Medication",
  "ADHD Medication",
  "Bone Health", 
  "Anti-gout",
  "Antipsychotic",
  "Neurological",
  "Eye Care",
  "Ear Care",
  "Skin Care", 
  "Men's Health", 
  "Women's Health",
  "Antiemetic", 
  "Immunosuppressant",
  "Cough & Cold", 
  "Opioid Analgesic" 
];