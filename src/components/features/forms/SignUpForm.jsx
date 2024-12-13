import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../../apis/auth';
import { parseFormData } from '../../../utils/utils';

export default function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = parseFormData(e.target);

    signUp({
      formData,
      onSuccess: () => navigate('/login'),
      onFail: (err) => console.log(err),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p>
            Already have an account?
            <Link
              to="/login"
              className="ml-1 text-sm text-indigo-800 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 transform transition-all duration-300 hover:scale-[1.02] dark:ring-offset-gray-900"
      >
        SignUp
      </button>
    </form>
  );
}
