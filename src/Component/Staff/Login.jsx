import React from "react";

const Login = () => {
  const login = () => {
    alert("oh babyyyy");
  };
  return (
    <>
      <form class="form">
        <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input placeholder="Enter email" type="email" />
        </div>
        <div class="input-container">
          <input placeholder="Enter password" type="password" />
        </div>
        <button class="submit" type="submit" onClick={login}>
          Sign in
        </button>

        <p class="signup-link">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>
    </>
  );
};

export default Login;
