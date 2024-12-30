import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const features = [
    {
      title: "Easy to Use",
      description: "Our user-friendly interface makes task management simple.",
    },
    {
      title: "Stay Organized",
      description: "Organize tasks into lists and track progress effortlessly.",
    },
    {
      title: "Anywhere, Anytime",
      description: "Access your tasks on any device, anywhere.",
    },
  ];
  return (
    <>
    <section className="py-10 min-h-[calc(100vh-118px)] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Organize Your Day</h1>
        <p className="py-6 text-lg">
          Track your tasks and stay productive with our easy-to-use to-do app.
        </p>
        <Link className="btn btn-primary btn-lg" to="/signin">
        Get Started
        </Link>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {features.map((feature, index) => (
            <div key={index} className="card shadow-lg bg-base-100">
              <div className="card-body text-center">
                <h2 className="card-title justify-center">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
