import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter";
import Layout from "@/components/layout/Layout";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MapPin, Users, Bed, Bath, Check, Star, ArrowLeft, ExternalLink } from "lucide-react";

export default function PropertyDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { properties, thingsToDo, reviews } = useAppContext();
  
  const property = properties.find(p => p.slug === params.slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!property) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-serif text-primary mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find the property you're looking for.</p>
          <Button onClick={() => setLocation("/properties")}>Return to Properties</Button>
        </div>
      </Layout>
    );
  }

  const propertyReviews = reviews.filter(r => r.propertyId === property.id && r.status === "approved");
  const averageRating = propertyReviews.length > 0 
    ? (propertyReviews.reduce((acc, r) => acc + r.rating, 0) / propertyReviews.length).toFixed(1) 
    : "New";

  const propertyThingsToDo = thingsToDo.filter(t => t.propertyIds.length === 0 || t.propertyIds.includes(property.id));
  const categories = ["All", "Food & Drink", "Beaches", "Attractions", "Shopping"];

  return (
    <Layout>
      {/* Back Button & Title Area */}
      <div className="bg-background pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setLocation("/properties")}
            className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to all properties
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-serif text-primary mb-3"
              >
                {property.name}
              </motion.h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center"><MapPin size={16} className="mr-1.5" /> {property.location}</span>
                <span className="flex items-center"><Star size={16} className="mr-1.5 text-accent fill-accent" /> {averageRating} ({propertyReviews.length} reviews)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <div className="text-2xl font-serif text-foreground">£{property.pricePerNight}</div>
                <div className="text-sm text-muted-foreground">per night</div>
              </div>
              <Button 
                size="lg" 
                className="rounded-full w-full md:w-auto shadow-sm"
                onClick={() => window.open(property.airbnbLink, "_blank")}
              >
                Check Availability <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh] min-h-[400px] max-h-[600px] rounded-2xl overflow-hidden"
        >
          <div className="md:col-span-2 md:row-span-2">
            <img src={property.images[0]} alt={`${property.name} main`} className="w-full h-full object-cover" />
          </div>
          {property.images.slice(1, 5).map((img, idx) => (
            <div key={idx} className="hidden md:block">
              <img src={img} alt={`${property.name} detail ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Quick Stats & Description */}
            <section>
              <div className="flex flex-wrap gap-8 py-6 border-y border-border mb-8">
                <div className="flex items-center gap-3"><Users className="text-primary/70" size={24} /> <div><div className="font-medium">Sleeps</div><div className="text-sm text-muted-foreground">{property.sleeps} guests</div></div></div>
                <div className="flex items-center gap-3"><Bed className="text-primary/70" size={24} /> <div><div className="font-medium">Bedrooms</div><div className="text-sm text-muted-foreground">{property.bedrooms}</div></div></div>
                <div className="flex items-center gap-3"><Bath className="text-primary/70" size={24} /> <div><div className="font-medium">Bathrooms</div><div className="text-sm text-muted-foreground">{property.bathrooms}</div></div></div>
              </div>
              
              <h2 className="text-2xl font-serif text-primary mb-4">About this home</h2>
              <div className="prose prose-stone max-w-none text-muted-foreground leading-relaxed">
                <p>{property.description}</p>
              </div>
            </section>

            {/* Amenities / Benefits */}
            <section>
              <h2 className="text-2xl font-serif text-primary mb-6">Home highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-foreground">
                    <div className="bg-primary/10 p-1.5 rounded-full text-primary">
                      <Check size={16} />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
            </section>

            {/* Things To Do */}
            <section>
              <h2 className="text-2xl font-serif text-primary mb-2">Local Area</h2>
              <p className="text-muted-foreground mb-8">Our curated guide to the best of {property.location.split(',')[0]} and beyond.</p>
              
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="mb-6 flex flex-wrap h-auto bg-transparent gap-2">
                  {categories.map(cat => (
                    <TabsTrigger 
                      key={cat} 
                      value={cat}
                      className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border data-[state=inactive]:hover:bg-muted"
                    >
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map(cat => (
                  <TabsContent key={cat} value={cat} className="mt-0 outline-none">
                    <div className="grid gap-4">
                      {propertyThingsToDo
                        .filter(t => cat === "All" || t.category === cat)
                        .map(thing => (
                        <Card key={thing.id} className="border-border/50 shadow-sm">
                          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium text-foreground">{thing.title}</h3>
                                <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{thing.category}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">{thing.description}</p>
                              <p className="text-xs text-muted-foreground/70"><MapPin size={12} className="inline mr-1"/>{thing.location}</p>
                            </div>
                            <Button variant="outline" size="sm" className="shrink-0" onClick={() => window.open(thing.link, "_blank")}>
                              Visit Website
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Booking Card (Mobile Sticky) */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm sticky top-28">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-3xl font-serif text-foreground">£{property.pricePerNight}</span>
                  <span className="text-muted-foreground text-sm ml-1">/ night</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full rounded-full shadow-sm mb-4"
                onClick={() => window.open(property.airbnbLink, "_blank")}
              >
                Check Availability <ExternalLink size={16} className="ml-2" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                You will be redirected to Airbnb to complete your booking securely.
              </p>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="text-xl font-serif text-primary mb-6 flex items-center">
                <Star className="mr-2 fill-accent text-accent" size={20} /> Guest Reviews
              </h3>
              {propertyReviews.length > 0 ? (
                <div className="space-y-6">
                  {propertyReviews.map(review => (
                    <div key={review.id} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center mb-2">
                        <div className="font-medium text-sm mr-3">{review.guestName}</div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} className={i < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">"{review.text}"</p>
                      <div className="text-xs text-muted-foreground/60 mt-2">
                        {new Date(review.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No reviews yet for this property.</p>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-xl font-serif text-primary mb-4">Need to know</h3>
              <Accordion type="multiple" className="w-full">
                {property.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-border/50">
                    <AccordionTrigger className="text-sm font-medium hover:text-primary hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
