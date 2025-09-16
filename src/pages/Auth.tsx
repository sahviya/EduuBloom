import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff, Mail } from "lucide-react";
import heroLogo from "@/assets/edubloom-logo-new.png";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, login, register } = useAuth();

  useEffect(() => {
    // Check if user is already logged in
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      // Redirect to backend Google OAuth endpoint
      window.location.href = 'http://localhost:3001/auth/google';
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to initiate Google sign-in",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (!isLogin && !name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      let success = false;
      
      if (isLogin) {
        success = await login(email, password);
      } else {
        success = await register(email, password, name);
      }

      if (success) {
        toast({
          title: "Success",
          description: isLogin ? "Welcome back!" : "Account created successfully!",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Error",
          description: isLogin ? "Invalid credentials" : "Failed to create account",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/20 via-background to-cyan-blue/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-leaf rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-brain rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className="w-full max-w-md mx-auto bg-gradient-card border-border/50 shadow-card">
          <CardHeader className="text-center">
            {/* Logo */}
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-primary p-1 shadow-glow">
                <img 
                  src={heroLogo} 
                  alt="EduBloom Logo" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {isLogin ? "Welcome Back" : "Join EduBloom"}
              </span>
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? "Sign in to continue your learning journey" 
                : "Create your account and start learning"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Google Sign In */}
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailAuth} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                variant="hero"
                disabled={loading}
              >
                {loading ? "Loading..." : (isLogin ? "Sign In" : "Sign Up")}
              </Button>
            </form>

            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-teal-light hover:underline"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}