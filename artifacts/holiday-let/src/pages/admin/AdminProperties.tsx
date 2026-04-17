import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { useAppContext } from "@/context/AppContext";
import { Property } from "@/data/initialData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit2, MapPin, X, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emptyProperty = (): Partial<Property> => ({
  id: "p" + Date.now(),
  name: "", slug: "", location: "", description: "",
  sleeps: 2, bedrooms: 1, bathrooms: 1, pricePerNight: 100,
  airbnbLink: "", benefits: [], faqs: [], images: []
});

export default function AdminProperties() {
  const { properties, updateProperty, addProperty } = useAppContext();
  const { toast } = useToast();
  const [editingProp, setEditingProp] = useState<Property | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Property>>(emptyProperty());

  const [benefitInput, setBenefitInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");

  const handleEdit = (p: Property) => {
    setEditingProp(p);
    setFormData({ ...p });
    setBenefitInput("");
    setImageInput("");
    setFaqQuestion("");
    setFaqAnswer("");
    setIsOpen(true);
  };

  const handleCreate = () => {
    setEditingProp(null);
    setFormData(emptyProperty());
    setBenefitInput("");
    setImageInput("");
    setFaqQuestion("");
    setFaqAnswer("");
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

  const addBenefit = () => {
    const trimmed = benefitInput.trim();
    if (!trimmed) return;
    setFormData(prev => ({ ...prev, benefits: [...(prev.benefits || []), trimmed] }));
    setBenefitInput("");
  };

  const removeBenefit = (idx: number) => {
    setFormData(prev => ({ ...prev, benefits: (prev.benefits || []).filter((_, i) => i !== idx) }));
  };

  const addImage = () => {
    const trimmed = imageInput.trim();
    if (!trimmed) return;
    setFormData(prev => ({ ...prev, images: [...(prev.images || []), trimmed] }));
    setImageInput("");
  };

  const removeImage = (idx: number) => {
    setFormData(prev => ({ ...prev, images: (prev.images || []).filter((_, i) => i !== idx) }));
  };

  const addFaq = () => {
    if (!faqQuestion.trim() || !faqAnswer.trim()) return;
    setFormData(prev => ({
      ...prev,
      faqs: [...(prev.faqs || []), { question: faqQuestion.trim(), answer: faqAnswer.trim() }]
    }));
    setFaqQuestion("");
    setFaqAnswer("");
  };

  const removeFaq = (idx: number) => {
    setFormData(prev => ({ ...prev, faqs: (prev.faqs || []).filter((_, i) => i !== idx) }));
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
            <Button onClick={handleCreate} data-testid="button-add-property"><Plus size={16} className="mr-2" /> Add Property</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProp ? "Edit Property" : "Add New Property"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} data-testid="input-property-name" />
                </div>
                <div className="space-y-2">
                  <Label>Slug (URL path)</Label>
                  <Input required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} placeholder="e.g. my-cottage" data-testid="input-property-slug" />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} data-testid="input-property-location" />
                </div>
                <div className="space-y-2">
                  <Label>Price per night (£)</Label>
                  <Input type="number" required value={formData.pricePerNight} onChange={e => setFormData({...formData, pricePerNight: Number(e.target.value)})} data-testid="input-property-price" />
                </div>
                <div className="space-y-2">
                  <Label>Sleeps</Label>
                  <Input type="number" required value={formData.sleeps} onChange={e => setFormData({...formData, sleeps: Number(e.target.value)})} data-testid="input-property-sleeps" />
                </div>
                <div className="space-y-2">
                  <Label>Bedrooms</Label>
                  <Input type="number" required value={formData.bedrooms} onChange={e => setFormData({...formData, bedrooms: Number(e.target.value)})} data-testid="input-property-bedrooms" />
                </div>
                <div className="space-y-2">
                  <Label>Bathrooms</Label>
                  <Input type="number" required value={formData.bathrooms} onChange={e => setFormData({...formData, bathrooms: Number(e.target.value)})} data-testid="input-property-bathrooms" />
                </div>
                <div className="space-y-2">
                  <Label>Airbnb / Booking Link</Label>
                  <Input value={formData.airbnbLink} onChange={e => setFormData({...formData, airbnbLink: e.target.value})} data-testid="input-property-airbnb" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} data-testid="textarea-property-description" />
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <Label>Benefits / Highlights</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(formData.benefits || []).map((b, idx) => (
                    <span key={idx} className="flex items-center gap-1 bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      {b}
                      <button type="button" onClick={() => removeBenefit(idx)} className="hover:text-destructive" data-testid={`button-remove-benefit-${idx}`}><X size={12} /></button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={benefitInput}
                    onChange={e => setBenefitInput(e.target.value)}
                    placeholder="e.g. Dog friendly"
                    onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addBenefit(); }}}
                    data-testid="input-benefit"
                  />
                  <Button type="button" variant="outline" size="sm" onClick={addBenefit} data-testid="button-add-benefit"><PlusCircle size={16} /></Button>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-2">
                <Label>Photo URLs (7–10 recommended)</Label>
                <div className="space-y-2 mb-2">
                  {(formData.images || []).map((img, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <img src={img} alt="" className="h-10 w-16 object-cover rounded" />
                      <span className="flex-1 truncate text-muted-foreground">{img}</span>
                      <button type="button" onClick={() => removeImage(idx)} className="text-destructive hover:text-destructive/80 shrink-0" data-testid={`button-remove-image-${idx}`}><X size={14} /></button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={imageInput}
                    onChange={e => setImageInput(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addImage(); }}}
                    data-testid="input-image-url"
                  />
                  <Button type="button" variant="outline" size="sm" onClick={addImage} data-testid="button-add-image"><PlusCircle size={16} /></Button>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-2">
                <Label>FAQs</Label>
                <div className="space-y-2 mb-2">
                  {(formData.faqs || []).map((faq, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 bg-muted rounded-lg text-sm">
                      <div className="flex-1">
                        <div className="font-medium">{faq.question}</div>
                        <div className="text-muted-foreground">{faq.answer}</div>
                      </div>
                      <button type="button" onClick={() => removeFaq(idx)} className="text-destructive hover:text-destructive/80 shrink-0 mt-0.5" data-testid={`button-remove-faq-${idx}`}><X size={14} /></button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 border border-border rounded-lg p-3">
                  <Input
                    value={faqQuestion}
                    onChange={e => setFaqQuestion(e.target.value)}
                    placeholder="Question (e.g. What time is check-in?)"
                    data-testid="input-faq-question"
                  />
                  <Textarea
                    value={faqAnswer}
                    onChange={e => setFaqAnswer(e.target.value)}
                    placeholder="Answer"
                    rows={2}
                    data-testid="textarea-faq-answer"
                  />
                  <Button type="button" variant="outline" size="sm" onClick={addFaq} data-testid="button-add-faq"><PlusCircle size={14} className="mr-1" /> Add FAQ</Button>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit" data-testid="button-save-property">Save Property</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm" data-testid={`card-property-${property.id}`}>
            <div className="aspect-video relative">
              {property.images[0] ? (
                <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">No image</div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-medium mb-1">{property.name}</h3>
              <p className="text-sm text-muted-foreground mb-1 flex items-center"><MapPin size={12} className="mr-1"/> {property.location}</p>
              <p className="text-xs text-muted-foreground mb-4">{property.images.length} photos · {property.faqs.length} FAQs · {property.benefits.length} highlights</p>
              <div className="flex justify-between items-center text-sm border-t border-border pt-4">
                <span className="font-medium">£{property.pricePerNight} / night</span>
                <Button variant="outline" size="sm" onClick={() => handleEdit(property)} data-testid={`button-edit-property-${property.id}`}>
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
