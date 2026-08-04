import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useAppContext } from "@/context/AppContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Food & Drink", "Beaches", "Attractions", "Shopping", "Children", "Transport", "Walks"];

export default function LocalGuide() {
  const { thingsToDo } = useAppContext();
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const published = thingsToDo.filter(t => t.published !== false);
  const filtered = published.filter(t => activeCategory === "All" || t.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6"
          >
            Local guide.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Our curated guide to the best of Scarborough and the surrounding area — hand-picked for our guests.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => {
            const count = cat === "All" ? published.length : published.filter(t => t.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Items */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            No items in this category yet.
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map((thing, i) => (
              <motion.div
                key={thing.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Card className="border-border/50 shadow-sm overflow-hidden">
                  <CardContent className="p-0 flex flex-col sm:flex-row sm:items-stretch gap-0">
                    {thing.image && (
                      <div className="sm:w-36 sm:shrink-0 h-36 sm:h-auto">
                        <img src={thing.image} alt={thing.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-foreground">{thing.title}</h3>
                          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{thing.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{thing.description}</p>
                        <p className="text-xs text-muted-foreground/70">
                          <MapPin size={12} className="inline mr-1" />{thing.location}
                        </p>
                      </div>
                      {thing.link && thing.link !== "#" && (
                        <Button variant="outline" size="sm" className="shrink-0" onClick={() => window.open(thing.link, "_blank")}>
                          Visit Website
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
