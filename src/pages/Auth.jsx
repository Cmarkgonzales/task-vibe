import { useState } from 'react';
import Navbar from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../components/generics/Icon'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const loginSuccess = false;
  const signupSuccess = false;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-center mt-12 px-4">
        <div className="bg-white rounded-xl shadow-md w-full max-w-xl p-8 transition-all border border-gray-200">
          {/* Tabs */}
          <div className="flex justify-center mb-6 relative">
            <div className="relative flex bg-gray-100 rounded-lg p-1 w-full max-w-sm overflow-hidden">
              <motion.div
                layout
                className="absolute top-1 bottom-1 w-1/2 bg-white rounded-md shadow-sm"
                initial={false}
                animate={{ x: isLogin ? '0%' : '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setIsLogin(true)}
                className={`relative z-10 w-1/2 py-2 text-sm font-medium transition-colors duration-300 ${
                  isLogin ? 'text-accent' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Log In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`relative z-10 w-1/2 py-2 text-sm font-medium transition-colors duration-300 ${
                  !isLogin ? 'text-accent' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Welcome back</h2>
                <div className="space-y-4 mb-6">
                  <InputField label="Email" type="email" placeholder="Enter email address" icon="Mail" />
                  <InputField label="Password" type="password" placeholder="••••••••" icon="Lock" />
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-gray-600">
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="text-sm text-blue-500 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button className="w-full bg-accent text-white py-2 rounded-md hover:bg-accent/90 transition">Log In</button>
                {loginSuccess && <p className="mt-4 text-green-600 text-sm">Login successful! Redirecting...</p>}
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Create your account</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <InputField label="First Name" type="text" placeholder="Enter first name" />
                  <InputField label="Last Name" type="text" placeholder="Enter last name" />
                </div>
                <div className="space-y-4 mb-6">
                  <InputField label="Email" type="email" placeholder="Enter email address" icon="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <InputField label="Password" type="password" placeholder="••••••••" icon="Lock" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <InputField label="Confirm Password" type="password" placeholder="••••••••" icon="Lock" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <label className="flex items-start text-sm text-gray-600">
                    <input type="checkbox" required className="mr-2 mt-1" />
                    I agree to the
                    <a href="#" className="text-blue-500 underline ml-1">Terms of Service</a>
                    <span> and </span>
                    <a href="#" className="text-blue-500 underline"> Privacy Policy </a>
                  </label>
                </div>
                <button className="w-full bg-accent text-white py-2 rounded-md hover:bg-accent/90 transition">Create Account</button>
                {signupSuccess && <p className="mt-4 text-green-600 text-sm">Account created successfully! Redirecting...</p>}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="my-6 flex items-center gap-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <SocialButton platform="Google" />
            <SocialButton platform="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, placeholder, icon, value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && isVisible ? 'text' : type;
  const isConfirm = label.toLowerCase().includes('confirm');

  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return { label: 'Weak', color: 'red' };
    if (score === 2) return { label: 'Medium', color: 'yellow' };
    return { label: 'Strong', color: 'green' };
  };

  const strength = getPasswordStrength(value || '');

  return (
    <div className="relative">
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Icon name={icon} className="w-5 h-5 text-gray-400" />
          </span>
        )}
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          placeholder={placeholder}
          required
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label={isVisible ? 'Hide password' : 'Show password'}
          >
            {isVisible ? <Icon name="EyeOff" className="w-5 h-5" /> : <Icon name="Eye" className="w-5 h-5" />}
          </button>
        )}
      </div>

      {isPassword && !isConfirm && value && (
        <div className="mt-1 text-sm">
          <span className={`font-medium text-${strength.color}-600`}>Strength: {strength.label}</span>
          <div className="w-full h-1 mt-1 bg-gray-200 rounded">
            <div
              className={`h-1 rounded transition-all bg-${strength.color}-500`}
              style={{
                width: strength.label === 'Weak' ? '33%' : strength.label === 'Medium' ? '66%' : '100%',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const SocialButton = ({ platform }) => {
  const icons = {
    Google: <img src="./google.svg" alt="Google logo" className="w-5 h-5 mr-2" />,
    Facebook: <img src="./facebook.svg" alt="Facebook logo" className="w-5 h-5 mr-2" />,
  };

  return (
    <button className="flex items-center justify-center w-full border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition">
      {icons[platform]}
      {platform}
    </button>
  );
};

export default Auth;
