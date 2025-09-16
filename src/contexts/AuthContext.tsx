import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for JWT token in URL (from Google OAuth callback)
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // Store token and verify it
      localStorage.setItem('edubloom_token', token);
      verifyToken(token);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      // Check for stored token
      const storedToken = localStorage.getItem('edubloom_token');
      if (storedToken) {
        verifyToken(storedToken);
      } else {
        setLoading(false);
      }
    }
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch('http://localhost:3001/api/verify-token', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem('edubloom_user', JSON.stringify(data.user));
      } else {
        // Token is invalid, remove it
        localStorage.removeItem('edubloom_token');
        localStorage.removeItem('edubloom_user');
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('edubloom_token');
      localStorage.removeItem('edubloom_user');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call - in a real app, this would be an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any email/password combination
      const userData: User = {
        id: Date.now().toString(),
        email,
        name: email.split('@')[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      setUser(userData);
      localStorage.setItem('edubloom_user', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData: User = {
        id: Date.now().toString(),
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      setUser(userData);
      localStorage.setItem('edubloom_user', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('edubloom_token');
      if (token) {
        await fetch('http://localhost:3001/api/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('edubloom_user');
      localStorage.removeItem('edubloom_token');
    }
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

