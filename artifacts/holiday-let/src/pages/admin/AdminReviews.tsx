import React from "react";
import AdminLayout from "./AdminLayout";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle2, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminReviews() {
  const { reviews, properties, updateReviewStatus } = useAppContext();
  const { toast } = useToast();

  const handleStatusChange = (id: string, status: "approved" | "pending") => {
    updateReviewStatus(id, status);
    toast({ title: `Review marked as ${status}` });
  };

  const getPropertyName = (id: string) => {
    return properties.find(p => p.id === id)?.name || "Unknown Property";
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-foreground">Guest Reviews</h1>
        <p className="text-muted-foreground mt-1">Manage and approve reviews before they appear on the site.</p>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[150px]">Guest</TableHead>
              <TableHead className="w-[150px]">Property</TableHead>
              <TableHead className="w-[100px]">Rating</TableHead>
              <TableHead>Review</TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead className="text-right w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map(review => (
              <TableRow key={review.id} className={review.status === 'pending' ? "bg-muted/30" : ""}>
                <TableCell className="font-medium">
                  {review.guestName}
                  <div className="text-xs text-muted-foreground mt-0.5">{new Date(review.date).toLocaleDateString()}</div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {getPropertyName(review.propertyId)}
                </TableCell>
                <TableCell>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className={i < review.rating ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"} />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm italic text-muted-foreground line-clamp-2">"{review.text}"</p>
                </TableCell>
                <TableCell>
                  <Badge variant={review.status === 'approved' ? 'default' : 'secondary'} className="font-normal capitalize text-[10px]">
                    {review.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {review.status === "pending" ? (
                    <Button variant="outline" size="sm" className="h-8 text-xs text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/30 border-green-200 dark:border-green-900" onClick={() => handleStatusChange(review.id, "approved")}>
                      <CheckCircle2 size={14} className="mr-1" /> Approve
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="h-8 text-xs text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/30 border-amber-200 dark:border-amber-900" onClick={() => handleStatusChange(review.id, "pending")}>
                      <XCircle size={14} className="mr-1" /> Hide
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
}
