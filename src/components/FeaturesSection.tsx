import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Video, 
  Flame, 
  MessageSquare, 
  CheckSquare, 
  BookOpen,
  Code,
  Database,
  Cpu,
  FileText,
  Zap
} from "lucide-react";

export const FeaturesSection = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Video,
      title: "VC Discussion",
      description: "Connect with friends and classmates for interactive video discussions on any topic. Share screens, collaborate in real-time, and learn together.",
      gradient: "from-teal-light to-teal-medium"
    },
    {
      icon: Flame,
      title: "Streak Tracking",
      description: "Maintain your learning momentum with daily streak counters. Build consistent study habits and watch your progress grow day by day.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "AI Learning Bot",
      description: "Discuss any topic with our intelligent AI tutor. Get instant explanations, ask questions, and receive personalized learning guidance 24/7.",
      gradient: "from-teal-medium to-cyan-blue"
    },
    {
      icon: CheckSquare,
      title: "Smart To-Do Lists",
      description: "Organize your learning goals with intelligent task management. Get AI-suggested study plans and track your completion progress.",
      gradient: "from-green-400 to-teal-light"
    }
  ];

  const courses = [
    { name: "Computer Science", icon: Cpu, color: "text-blue-400" },
    { name: "Data Structures & Algorithms", icon: Database, color: "text-green-400" },
    { name: "Operating Systems", icon: Zap, color: "text-yellow-400" },
    { name: "C Programming", icon: Code, color: "text-purple-400" },
    { name: "Python", icon: Code, color: "text-green-500" },
    { name: "Java", icon: Code, color: "text-orange-400" },
    { name: "Discrete Mathematics", icon: FileText, color: "text-pink-400" },
    { name: "Web Development", icon: Code, color: "text-cyan-400" }
  ];

  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-teal-dark/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Everything you need for an exceptional personalized learning experience
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-brain bg-clip-text text-transparent">
              Course Library
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Master essential subjects with our comprehensive course collection
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <course.icon className={`h-8 w-8 mx-auto mb-3 ${course.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{course.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/auth")}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore All Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};