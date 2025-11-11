import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, NavLink } from "react-router";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    setLoading(true);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => "Profile updated successfully!")
          .catch((err) => toast.error(err.message));

        toast.success("Registration successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    googleLogin()
      .then(() => {
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl w-full max-w-sm">
        <form className="card-body" onSubmit={handleRegister}>
          <h1 className="text-3xl font-bold text-center">Register</h1>

          <label className="label w-11/12 mx-auto">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="input input-bordered w-11/12 mx-auto"
            required
            autoComplete="name"
          />

          <label className="label w-11/12 mx-auto">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="input input-bordered w-11/12 mx-auto"
            required
            autoComplete="email"
          />

          <label className="label w-11/12 mx-auto">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-11/12 mx-auto"
            required
            autoComplete="off"
          />

          <label className="label w-11/12 mx-auto">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="input input-bordered w-11/12 mx-auto"
            required
            autoComplete="new-password"
          />

          <button
            type="submit"
            className="btn btn-primary w-11/12 mx-auto mt-4"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-11/12 mx-auto mt-2"
          >
            <img
              className="w-4 mr-2"
              src="https://i.ibb.co/4ZdnG9FB/icons8-google-48.png"
              alt="Google Logo"
            />
            Register with Google
          </button>

          <p className="text-center mt-2">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-600 underline">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
