import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-118px)] flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="mt-4 text-6xl font-bold">404</h1>
        <p className="mt-2 text-2xl">This page could not be found.</p>
        <p className="mt-4">
          Maybe you've taken a wrong turn? Don't worry... it happens to the best
          of us.
        </p>
        <Link
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
