import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from "lucide-react";
import eduaiLogo from "@/assets/eduai-logo.png";

const Footer = () => {
  const subjects = [
    "Mathematics", "English", "Kiswahili", "Chemistry", 
    "Physics", "Biology", "Geography", "History"
  ];

  const company = [
    "About Us", "Careers", "Press", "Blog", "Privacy Policy", "Terms of Service"
  ];

  const support = [
    "Help Center", "Contact Support", "System Status", "Feature Requests"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img src={eduaiLogo} alt="EduAI Logo" className="h-8 w-8" />
              <h3 className="text-xl font-bold">EduAI</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering Kenyan students with AI-powered learning. Master your curriculum, 
              ace your exams, and achieve your dreams.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Subjects Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Subjects</h4>
            <ul className="space-y-3">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <a 
                    href={`#${subject.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {subject}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3 mb-6">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@eduai.co.ke</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-foreground/5 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-primary-foreground/70">
              Get the latest learning tips, curriculum updates, and special offers
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-primary-foreground text-primary border-primary-foreground/20"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <span>© 2024 EduAI. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for Kenyan students</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span>Powered by AI & IntaSend</span>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-primary-foreground transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-primary-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;