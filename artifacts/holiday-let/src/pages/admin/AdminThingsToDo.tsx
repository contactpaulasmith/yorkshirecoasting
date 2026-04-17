import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { useAppContext } from "@/context/AppContext";
import { ThingToDo } from "@/data/initialData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminThingsToDo() {
  const { thingsToDo, updateThingToDo, addThingToDo, deleteThingToDo, properties } = useAppContext();
  const { toast } = useToast();
  const [editingThing, setEditingThing] = useState<ThingToDo | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState<Partial<ThingToDo>>({
    title: "", category: "Food & Drink", location: "", description: "", image: "", link: "", propertyIds: []
  });

  const handleEdit = (t: ThingToDo) => {
    setEditingThing(t);
    setFormData(t);
    setIsOpen(true);
  };

  const handleCreate = () => {
    setEditingThing(null);
    setFormData({
      id: "t" + Date.now(),
      title: "", category: "Food & Drink", location: "", description: "", image: "", link: "", propertyIds: []
    });
    setIsOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingThing) {
      updateThingToDo(formData as ThingToDo);
      toast({ title: "Item updated" });
    } else {
      addThingToDo(formData as ThingToDo);
      toast({ title: "Item created" });
    }
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      deleteThingToDo(id);
      toast({ title: "Item deleted" });
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Things To Do</h1>
          <p className="text-muted-foreground mt-1">Manage the local area guide across all properties.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleCreate}><Plus size={16} className="mr-2" /> Add Item</Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{editingThing ? "Edit Local Guide Item" : "Add Local Guide Item"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val as ThingToDo["category"]})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Food & Drink">Food & Drink</SelectItem>
                      <SelectItem value="Beaches">Beaches</SelectItem>
                      <SelectItem value="Attractions">Attractions</SelectItem>
                      <SelectItem value="Shopping">Shopping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Location / Town</Label>
                  <Input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>

              <div className="space-y-2">
                <Label>Photo URL</Label>
                <Input value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} placeholder="https://images.unsplash.com/..." data-testid="input-thing-image" />
                {formData.image && (
                  <img src={formData.image} alt="" className="h-24 w-full object-cover rounded-md mt-1" />
                )}
              </div>

              <div className="space-y-2">
                <Label>External Link</Label>
                <Input required value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} />
              </div>

              <div className="space-y-2 pb-4">
                <Label>Applicable Properties</Label>
                <p className="text-xs text-muted-foreground mb-2">If none selected, shows on all properties.</p>
                <div className="flex flex-wrap gap-2">
                  {properties.map(p => {
                    const isSelected = formData.propertyIds?.includes(p.id);
                    return (
                      <Badge 
                        key={p.id}
                        variant={isSelected ? "default" : "outline"}
                        className="cursor-pointer font-normal"
                        onClick={() => {
                          const curr = formData.propertyIds || [];
                          if (isSelected) {
                            setFormData({...formData, propertyIds: curr.filter(id => id !== p.id)});
                          } else {
                            setFormData({...formData, propertyIds: [...curr, p.id]});
                          }
                        }}
                      >
                        {p.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border">
                <Button type="submit">Save Item</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Properties</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {thingsToDo.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {item.title}
                  <a href={item.link} target="_blank" rel="noreferrer" className="inline-block ml-2 text-muted-foreground hover:text-primary">
                    <ExternalLink size={12} />
                  </a>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-[10px] font-normal tracking-wide uppercase">
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{item.location}</TableCell>
                <TableCell>
                  {item.propertyIds.length === 0 
                    ? <span className="text-muted-foreground text-xs italic">All</span>
                    : <span className="text-xs">{item.propertyIds.length} selected</span>
                  }
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                    <Edit2 size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(item.id)}>
                    <Trash2 size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
}
