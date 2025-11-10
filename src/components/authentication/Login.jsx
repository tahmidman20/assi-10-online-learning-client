import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate, NavLink } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

  // Email Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(redirectPath);
      })

      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login successful!");
        navigate(redirectPath);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl w-full max-w-sm">
        <form className="card-body " onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <label className="label w-11/12 mx-auto">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            className="input input-bordered w-11/12 mx-auto"
            required
          />

          <label className="label w-11/12 mx-auto">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-11/12 mx-auto"
            required
          />
          <h2 className="w-11/12 mx-auto cursor-pointer">Forget Password</h2>
          <button className="btn btn-primary w-11/12 mx-auto mt-4 items-center">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-11/12 mx-auto mt-2"
          >
            <img
              className="w-4 "
              src="https://i.ibb.co.com/4ZdnG9FB/icons8-google-48.png"
              alt=""
            />
            Login with Google
          </button>

          <p className="text-center mt-2">
            New here?{" "}
            <NavLink to="/register" className="text-blue-600 underline">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
