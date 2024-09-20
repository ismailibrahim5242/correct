import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signin = () => {
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
      // Handle successful submission (e.g., sign in logic)
      alert('Signin successful!');
      console.log(values);
    }
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        
        <div className="input-container">
          <input
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

        <button className="submit" type="submit">Sign in</button>

        <p className="signup-link">
          No account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default Signin;
