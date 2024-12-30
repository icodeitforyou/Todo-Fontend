import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/auth/signin";
import SignUp from "../components/auth/signup";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Header from "../components/header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NotFound from "../components/NotFound";
import ToDoList from "../components/ToDoList";
import Profile from "../components/Profile";

export default function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HeroSection />} />
        <Route path="/signin" element={<AuthLayout children={<SignIn />} />} />
        <Route path="/signup" element={<AuthLayout children={<SignUp />} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
