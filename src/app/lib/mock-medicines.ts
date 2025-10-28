
import type { Medicine } from './types';

export const mockMedicines: Medicine[] = [
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
    prescriptionRequired: true
  },
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
    category: "Cough & Cold",
    useCase: "Treatment of nasal allergy symptoms (congestion, runny nose, sneezing).",
    dosage: "1-2 sprays in each nostril once daily",
    sideEffects: ["Nosebleeds", "Nasal irritation", "Headache"],
    prescriptionRequired: false
  }
];
