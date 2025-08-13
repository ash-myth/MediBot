import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutInfoSection = () => {
  return (
    <section className="py-14 bg-secondary/15">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-foreground mb-5">Who We Are</h2>
            <p className="mb-3 text-muted-foreground">
              MediBot is a trusted platform that simplifies access to medication knowledge. 
              From usage to dosage and side effects, we provide clear and verified data to keep users informed.
            </p>
            <p className="mb-5 text-muted-foreground">
              We believe that understanding your medicine is the first step toward better health. 
              MediBot encourages smart and safe decision-making in collaboration with medical professionals.
            </p>
            <div className="flex gap-4">
              <Link to="/about">
                <Button variant="default">Explore More</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Reach Out</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center shadow-md">
              <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center">
                <svg
                  width="40%"
                  height="40%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfoSection;
