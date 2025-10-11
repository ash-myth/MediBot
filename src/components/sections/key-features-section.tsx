
'use client';
import { BookMarked, MessageCircleQuestion, SearchCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

const features = [
    {
      icon: BookMarked,
      title: "Comprehensive Medicine Database",
      description: "Access information on a wide range of prescription and over-the-counter medications."
    },
    {
      icon: SearchCheck,
      title: "Advanced Search",
      description: "Find medications by name, category, or health condition with our powerful search tools."
    },
    {
      icon: MessageCircleQuestion,
      title: "Virtual Assistant",
      description: "Get answers to your medication questions through our AI-powered chat assistant."
    }
]

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

export default function KeyFeaturesSection() {
    return (
        <section id="features" className="w-full py-12 md:py-20 lg:py-28">
            <div className="container mx-auto px-4">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                        Discover how MediBot can help you better understand your medications and health needs.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
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
                          <Card className="bg-background/50 border shadow-lg text-center flex flex-col h-full hover:shadow-primary/20 hover:shadow-xl">
                              <CardHeader className="flex flex-col items-center">
                                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                                      <feature.icon className="h-8 w-8 text-primary" />
                                  </div>
                                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="flex-1">
                                  <p className="text-muted-foreground">{feature.description}</p>
                              </CardContent>
                          </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
