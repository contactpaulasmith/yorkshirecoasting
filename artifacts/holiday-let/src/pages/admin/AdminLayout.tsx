import React, { useEffect, ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Home, 
  Map, 
  MessageSquare, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("admin_auth");
    if (!isAuth && location.startsWith("/admin") && location !== "/admin/login") {
      setLocation("/admin/login");
    }
  }, [location, setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setLocation("/admin/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Properties", path: "/admin/properties", icon: <Home size={20} /> },
    { name: "Things To Do", path: "/admin/things-to-do", icon: <Map size={20} /> },
    { name: "Reviews", path: "/admin/reviews", icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out flex flex-col
        lg:translate-x-0 lg:static
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <span className="font-serif text-lg font-semibold text-primary">Shoreline Admin</span>
          <button onClick={() => setIsMobileOpen(false)} className="lg:hidden text-muted-foreground">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors
                ${location === item.path 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"}
              `}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={handleLogout}
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </Button>
          <div className="mt-4 text-center">
            <Link href="/" className="text-xs text-primary hover:underline">
              View live site &rarr;
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center px-4 sm:px-6 lg:px-8 bg-card border-b border-border lg:hidden">
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="text-muted-foreground p-2 -ml-2 rounded-md hover:bg-muted"
          >
            <Menu size={24} />
          </button>
          <span className="font-serif font-medium text-primary ml-2">Shoreline Admin</span>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
