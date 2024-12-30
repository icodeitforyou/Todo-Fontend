import React from "react";
import { Route, Routes } from "react-router-dom";

import AuthLayout from "../components/AuthLayout/AuthLayout";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NotFound from "../components/NotFound";
import ToDoList from "../components/ToDoList";
import Profile from "../components/Profile";
import SignUp from "../components/auth/SignUp";
import LogIn from "../components/auth/LogIn";
import HeaderBar from "../components/HeaderBar";

export default function AppRoutes() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route index element={<HeroSection />} />
        <Route path="/signin" element={<AuthLayout children={<LogIn />} />} />
        <Route path="/signup" element={<AuthLayout children={<SignUp />} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
