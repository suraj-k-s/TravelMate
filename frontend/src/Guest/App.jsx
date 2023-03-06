import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css"
import GuestHome from "./Components/GuestHome/GuestHome";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import UserSignUp from "./Components/UserSignUp/UserSignUp";
import PackagerSignUp from "./Components/PackagerSignUp/PackagerSignUp";
export default function () {
  return (
        <>
        <Routes>
        <Route path="/" element={<GuestHome/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/usersignup" element={<UserSignUp/>}/>
        <Route path="/packagersignup" element={<PackagerSignUp/>}/>
        </Routes>
        </>
  );
}
