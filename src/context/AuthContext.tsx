import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
  role: 'admin' | 'creator' | 'buyer';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    email: 'demo@modelverse.com',
    username: 'demo_user',
    role: 'creator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
  });

  const login = async (email: string, password: string) => {
    setUser({
      id: '1',
      email,
      username: email.split('@')[0],
      role: 'creator',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email
    });
  };

  const signup = async (email: string, password: string, username: string) => {
    setUser({
      id: '1',
      email,
      username,
      role: 'creator',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + username
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
