import React, { useState, useEffect} from 'react';
import axios from 'axios'
const SignupPage = () => {
    
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data here

    const newUser = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        dob: e.target.dob.value,
        age: e.target.age.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      try {
        const response = await axios.post('http://localhost:8000/users', newUser);
        console.log('User created:', response.data);
  
        // Clear the form fields after successful submission
        e.target.reset();
      } catch (error) {
        console.error('Error creating user:', error);
      }
    const newErrors = {};
    if (!e.target.firstName.value) {
        newErrors.firstName = 'First name is required';
      }
      if (!e.target.lastName.value) {
        newErrors.lastName = 'Last name is required';
      }
      if (!e.target.dob.value) {
        newErrors.dob = 'Date of Birth is required';
      }
      if (!e.target.age.value) {
        newErrors.age = 'Age is required';
      
      }
      if (!e.target.email.value) {
        newErrors.email = 'Email is required';
      }
      if (!e.target.password.value) {
        newErrors.password = 'Password is required';
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
          e.target.password.value
        )
      ) {
        newErrors.password =
          'Password must be between 8-15 characters and include special characters, uppercase letters, and numbers';
      }
      if (!e.target.confirmPassword.value) {
        newErrors.confirmPassword = 'Confirm Password is required';
      } else if (e.target.password.value !== e.target.confirmPassword.value) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

    setErrors(newErrors);

    // Handle form submission if no errors

  };

  useEffect(() => {
    // Calculate age based on date of birth
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');

    dobInput.addEventListener('input', () => {
      const dobValue = new Date(dobInput.value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dobValue.getFullYear();

      ageInput.value = isNaN(age) ? '' : age + "years";
    });

    return () => {
      dobInput.removeEventListener('input', () => {});
    };
  }, []);


  return (
    <div className="bg-gradient-to-b from-teal-500 to-cyan-600 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Join Our Community
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input 
                type="text"
                id="firstName"
                name="firstName"
                className={`mt-1 p-1 border-b ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-cyan-600 focus:border-cyan-600'} focus:outline-none`}
                required
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`mt-1 p-1 border-b ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-cyan-600 focus:border-cyan-600'} focus:outline-none`}
                required
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={`mt-1 p-1 border-b ${errors.dob ? 'border-red-500 focus:border-red-500' : 'border-cyan-600 focus:border-cyan-600'} focus:outline-none w-full`}
              required
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className={`mt-1 p-1 border-b ${errors.age ? 'border-red-500 focus:border-red-500' : 'border-cyan-600 focus:border-cyan-600'} focus:outline-none w-full`}
              required
              readOnly
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 p-1 border-b focus:outline-none focus:border-cyan-600 ${errors.email ? 'border-red-500' : 'border-cyan-600'}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`mt-1 p-1 border-b ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-cyan-600 focus:border-cyan-600'} focus:outline-none w-full`}
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`mt-1 p-1 border-b ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-cyan-600 focus:border-cyan-600'} focus:outline-none w-full`}
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition duration-300"
          >
            Get Started
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <a href="#" className="text-cyan-600 hover:underline">Log in here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

 