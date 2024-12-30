import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    try {
      setloading(true);
      const res = await axios.post(
        "http://localhost:3000/auth/signin",
        formData
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      localStorage.setItem("token", res.data.token);
      setloading(false);
      navigate("/todos");
    } catch (error) {
      setError(true);
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
    <>
      <div className="card bg-base-100 w-96">
        <h2 className="card-title justify-center">Sign In</h2>
        <input
          type="email"
          name="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          placeholder="example@gmail.com"
          className="input input-bordered input-primary w-full my-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
          className="input input-bordered input-primary w-full"
        />
        <button onClick={handleSubmit} className="btn btn-primary mt-4">
          Sign In
        </button>
        <div className="text-center text-sm font-thin mt-4">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="underline underline-offset-4 cursor-pointer"
          >
            Sign up
          </span>
        </div>
      </div>
    </>
  );
}
