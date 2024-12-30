import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <header className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          To-Do App
        </Link>
      </div>
      <div className="flex-none">
        {!token && (
          <>
            <Link className="btn btn-ghost" to="/signin">
              LogIn
            </Link>
            <Link className="btn btn-ghost" to="/signup">
              SignUp
            </Link>
          </>
        )}
        {token && (
          <span
            className="btn btn-ghost"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          >
            Logout
          </span>
        )}
      </div>
    </header>
  );
}
