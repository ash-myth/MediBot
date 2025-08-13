
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  content: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    content: "MediBot has been incredibly helpful for understanding my medications. The search feature is intuitive and the information is comprehensive.",
    name: "Sarah Johnson",
    role: "Patient"
  },
  {
    content: "As a pharmacy student, I find MediBot to be an excellent resource for quick reference on medication information and dosages.",
    name: "Michael Chen",
    role: "Pharmacy Student"
  },
  {
    content: "The interface is clean and easy to navigate. I appreciate how well-organized the medication details are presented.",
    name: "Emma Rodriguez",
    role: "Healthcare Professional"
  },
  {
    content: "MediBot has become my go-to resource for checking medication information before discussing with my doctor.",
    name: "David Thompson",
    role: "Patient"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from people who have benefited from using MediBot.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg bg-card shadow">
            <div className="p-8">
              <blockquote className="text-center">
                <p className="text-xl italic text-foreground mb-6">"{testimonials[activeIndex].content}"</p>
                <footer className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="text-base font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <Button variant="outline" size="icon" onClick={handlePrev}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                activeIndex === index ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
