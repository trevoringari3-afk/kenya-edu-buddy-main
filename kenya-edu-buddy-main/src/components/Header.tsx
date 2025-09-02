import { Button } from "@/components/ui/button";
import { BookOpen, Menu, User } from "lucide-react";
import eduaiLogo from "@/assets/eduai-logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <img src={eduaiLogo} alt="EduAI Logo" className="h-8 w-8" />
              <h1 className="text-xl font-bold text-primary">EduAI</h1>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/study-buddy" className="text-muted-foreground hover:text-primary transition-colors">
              Study Buddy
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#subjects" className="text-muted-foreground hover:text-primary transition-colors">
              Subjects
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;