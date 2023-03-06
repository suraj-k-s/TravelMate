import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css"
import UserHome from "./Components/UserHome/UserHome";
import UserTopBar from "./Components/UserTopBar/UserTopBar";
import UserPackageView from "./Components/UserPackageView/UserPackageView";
import UserPackageDetailsView from "./Components/UserPackageDetailsView/UserPackageDetailsView";
import UserPackageBooking from "./Components/UserPackageBooking/UserPackageBooking";
import UserPayment from "./Components/UserPayment/UserPayment";
import UserBookingSuccess from "./Components/UserBookingSuccess/UserBookingSuccess";
import UserChangePassword from "./Components/UserChangePassword/UserChangePassword";
import UserMyBookings from "./Components/UserMyBookings/UserMyBookings";
import UserBookingView from "./Components/UserBookingView/UserBookingView";
export default function () {
  return (
    <>
    <UserTopBar/>
        <Routes>
        <Route path="/" element={<UserHome/>}/>
        <Route path="/userpackageview" element={<UserPackageView/>}/>
        <Route path="/userpackagedetailsview" element={<UserPackageDetailsView/>}/>
        <Route path="/userpackagebooking" element={<UserPackageBooking/>}/>
        <Route path="/userpayment" element={<UserPayment/>}/>
        <Route path="/userbookingsuccess" element={<UserBookingSuccess/>}/>
        <Route path="/userchangepassword" element={<UserChangePassword/>}/>
        <Route path="/usermybookings" element={<UserMyBookings/>}/>
        <Route path="/userbookingview/:id" element={<UserBookingView/>}/>
        </Routes>
    </>
  );
}
