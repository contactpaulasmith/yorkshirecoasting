import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Bed, Bath } from "lucide-react";

export default function Home() {
  const { properties } = useAppContext();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://picsum.photos/id/16/1920/1080" 
          alt="Beautiful North Yorkshire coastline on a sunny day" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 drop-shadow-lg leading-tight"
          >
            Find your calm by the coast
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl font-light mb-10 text-white/90 max-w-2xl mx-auto drop-shadow-md"
          >
            A curated collection of premium holiday homes on the North Yorkshire coast. Clifftops, harbours, and wide open skies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="rounded-full text-base px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setLocation("/properties")}
              data-testid="button-view-properties"
            >
              View Our Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 h-14 bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
              onClick={() => setLocation("/contact")}
              data-testid="button-book-now"
            >
              Book Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">More than just a place to stay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe a holiday should start the moment you walk through the door. 
              Crisp linen, the scent of the sea, a kitchen ready for a feast, and the quiet assurance 
              that every detail has been considered. We are a boutique property manager dedicated to 
              curating extraordinary coastal retreats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Collection</h2>
              <p className="text-muted-foreground">Exceptional homes in extraordinary locations.</p>
            </motion.div>
            <Link href="/properties" className="hidden md:flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              View all <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 group cursor-pointer h-full flex flex-col" onClick={() => setLocation(`/properties/${property.slug}`)}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={property.images[0]} 
                      alt={property.name} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                      £{property.pricePerNight} <span className="text-muted-foreground font-normal text-xs">/night</span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <MapPin size={14} className="mr-1.5" /> {property.location}
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                      {property.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
                      {property.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 mt-auto">
                      <div className="flex items-center"><Users size={16} className="mr-1.5 opacity-70"/> {property.sleeps}</div>
                      <div className="flex items-center"><Bed size={16} className="mr-1.5 opacity-70"/> {property.bedrooms}</div>
                      <div className="flex items-center"><Bath size={16} className="mr-1.5 opacity-70"/> {property.bathrooms}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="rounded-full px-8" onClick={() => setLocation("/properties")}>
              View all properties
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
