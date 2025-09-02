import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Atom, 
  Globe, 
  Users, 
  Languages, 
  Palette,
  Activity,
  BookOpen,
  Briefcase,
  Music,
  Hammer,
  Heart
} from "lucide-react";

const Subjects = () => {
  const coreSubjects = [
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Algebra, Geometry, Calculus & Statistics",
      topics: "120+ Topics",
      color: "bg-primary"
    },
    {
      icon: Languages,
      name: "English",
      description: "Grammar, Literature & Composition",
      topics: "85+ Topics",
      color: "bg-accent"
    },
    {
      icon: Languages,
      name: "Kiswahili",
      description: "Lugha, Fasihi na Uandishi",
      topics: "90+ Topics",
      color: "bg-success"
    }
  ];

  const scienceSubjects = [
    {
      icon: Atom,
      name: "Chemistry",
      description: "Organic, Inorganic & Physical Chemistry",
      topics: "95+ Topics",
      color: "bg-secondary"
    },
    {
      icon: Activity,
      name: "Physics",
      description: "Mechanics, Waves, Electricity & Modern Physics",
      topics: "110+ Topics",
      color: "bg-warning"
    },
    {
      icon: Heart,
      name: "Biology",
      description: "Life Processes, Ecology & Human Biology",
      topics: "100+ Topics",
      color: "bg-info"
    }
  ];

  const humanitiesSubjects = [
    {
      icon: Globe,
      name: "Geography",
      description: "Physical & Human Geography of Kenya & World",
      topics: "75+ Topics"
    },
    {
      icon: Users,
      name: "History & Government",
      description: "Kenyan History, Government & Civics",
      topics: "80+ Topics"
    },
    {
      icon: Briefcase,
      name: "Business Studies",
      description: "Commerce, Accounting & Entrepreneurship",
      topics: "70+ Topics"
    }
  ];

  const otherSubjects = [
    { icon: Palette, name: "Art & Design", topics: "45+ Topics" },
    { icon: Music, name: "Music", topics: "40+ Topics" },
    { icon: Hammer, name: "Technical Subjects", topics: "60+ Topics" },
    { icon: BookOpen, name: "Religious Studies", topics: "55+ Topics" }
  ];

  return (
    <section id="subjects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Complete Coverage
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            All{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Kenyan Curriculum
            </span>{" "}
            Subjects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From Form 1 to Form 4, we cover every subject in the Kenyan secondary school curriculum
          </p>
        </div>

        {/* Core Subjects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Core Subjects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coreSubjects.map((subject, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`inline-flex p-4 rounded-full ${subject.color} text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <subject.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    {subject.topics}
                  </Badge>
                  <Button variant="outline" className="w-full">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Science Subjects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Sciences</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scienceSubjects.map((subject, index) => (
              <Card key={index} className="shadow-card hover:shadow-secondary transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`inline-flex p-4 rounded-full ${subject.color} text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <subject.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    {subject.topics}
                  </Badge>
                  <Button variant="outline" className="w-full">
                    Explore Topics
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Humanities & Other Subjects */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Humanities & Social Sciences</h3>
            <div className="space-y-4">
              {humanitiesSubjects.map((subject, index) => (
                <Card key={index} className="shadow-card hover:shadow-card transition-all">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <subject.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{subject.name}</h4>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>
                    <Badge variant="outline">{subject.topics}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Additional Subjects</h3>
            <div className="grid grid-cols-2 gap-4">
              {otherSubjects.map((subject, index) => (
                <Card key={index} className="shadow-card hover:shadow-card transition-all text-center p-4">
                  <div className="p-3 bg-gradient-accent rounded-lg inline-flex mb-3">
                    <subject.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{subject.name}</h4>
                  <Badge variant="secondary" className="text-xs">{subject.topics}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;