import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import { MapPin, Users, Bed, Bath, Star } from "lucide-react";

export default function Properties() {
  const { properties } = useAppContext();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6"
          >
            Our Properties
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/75 max-w-2xl mx-auto"
          >
            Discover our premium coastal properties on the North Yorkshire coast, ready to welcome you.
          </motion.p>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {properties.map((property, index) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 group cursor-pointer h-full flex flex-col hover:shadow-lg transition-all duration-300" onClick={() => setLocation(`/properties/${property.slug}`)}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={property.images[0]} 
                      alt={property.name} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                      from £{property.pricePerNight} <span className="text-muted-foreground font-normal text-xs">/night</span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start text-muted-foreground text-sm mb-3">
                      <MapPin size={20} className="mr-1.5 mt-0.5 shrink-0" /> {property.location}
                    </div>
                    <h2 className="font-serif text-2xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                      {property.name}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                      {property.description}
                    </p>

                    <a
                      href={property.reviewsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mb-5 w-fit group/stars"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground underline underline-offset-2 group-hover/stars:text-foreground transition-colors">
                        Reviews
                      </span>
                    </a>

                    <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center" title="Sleeps"><Users size={16} className="mr-1.5 opacity-70"/> {property.sleeps}</div>
                        <div className="flex items-center" title="Bedrooms"><Bed size={16} className="mr-1.5 opacity-70"/> {property.bedrooms}</div>
                        <div className="flex items-center" title="Bathrooms"><Bath size={16} className="mr-1.5 opacity-70"/> {property.bathrooms}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="rounded-full text-primary hover:text-primary hover:bg-primary/5">
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-full"
                          onClick={(e) => { e.stopPropagation(); window.open(property.airbnbLink, '_blank', 'noopener,noreferrer'); }}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
