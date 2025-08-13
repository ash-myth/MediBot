import { useState, FormEvent, ChangeEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/supabaseClient.js";

console.log("Supabase client imported in Contact.tsx:", supabase);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      const { error } = await supabase
        .from('Contact')
        .insert([
          { name: formData.name, email: formData.email, message: formData.message }
        ]);

      
      if (error) {
        throw error;
      }

    
      toast({
        title: "Message Sent!",
        description: "Thank you for getting in touch. We will get back to you soon.",
      });

  
      setFormData({ name: "", email: "", message: "" });

    } catch (error: any) {
      console.error("Submission Error:", error);
      
      toast({
        title: "Submission Error",
        description: error.message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-secondary/50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions, feedback, or suggestions? We'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <a href="https://www.google.com/maps/search/?api=1&query=Shree+Homes+by+Sarvome,+Main+Road,+Sector+45,+Faridabad" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      Shree Homes by Sarvome, Main Road, Sector 45, Faridabad
                    </p>
                  </div>
                  </a>
                  <a href="mailto:0501saurav@gmail.com" className="block hover:text-primary transition-colors">
                    <h3 className="font-semibold text-lg mb-2" >Email Us</h3>
                    <p className="text-muted-foreground" >
                      0501saurav@gmail.com
                    </p>
                  </a>
              
                  <a href="tel:+918481815738" className="block hover:text-primary transition-colors">
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      +91 9572855213
                    </p>
                  </a>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: 10am - 2pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3">Is MediBot a substitute for medical advice?</h3>
                <p className="text-muted-foreground">
                  No, MediBot is an informational resource only. Always consult with qualified healthcare professionals for medical advice specific to your situation.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3">How is the medicine information maintained?</h3>
                <p className="text-muted-foreground">
                  Our team of healthcare professionals regularly reviews and updates all medicine information based on the latest research and guidelines.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3">Can I suggest new features for MediBot?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We welcome user feedback and suggestions. Please use the contact form to share your ideas with us.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3">Is my information secure when using MediBot?</h3>
                <p className="text-muted-foreground">
                  Yes, we prioritize user privacy and data security. We do not store personal health information and all interactions are encrypted.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Contact;
