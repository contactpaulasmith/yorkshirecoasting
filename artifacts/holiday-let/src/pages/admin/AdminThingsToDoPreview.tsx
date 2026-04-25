import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { useAppContext } from "@/context/AppContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const CATEGORIES = ["All", "Food & Drink", "Beaches", "Attractions", "Shopping", "Children"];

export default function AdminThingsToDoPreview() {
  const { thingsToDo } = useAppContext();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = thingsToDo.filter(t => activeCategory === "All" || t.category === activeCategory);

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <Link href="/admin/things-to-do">
            <Button variant="ghost" size="sm" className="mb-2 -ml-2 text-muted-foreground">
              <ArrowLeft size={14} className="mr-1" /> Back to list
            </Button>
          </Link>
          <h1 className="text-3xl font-serif text-foreground">Things To Do — Preview</h1>
          <p className="text-muted-foreground mt-1">
            This is how the local area guide will appear to guests. Showing {thingsToDo.length} items across all categories.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(cat => (
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
            {cat === "All" && (
              <span className="ml-1.5 text-xs opacity-70">({thingsToDo.length})</span>
            )}
            {cat !== "All" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({thingsToDo.filter(t => t.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Items */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No items in this category yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map(thing => (
            <Card key={thing.id} className="border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-0 flex flex-col sm:flex-row sm:items-stretch gap-0">
                {thing.image && (
                  <div className="sm:w-32 sm:shrink-0 h-32 sm:h-auto">
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
                  <Button variant="outline" size="sm" className="shrink-0" onClick={() => window.open(thing.link, "_blank")}>
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
