import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
