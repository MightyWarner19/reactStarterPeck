import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/users?email=${email}`);
      const user = response.data[0];

      if (!user || user.password !== password) {
        setError('Invalid email or password');
      } else {
        setError('');
        // Successful login, navigate to a dashboard or home page
        
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Log In
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-1 border-b border-cyan-600 focus:border-cyan-600 focus:outline-none w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-1 border-b border-cyan-600 focus:border-cyan-600 focus:outline-none w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-200"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
