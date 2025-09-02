import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "KES 0",
      period: "Forever",
      description: "Perfect for getting started with AI learning",
      icon: Star,
      features: [
        "Access to basic AI tutor",
        "5 questions per day",
        "Form 1 & 2 content",
        "Basic quizzes",
        "Community support"
      ],
      limitations: [
        "Limited daily questions",
        "No progress tracking",
        "No mock exams"
      ],
      button: "Get Started Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Student Premium",
      price: "KES 500",
      period: "per month",
      description: "Complete learning experience for serious students",
      icon: Zap,
      features: [
        "Unlimited AI tutor access",
        "All Form 1-4 content",
        "Progress tracking & analytics",
        "Full mock KCSE exams",
        "Personalized study plans",
        "Priority support",
        "Offline content access",
        "Parent progress reports"
      ],
      button: "Start Premium Trial",
      variant: "hero" as const,
      popular: true,
      savings: "Save 20% yearly"
    },
    {
      name: "Family Plan",
      price: "KES 1,200",
      period: "per month",
      description: "Perfect for families with multiple students",
      icon: Crown,
      features: [
        "Everything in Premium",
        "Up to 5 student accounts",
        "Parent dashboard",
        "Family progress reports",
        "Bulk mock exam scheduling",
        "Priority family support",
        "Teacher collaboration tools"
      ],
      button: "Choose Family Plan",
      variant: "secondary" as const,
      popular: false,
      note: "Up to 5 students"
    }
  ];

  const paymentMethods = [
    "M-Pesa", "Airtel Money", "Bank Transfer", "Credit/Debit Cards"
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Affordable Learning
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Learning Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready. All plans include our AI tutor and curriculum content.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-glow transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-primary shadow-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${plan.popular ? 'bg-gradient-hero' : 'bg-gradient-primary'} text-white`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground">{plan.period}</div>
                  {plan.savings && (
                    <Badge variant="secondary" className="mt-2">
                      {plan.savings}
                    </Badge>
                  )}
                  {plan.note && (
                    <div className="text-sm text-muted-foreground mt-2">
                      {plan.note}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations && plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="h-5 w-5 rounded-full border-2 border-muted mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Secure Payment Options</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                {method}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Powered by IntaSend - Secure payments for Kenyan students
          </p>
        </div>

        {/* Money Back Guarantee */}
        <Card className="mt-12 bg-gradient-primary text-primary-foreground text-center shadow-glow">
          <CardContent className="py-8">
            <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-lg opacity-90">
              Try EduAI risk-free. If you're not satisfied with your progress in 30 days, 
              we'll refund your money completely.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;