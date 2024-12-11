import SignUpForm from '../components/features/forms/SignUpForm';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-indigo-800 to-blue-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-xl px-8 py-6 max-w-md w-full transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-gray-200">
          Welcome Back!
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
}
