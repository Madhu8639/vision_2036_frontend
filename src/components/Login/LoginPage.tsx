import React from 'react';
import LoginForm from './LoginForm';
import '../../styles/animations.css'

interface LoginPageProps {
  userType: 'institution' | 'student';
}

const LoginPage: React.FC<LoginPageProps> = ({ userType }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
          <div className="w-full max-w-md animate-scale-in">
            <div className="bg-white py-8 px-6 shadow-xl rounded-2xl">
              <div className="text-center mb-8 animate-fade-slide-up">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  VISION-2036
                </h2>
                <p className="mt-2 text-gray-600">
                  Sign in to your {userType} account
                </p>
              </div>
              
              <LoginForm  />
              
              <div className="mt-6 text-center text-sm animate-fade-slide-up stagger-3">
                <span className="text-gray-600">Don't have an account?</span>{' '}
                <button className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200">
                  Register here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;