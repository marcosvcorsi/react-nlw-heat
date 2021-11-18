import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

type AuthenticationResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const signInUrl = `https://github.com/login/oauth/authorize?score=user&client_id=dcb8e0e4b8272e2bef58`
  
  async function signIn(githubCode: string) {
    const { data } = await api.post<AuthenticationResponse>('/authenticate', { code: githubCode });
  
    const { token, user } = data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    localStorage.setItem('@dowhile:token', token);
    setUser(user);
  }

  async function signOut() {
    localStorage.removeItem('@dowhile:token');
    api.defaults.headers.common.authorization = '';

    setUser(null);
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [baseUrl, githubCode] = url.split('?code=');

      window.history.pushState({}, '', baseUrl);

      signIn(githubCode);
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get('/profile').then(({ data }) => {
        setUser(data);
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInUrl, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}