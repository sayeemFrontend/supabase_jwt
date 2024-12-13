import { GoPerson } from 'react-icons/go';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/apis/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => logout(() => navigate('/login'));
  return (
    <nav className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            className="rounded-full border w-12"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="person"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/admin')}>
            Admin
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/editor')}>
            Editor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/')}>
            Home
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
