import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";

// Pages
import Home from "@/pages/Home";
import Properties from "@/pages/Properties";
import PropertyDetail from "@/pages/PropertyDetail";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Admin Pages
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminProperties from "@/pages/admin/AdminProperties";
import AdminThingsToDo from "@/pages/admin/AdminThingsToDo";
import AdminReviews from "@/pages/admin/AdminReviews";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/properties" component={Properties} />
      <Route path="/properties/:slug" component={PropertyDetail} />
      <Route path="/contact" component={Contact} />
      
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/properties" component={AdminProperties} />
      <Route path="/admin/things-to-do" component={AdminThingsToDo} />
      <Route path="/admin/reviews" component={AdminReviews} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AppProvider>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </AppProvider>
  );
}

export default App;
