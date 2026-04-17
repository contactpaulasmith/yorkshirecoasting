import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { useAppContext } from "@/context/AppContext";
import { Property } from "@/data/initialData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit2, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminProperties() {
  const { properties, updateProperty, addProperty } = useAppContext();
  const { toast } = useToast();
  const [editingProp, setEditingProp] = useState<Property | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState<Partial<Property>>({
    name: "", slug: "", location: "", description: "",
    sleeps: 2, bedrooms: 1, bathrooms: 1, pricePerNight: 100,
    airbnbLink: "", benefits: [], faqs: [], images: []
  });

  const handleEdit = (p: Property) => {
    setEditingProp(p);
    setFormData(p);
    setIsOpen(true);
  };

  const handleCreate = () => {
    setEditingProp(null);
    setFormData({
      id: "p" + Date.now(),
      name: "", slug: "", location: "", description: "",
      sleeps: 2, bedrooms: 1, bathrooms: 1, pricePerNight: 100,
      airbnbLink: "", benefits: [], faqs: [], images: []
    });
    setIsOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProp) {
      updateProperty(formData as Property);
      toast({ title: "Property updated" });
    } else {
      addProperty(formData as Property);
      toast({ title: "Property created" });
    }
    setIsOpen(false);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Properties</h1>
          <p className="text-muted-foreground mt-1">Manage your holiday homes.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleCreate}><Plus size={16} className="mr-2" /> Add Property</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProp ? "Edit Property" : "Add New Property"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Slug (URL path)</Label>
                  <Input required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Price per night (£)</Label>
                  <Input type="number" required value={formData.pricePerNight} onChange={e => setFormData({...formData, pricePerNight: Number(e.target.value)})} />
                </div>
                <div className="space-y-2">
                  <Label>Sleeps</Label>
                  <Input type="number" required value={formData.sleeps} onChange={e => setFormData({...formData, sleeps: Number(e.target.value)})} />
                </div>
                <div className="space-y-2">
                  <Label>Bedrooms</Label>
                  <Input type="number" required value={formData.bedrooms} onChange={e => setFormData({...formData, bedrooms: Number(e.target.value)})} />
                </div>
                <div className="space-y-2">
                  <Label>Bathrooms</Label>
                  <Input type="number" required value={formData.bathrooms} onChange={e => setFormData({...formData, bathrooms: Number(e.target.value)})} />
                </div>
                <div className="space-y-2">
                  <Label>Airbnb Link</Label>
                  <Input required value={formData.airbnbLink} onChange={e => setFormData({...formData, airbnbLink: e.target.value})} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>

              <div className="space-y-2">
                <Label>Benefits (comma separated)</Label>
                <Textarea 
                  value={(formData.benefits || []).join(", ")} 
                  onChange={e => setFormData({...formData, benefits: e.target.value.split(",").map(s => s.trim()).filter(Boolean)})} 
                  placeholder="Sea views, Dog friendly, Free parking..."
                />
              </div>

              {/* Simplified FAQS for this demo */}
              <div className="bg-muted p-4 rounded-md">
                <p className="text-sm text-muted-foreground mb-2">Advanced fields like FAQs and Images would use dynamic array inputs here in a production app.</p>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit">Save Property</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-medium mb-1">{property.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex items-center"><MapPin size={12} className="mr-1"/> {property.location}</p>
              <div className="flex justify-between items-center text-sm border-t border-border pt-4">
                <span className="font-medium">£{property.pricePerNight} / night</span>
                <Button variant="outline" size="sm" onClick={() => handleEdit(property)}>
                  <Edit2 size={14} className="mr-2" /> Edit
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
