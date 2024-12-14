import SignUpForm from '../components/features/forms/SignUpForm';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-indigo-800 to-blue-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 p-4">
      <SignUpForm />
    </div>
  );
}
