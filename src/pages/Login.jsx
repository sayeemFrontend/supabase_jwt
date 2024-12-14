import LoginForm from '../components/features/forms/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-indigo-800 to-blue-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 p-4">
      <LoginForm />
    </div>
  );
}
