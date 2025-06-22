import { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const loginSuccess = false;
  const signupSuccess = false;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center"
            >
              <svg className="w-8 h-8 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.53 11.06L11.25 16.34C11.1 16.49 10.9 16.57 10.7 16.57C10.5 16.57 10.3 16.49 10.15 16.34L7.47 13.66C7.17 13.36 7.17 12.87 7.47 12.57C7.77 12.27 8.26 12.27 8.56 12.57L10.7 14.71L15.44 9.97C15.74 9.67 16.23 9.67 16.53 9.97C16.83 10.27 16.83 10.76 16.53 11.06Z"
                  fill="currentColor"
                />
              </svg>
              <h1 className="text-2xl font-bold">TaskVibe</h1>
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Form */}
      <div className="flex justify-center mt-12">
        <div className="bg-white rounded-xl shadow-md w-full max-w-xl p-8">
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 text-center font-semibold ${
                isLogin ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 text-center font-semibold ${
                !isLogin ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Sections */}
          {isLogin ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Welcome back</h2>
              <div className="space-y-4 mb-6">
                <InputField label="Email" type="email" placeholder="name@example.com" />
                <InputField label="Password" type="password" placeholder="••••••••" />
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Log In</button>
              {loginSuccess && <p className="mt-4 text-green-600 text-sm">Login successful! Redirecting...</p>}
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Create your account</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputField label="First Name" type="text" placeholder="John" />
                <InputField label="Last Name" type="text" placeholder="Doe" />
              </div>
              <div className="space-y-4 mb-6">
                <InputField label="Email" type="email" placeholder="name@example.com" />
                <InputField label="Password" type="password" placeholder="••••••••" />
                <InputField label="Confirm Password" type="password" placeholder="••••••••" />
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" required className="mr-2" />
                  I agree to the <a href="#" className="text-blue-500 underline ml-1">Terms of Service</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>
                </label>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Create Account</button>
              {signupSuccess && <p className="mt-4 text-green-600 text-sm">Account created successfully! Redirecting...</p>}
            </>
          )}

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <SocialButton platform="Google" />
            <SocialButton platform="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder={placeholder}
      required
    />
  </div>
);

const SocialButton = ({ platform }) => {
    const icons = {
        Google: (
            <img src="./google.svg" alt="Google logo" className="w-5 h-5 mr-2" />
        ),
        Facebook: (
            <img src="./facebook.svg" alt="Facebook Logo" className="w-5 h-5 mr-2" />
        )
    };

    return (
        <button className="flex items-center justify-center w-full border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
            {icons[platform]}
            {platform}
        </button>
    );
};

export default Auth;
