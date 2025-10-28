
'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "MediBot has been incredibly helpful for understanding my medications. The search feature is intuitive and the information is comprehensive.",
        name: "Sarah Johnson",
        title: "Patient",
        avatar: "S"
    },
    {
        quote: "As a medical student, MediBot is my go-to for quick reference. It's accurate and saves me a lot of time.",
        name: "John Doe",
        title: "Medical Student",
        avatar: "J"
    },
    {
        quote: "The patient simulation feature is a game-changer for understanding potential drug interactions. Highly recommended!",
        name: "Dr. Emily White",
        title: "Pharmacist",
        avatar: "E"
    }
]

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full py-12 md:py-20 lg:py-28 bg-muted/20">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Users Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                        Hear from people who have benefited from using MediBot.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <Carousel
                        opts={{ align: "start", loop: true, }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card className="border-0 shadow-none bg-transparent">
                                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                                <blockquote className="text-2xl font-semibold leading-snug text-foreground max-w-2xl">
                                                    &ldquo;{testimonial.quote}&rdquo;
                                                </blockquote>
                                                <div className="mt-6 flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src={`https://picsum.photos/seed/${index + 10}/40/40`} />
                                                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-semibold">{testimonial.name}</p>
                                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}
