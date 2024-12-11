import { useEffect, useState } from 'react';
import { supaBase } from '../apis/auth';
import { cookeStorage } from '../apis/cookies';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getUser = async () => {
    const { data } = await supaBase.auth.getUser();
    setIsLoading(false);
    setUser(data.user);
  };

  const logOut = () => {
    cookeStorage.clearCooke();
    setUser(null);
    navigate('/login');
  };

  const isAuthenticate = !!user;

  useEffect(() => {
    getUser();
  }, []);

  return { user, logOut, isAuthenticate, isLoading };
}
