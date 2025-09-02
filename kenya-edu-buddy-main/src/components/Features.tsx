import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BookOpen, 
  BarChart3, 
  MessageCircle, 
  Award, 
  Clock,
  Users,
  Shield,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Personal Tutor",
      description: "Get instant answers and step-by-step explanations for any curriculum topic",
      badge: "Core Feature",
      color: "bg-primary",
    },
    {
      icon: BookOpen,
      title: "Complete Curriculum",
      description: "All subjects from Form 1 to Form 4 aligned with Kenyan syllabus",
      badge: "15+ Subjects",
      color: "bg-accent",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your performance and identify areas for improvement",
      badge: "Premium",
      color: "bg-success",
    },
    {
      icon: MessageCircle,
      title: "Interactive Quizzes",
      description: "AI-generated practice questions tailored to your learning level",
      badge: "Adaptive",
      color: "bg-secondary",
    },
    {
      icon: Award,
      title: "Mock Examinations",
      description: "Full KCSE mock exams with detailed performance analysis",
      badge: "Premium",
      color: "bg-warning",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Learn anytime, anywhere with our always-available AI tutor",
      badge: "Always On",
      color: "bg-info",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join study groups and learn with peers across Kenya"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure platform designed specifically for student safety"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Optimized for smartphones - learn on the go"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Excel in School
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive support for Kenyan secondary school students
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${feature.color} text-white group-hover:shadow-glow transition-all`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 bg-gradient-accent rounded-full mb-4 shadow-glow">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;