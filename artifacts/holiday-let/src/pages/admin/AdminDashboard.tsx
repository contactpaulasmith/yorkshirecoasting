import React from "react";
import AdminLayout from "./AdminLayout";
import { useAppContext } from "@/context/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, MessageSquare, Map, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function AdminDashboard() {
  const { properties, thingsToDo, reviews } = useAppContext();

  const pendingReviews = reviews.filter(r => r.status === "pending").length;

  const stats = [
    {
      title: "Total Properties",
      value: properties.length,
      icon: <Home size={24} className="text-primary/70" />,
      link: "/admin/properties"
    },
    {
      title: "Things To Do",
      value: thingsToDo.length,
      icon: <Map size={24} className="text-primary/70" />,
      link: "/admin/things-to-do"
    },
    {
      title: "Total Reviews",
      value: reviews.length,
      icon: <MessageSquare size={24} className="text-primary/70" />,
      link: "/admin/reviews"
    },
    {
      title: "Pending Reviews",
      value: pendingReviews,
      icon: <AlertCircle size={24} className={pendingReviews > 0 ? "text-amber-500" : "text-muted-foreground"} />,
      link: "/admin/reviews",
      alert: pendingReviews > 0
    }
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Overview of your Coastal Retreats properties and content.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <Link key={idx} href={stat.link}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-border/50 bg-card h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.alert ? "text-amber-600 dark:text-amber-500" : "text-foreground"}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-serif">Recent Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            {reviews.slice(0, 4).map(review => (
              <div key={review.id} className="mb-4 pb-4 border-b border-border/50 last:mb-0 last:pb-0 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm">{review.guestName}</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {review.status}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{review.text}</p>
              </div>
            ))}
            <Link href="/admin/reviews" className="text-sm text-primary hover:underline mt-2 block">
              View all reviews &rarr;
            </Link>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-serif">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/admin/properties" className="block p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors">
              <div className="font-medium mb-1">Manage Properties</div>
              <div className="text-sm text-muted-foreground">Update descriptions, pricing, and amenities.</div>
            </Link>
            <Link href="/admin/things-to-do" className="block p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors">
              <div className="font-medium mb-1">Add Local Guide Item</div>
              <div className="text-sm text-muted-foreground">Recommend a new restaurant, beach, or attraction.</div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
