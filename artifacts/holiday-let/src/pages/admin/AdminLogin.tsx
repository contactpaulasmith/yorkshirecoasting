import React, { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin2024") {
      localStorage.setItem("admin_auth", "true");
      setLocation("/admin");
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password.",
        variant: "destructive"
      });
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border/50 shadow-lg">
        <CardHeader className="text-center pb-8 pt-10">
          <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
            <Lock size={24} />
          </div>
          <CardTitle className="font-serif text-2xl text-primary">Admin Access</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Enter your password to access the management dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-card"
              />
            </div>
            <Button type="submit" className="w-full rounded-md" size="lg">
              Login
            </Button>
          </form>
          <div className="mt-8 text-center">
            <Button variant="link" onClick={() => setLocation("/")} className="text-muted-foreground text-sm">
              &larr; Return to main site
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
