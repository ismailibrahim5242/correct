import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [errorMessage, setErrorMessage] = useState(''); // To display any sign-in errors
  const navigate = useNavigate(); // To redirect after successful login

  // Function to get saved signup data from localStorage
  const getSavedUserData = () => {
    const savedValues = localStorage.getItem('signupForm');
    return savedValues ? JSON.parse(savedValues) : null;
  };

  // Formik hook for form state, validation, and handling submission
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
    }),
    onSubmit: (values) => {
      const savedUserData = getSavedUserData();

      // Check if there is any saved data in localStorage
      if (savedUserData) {
        const { email, password } = savedUserData;

        // Validate user input against the stored data
        if (values.email === email && values.password === password) {
          alert('Signin successful!');
          navigate('/Dashboard'); // Redirect to dashboard or another page after sign-in
        } else {
          setErrorMessage('Invalid email or password');
        }
      } else {
        setErrorMessage('No user found. Please sign up first.');
      }
    }
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <p className="form-title">Sign in to your account</p>

        <div className="input-container">
          <input 
           id='inp9'
            type="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="input-container">
          <input
          id='inp9'
            type="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
            required
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        {errorMessage && <div className="error">{errorMessage}</div>}

        <button className="submit" type="submit">Sign in</button>

        <p className="signup-link">
          No account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default Signin;
