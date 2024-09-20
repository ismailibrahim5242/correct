import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
  // Formik hook for managing form state and handling submission
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
    }),
    onSubmit: (values) => {
      // Handle form submission
      alert('Signup successful!');
      console.log(values);
    }
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app.</p>
        
        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span>Firstname</span>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </label>

          <label>
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span>Lastname</span>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error">{formik.errors.lastName}</div>
            ) : null}
          </label>
        </div>

        <label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>Email</span>
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </label>

        <label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>Password</span>
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </label>

        <label>
          <input
            className="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>Confirm password</span>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </label>

        <button className="submit" type="submit">Submit</button>

        <p className="signin">
          Already have an account? <Link to="/signin">Signin</Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
