import { useLocation } from "wouter";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-6xl font-serif text-primary/30 mb-6">404</p>
        <h1 className="text-3xl font-serif text-foreground mb-4">Page not found</h1>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you are looking for does not exist or may have moved. Head back to our homepage to explore Cornwall's finest holiday homes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={() => setLocation("/")} className="rounded-full px-8">
            Back to Home
          </Button>
          <Button variant="outline" onClick={() => setLocation("/properties")} className="rounded-full px-8">
            View Properties
          </Button>
        </div>
      </div>
    </Layout>
  );
}
