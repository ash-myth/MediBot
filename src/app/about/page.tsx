
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircleQuestion, Search, Info } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    icon: MessageCircleQuestion,
    title: 'AI Chat Assistant',
    description:
      'Get instant answers to your medical questions through our intuitive chat interface, designed to provide reliable information when you need it.',
  },
  {
    icon: Search,
    title: 'Medicine Search',
    description:
      'Browse and search our comprehensive database of medications, complete with detailed information on usage, dosage, and potential side effects.',
  },
  {
    icon: Info,
    title: 'Reliable Information',
    description:
      'All medical information is carefully curated from trusted sources, ensuring you receive accurate and up-to-date guidance for your health concerns.',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <motion.section 
        className="bg-muted/20 py-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            About MediBot
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Making medical information accessible, understandable, and reliable
            for everyone.
          </p>
        </div>
      </motion.section>

      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Mission
            </h2>
            <p className="text-muted-foreground md:text-lg">
              MediBot was created with a simple but powerful mission: to bridge
              the gap between complex medical information and everyday
              understanding.
            </p>
            <p className="text-muted-foreground md:text-lg">
              We believe that access to clear, accurate, and reliable medical
              information should be available to everyone, regardless of their
              background or prior knowledge.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Through our platform, we aim to empower individuals to make
              informed decisions about their health and medication needs,
              promoting better health outcomes for all.
            </p>
          </motion.div>
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute bg-primary/20 rounded-full w-48 h-48 sm:w-64 sm:h-64 blur-3xl animate-pulse"></div>
            <motion.div 
              className="relative bg-primary/10 rounded-full p-8"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-background rounded-full p-12 shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Key Features
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
              >
                <Card
                  className="bg-background/50 border shadow-lg text-center flex flex-col h-full hover:shadow-primary/20 hover:shadow-xl"
                >
                  <CardHeader className="flex flex-col items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        className="w-full py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Start Using MediBot Today
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-lg">
            Join thousands of users who trust MediBot for reliable medical
            information and guidance.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link href="/search">Explore Medicines</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
