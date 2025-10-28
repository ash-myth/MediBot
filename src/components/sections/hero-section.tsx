
'use client';
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            MediBot <br />
            <span className="text-primary">Your Medical Info Assistant</span>
          </h1>
          <p className="max-w-xl mx-auto md:mx-0 text-muted-foreground md:text-xl">
            Find the right medicine. Understand the right care.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button size="lg" asChild>
              <a href="/search">Explore Medicines</a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="absolute bg-primary/20 rounded-full w-64 h-64 blur-3xl animate-pulse"></div>
            <motion.div 
              className="relative bg-primary/10 rounded-full p-8"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-background rounded-full p-12 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
