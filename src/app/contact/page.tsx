
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';


const faqItems = [
  {
    question: 'Is MediBot a substitute for medical advice?',
    answer:
      'No, MediBot is an informational resource only. Always consult with qualified healthcare professionals for medical advice specific to your situation.',
  },
  {
    question: 'How is the medicine information maintained?',
    answer:
      'Our team of healthcare professionals regularly reviews and updates all medicine information based on the latest research and guidelines.',
  },
  {
    question: 'Can I suggest new features for MediBot?',
    answer:
      'Absolutely! We welcome user feedback and suggestions. Please use the contact form to share your ideas with us.',
  },
  {
    question: 'Is my information secure when using MediBot?',
    answer:
      'Yes, we prioritize user privacy and data security. We do not store personal health information and all interactions are encrypted.',
  },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        variant: 'destructive',
        title: 'Incomplete Form',
        description: 'Please fill out all fields before sending.',
      });
      return;
    }

    const subject = `Message from ${name} (${email})`;
    const body = message;
    const mailtoLink = `mailto:ashmitchatta445@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    
    toast({
      title: 'Email Client Opened',
      description: 'Please complete sending the message in your email application.',
    });

    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-muted/20 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Have questions, feedback, or suggestions? We&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[120px]"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full transition-transform duration-300 hover:scale-105" size="lg">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground">Schedule a Meeting</h3>
                  <p>Book a time on my calendar for a one-on-one discussion.</p>
                   <Button asChild className="mt-2">
                      <Link href="https://cal.com/medibot" target="_blank" rel="noopener noreferrer">
                        Schedule Now
                      </Link>
                    </Button>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Location</h3>
                  <p>
                    Manav Rachna International Institute Of Research And Studies
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p>medibot@info.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday: 10am - 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
