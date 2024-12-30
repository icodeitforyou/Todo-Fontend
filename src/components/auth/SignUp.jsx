import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    try {
      setloading(true);
      const res = await axios.post(
        "https://todo-backend-qccs.onrender.com/auth/signup",
        formData
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setloading(false);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Invalid email or password</div>;
  }
  return (
    <div className="card bg-base-100 w-96">
      <h2 className="card-title justify-center">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        name="name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData.name}
        className="input input-bordered input-primary w-full my-4"
      />
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
        className="input input-bordered input-primary w-full mb-4"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
        className="input input-bordered input-primary w-full"
      />
      <button onClick={handleSubmit} className="btn btn-primary mt-4">
        Sign Up
      </button>
      <div className="text-center text-sm font-thin mt-4">
        Have an account?{" "}
        <span
          onClick={() => navigate("/signin")}
          className="underline underline-offset-4 cursor-pointer"
        >
          Sign in
        </span>
      </div>
    </div>
  );
}
