import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  Users, 
  MessageSquare, 
  Music,
  HelpCircle,
  LogOut,
  Plus,
  Clock,
  CheckCircle2,
  Circle
} from "lucide-react";
import heroLogo from "@/assets/edubloom-logo-new.png";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TimetableItem {
  id: string;
  time: string;
  task: string;
}

const motivationalQuotes = [
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The expert in anything was once a beginner. - Helen Hayes",
  "Learning never exhausts the mind. - Leonardo da Vinci",
  "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert"
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [timetable, setTimetable] = useState<TimetableItem[]>([]);
  const [newTime, setNewTime] = useState("");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (!user) {
        navigate("/auth");
        return;
      }

    // Rotate motivational quotes every 5 seconds
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => {
        const currentIndex = motivationalQuotes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % motivationalQuotes.length;
        return motivationalQuotes[nextIndex];
      });
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, [user, navigate]);

  const handleSignOut = () => {
    logout();
      navigate("/");
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: TodoItem = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTimetableItem = () => {
    if (newTime.trim() && newTask.trim()) {
      const item: TimetableItem = {
        id: Date.now().toString(),
        time: newTime.trim(),
        task: newTask.trim()
      };
      setTimetable([...timetable, item]);
      setNewTime("");
      setNewTask("");
    }
  };

  const deleteTimetableItem = (id: string) => {
    setTimetable(timetable.filter(item => item.id !== id));
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-gradient-to-b from-black via-gray-900 to-black border-r border-teal-500/20 p-6">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 p-0.5">
                <img 
                  src={heroLogo} 
                  alt="EduBloom Logo" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  EduBloom
              </h1>
            </div>
            
          {/* Menu Items */}
          <nav className="space-y-2">
            {[
              { icon: BookOpen, label: "Courses", color: "text-teal-400", onClick: () => navigate('/courses') },
              { icon: Users, label: "Community", color: "text-cyan-400", onClick: () => alert('Community feature coming soon!') },
              { icon: MessageSquare, label: "AI Bot", color: "text-teal-300" },
              { icon: Music, label: "Learn Through Music", color: "text-cyan-300", onClick: () => navigate('/texttomusic') },
              { icon: HelpCircle, label: "Quizzes", color: "text-teal-500" }
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-teal-500/10 transition-all duration-200 group"
                onClick={item.onClick}
              >
                <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-white group-hover:text-teal-300 transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* User Info & Logout */}
          <div className="mt-auto pt-8 border-t border-teal-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center text-black font-bold text-sm">
                {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <p className="text-sm font-medium">{user.name || 'User'}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSignOut}
              className="w-full justify-start text-gray-400 hover:text-white hover:bg-red-500/10"
              >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
              </Button>
          </div>
        </div>
        </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">EduBloom</h1>
          <p className="text-xl text-gray-300 mb-4">The classroom that knows you..</p>
          
          {/* Motivational Quote */}
          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-lg italic text-teal-200 text-center">
              "{currentQuote}"
            </p>
                </div>
        </header>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* To-Do List Section */}
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-teal-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-teal-400" />
                To-Do List
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Todo Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new task..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                  className="bg-gray-800/50 border-teal-500/30 text-white placeholder:text-gray-400 focus:border-teal-400"
                />
                <Button
                  onClick={addTodo}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Todo Items */}
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      todo.completed 
                        ? 'bg-teal-500/10 border border-teal-500/30' 
                        : 'bg-gray-800/30 border border-gray-700/30 hover:bg-gray-700/30'
                    }`}
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                      className="data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                    />
                    <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                      {todo.text}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                    >
                      ×
                    </Button>
                </div>
                ))}
                {todos.length === 0 && (
                  <p className="text-gray-400 text-center py-8">No tasks yet. Add one above!</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Mini Timetable Section */}
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Clock className="h-6 w-6 text-cyan-400" />
                Mini Timetable
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
              {/* Add Timetable Item */}
              <div className="space-y-2">
                <Input
                  placeholder="Time (e.g., 9:00 AM)"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
                <div className="flex gap-2">
                  <Input
                    placeholder="Task description..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTimetableItem()}
                    className="bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  />
                  <Button
                    onClick={addTimetableItem}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
          </div>

              {/* Timetable Items */}
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {timetable.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 border border-cyan-500/30 hover:bg-gray-700/30 transition-all duration-200"
                  >
                    <div className="w-20 text-cyan-400 font-mono text-sm">
                      {item.time}
                    </div>
                    <div className="flex-1 text-white">
                      {item.task}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTimetableItem(item.id)}
                      className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                    >
                      ×
                    </Button>
                  </div>
                ))}
                {timetable.length === 0 && (
                  <p className="text-gray-400 text-center py-8">No schedule items yet. Add one above!</p>
                )}
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}