import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Brain, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-4 py-2 text-sm text-primary-foreground shadow-glow">
                <Star className="h-4 w-4 fill-current" />
                AI-Powered Learning for Kenyan Students
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Master the{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Kenyan Curriculum
                </span>{" "}
                with AI
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get personalized tutoring, practice with AI-generated quizzes, and track your progress 
                through secondary school subjects. Join thousands of students achieving their dreams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Learning Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                <BookOpen className="h-5 w-5" />
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Students Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Subjects Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Pass Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Kenyan students learning with AI technology" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <Card className="absolute -top-6 -left-6 p-4 shadow-card animate-pulse">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success rounded-lg">
                  <Brain className="h-5 w-5 text-success-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Tutor Active</div>
                  <div className="text-xs text-muted-foreground">Ready to help!</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-6 -right-6 p-4 shadow-card animate-pulse delay-1000">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Users className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">1,247 Online</div>
                  <div className="text-xs text-muted-foreground">Students learning now</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;