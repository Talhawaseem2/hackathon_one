import { cartContext } from '@/Global/Context';
import { useContext, useState } from 'react';

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
}

interface SignupErrors {
  fullName: string;
  email: string;
  password: string;
}

const SignupFormComp: React.FC = () => {
    let {signUpUser} = useContext(cartContext)
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<SignupErrors>({
    fullName: '',
    email: '',
    password: '',
  });

  const validateEmail = (email: string) => {
    // Basic email validation, you can use a more robust solution
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password: string) => {
    // Password should be at least 6 characters
    return password.length >= 6;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof SignupFormData) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleSignup = () => {
    const newErrors: SignupErrors = {
      fullName: '',
      email: '',
      password: '',
    };

    if (!formData.fullName) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.password || !validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    signUpUser(formData.email,formData.password)

    if (Object.values(newErrors).every((error) => error === '')) {
      // You can implement your signup logic here
      console.log('Signup data:', formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <input
          type="text"
          className={`input-field ${errors.fullName && 'input-error'}`}
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => handleInputChange(e, 'fullName')}
        />
        {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        <input
          type="email"
          className={`input-field ${errors.email && 'input-error'}`}
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          type="password"
          className={`input-field ${errors.password && 'input-error'}`}
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleInputChange(e, 'password')}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <button
          className="btn-primary mt-4"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupFormComp;
