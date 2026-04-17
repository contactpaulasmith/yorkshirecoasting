import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { properties } = useAppContext();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
    }, 800);
  };

  return (
    <Layout>
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/75 max-w-2xl mx-auto"
          >
            Whether you have a question about a specific property or need help planning your stay, we're here to help.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-serif text-primary mb-6">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We aim to respond to all enquiries within 24 hours. For urgent booking matters, please call us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:hello@yorkshirecoasting.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@yorkshirecoasting.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+447715417923" className="text-muted-foreground hover:text-primary transition-colors">
                      +44 (0) 7715 417 923
                    </a>
                    <p className="text-sm text-muted-foreground/70 mt-1">Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      YorkshireCoasting Ltd<br/>
                      14 Harbour Road<br/>
                      Scarborough, North Yorkshire<br/>
                      YO11 1XX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              {isSubmitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-3">Message Sent</h3>
                  <p className="text-muted-foreground mb-8 max-w-sm">
                    Thank you for reaching out. We have received your message and will be in touch shortly.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-serif text-primary mb-6">Send an Enquiry</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="Jane Doe" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="jane@example.com" className="bg-background" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+44..." className="bg-background" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="property">Property of Interest (Optional)</Label>
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a property" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Enquiry</SelectItem>
                          {properties.map(p => (
                            <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="How can we help you?" 
                        rows={5}
                        className="bg-background resize-none"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full rounded-full shadow-sm" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
    </Layout>
  );
}
