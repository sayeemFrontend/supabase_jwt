import { Navigate, Outlet, useLoaderData } from 'react-router-dom';
import Layout from '../layout/Layout';
import { createContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/features/Loader';

const slice = {
  theme: 'dark',
};
export const ThemeContext = createContext(slice);

export default function RootComponent() {
  const [theme, setTheme] = useState('dark');
  const { isAuthenticate, user, logOut, isLoading } = useAuth();

  //control user based on authenticated
  if (isLoading) return <Loader />;
  if (!isAuthenticate) return <Navigate to="login" />;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeContext.Provider>
  );
}
