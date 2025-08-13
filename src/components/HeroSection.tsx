
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-secondary/50 to-background py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text content */}
          <div 
            className={`md:w-1/2 text-center md:text-left mb-12 md:mb-0 ${
              isLoaded ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              MediBot
              <span className="block text-primary mt-1">Your Medical Info Assistant</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
              Find the right medicine. Understand the right care.
            </p>
            <div className="mt-10">
              <Link to="/search">
                <Button 
                  className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Explore Medicines
                </Button>
              </Link>
            </div>
          </div>

          {/* Image/Icon */}
          <div 
            className={`md:w-1/2 flex justify-center ${
              isLoaded ? "opacity-100 transition-opacity duration-1000 delay-300" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                  <svg 
                    width="60%" 
                    height="60%" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path 
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,130.83,141.48,214.86,130.19,287.14,119.34,284.34,63.67,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
