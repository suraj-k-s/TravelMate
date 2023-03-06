import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css"
import PackagerHome from "./Components/PackagerHome/PackagerHome";
import PackagerTobBar from "./Components/PackagerTopBar/PackagerTopBar";
import EditPackager from "./Components/PackagerProfile/EditPackager";
import PackagerProfile from "./Components/PackagerProfile/PackagerProfile";
import PackagerFooter from "./Components/PackagerFooter/PackagerFooter";
import PackagerRegistrationFront from "./Components/PackagerRegistrationFront/PackagerRegistrationFront";
import PackageRegistration from "./Components/PackageRegistration/PackageRegistration";
import BusRegistration from "./Components/BusRegistration/BusRegistration";
import AllPackageList from "./Components/Package/AllPackageList/AllPackageList";
import PackageEdit from "./Components/Package/PackageEdit/PackageEdit";
import AllBusList from "./Components/Bus/AllBusList/AllBusList";
import BusEdit from "./Components/Bus/BusEdit/BusEdit";
import PackagerPackageBooking from "./Components/PackagerPackageBooking/PackagerPackageBooking";
import PackagerReportBooking from "./Components/PackagerReport/PackagerReportBooking/PackagerReportBooking";
import PackagerReportTransactions from "./Components/PackagerReport/PackagerReportTransactions/PackagerReportTransactions";
import PackagerReportBookingPie from "./Components/PackagerReport/PackagerReportBooking/PackagerReportBookingPie";
import PackagerReportBookingBar from "./Components/PackagerReport/PackagerReportBooking/PackagerReportBookingBar";
import PackagerReportTransactionsChart from "./Components/PackagerReport/PackagerReportTransactions/PackagerReportTransactionsChart";
import PackagerComplaintView from "./Components/PackagerNotifications/PackagerComplaintView/PackagerComplaintView";
import PackagerComplaintViewSingle from "./Components/PackagerNotifications/PackagerComplaintView/PackagerComplaintViewSingle";
import PackagerFeedbackView from "./Components/PackagerNotifications/PackagerFeedbackView/PackagerFeedbackView";
import PackagerFeedbackViewSingle from "./Components/PackagerNotifications/PackagerFeedbackView/PackagerFeedbackViewSingle";
import PackagerRatingView from "./Components/PackagerNotifications/PackagerRatingView/PackagerRatingView";
import PackagerChangePassword from "./Components/PackagerChangePassword/PackagerChangePassword";
export default function () {
    return (
      <>
      <PackagerTobBar/>
          <Routes>
          <Route path="/" element={<PackagerHome/>}/>
          <Route path="/editpackager" element={<EditPackager/>}/>
          <Route path="/packagerprofile" element={<PackagerProfile/>}/>
          <Route path="/packagerregistrationfront" element={<PackagerRegistrationFront/>}/>
          <Route path="/packageregistration" element={<PackageRegistration/>}/>
          <Route path="/busregistration" element={<BusRegistration/>}/>
          <Route path="/allpackagelist" element={<AllPackageList/>}/>
          <Route path="/packageedit/:packageId" element={<PackageEdit/>}/>
          <Route path="/allbuslist" element={<AllBusList/>}/>
          <Route path="/busedit/:busId" element={<BusEdit/>}/>
          <Route path="/packagerpackagebooking" element={<PackagerPackageBooking/>}/>
          <Route path="/packagerreportbooking" element={<PackagerReportBooking/>}/>
          <Route path="/packagerreporttransactions" element={<PackagerReportTransactions/>}/>
          <Route path="/packagerreportbookingpie" element={<PackagerReportBookingPie/>}/>
          <Route path="/packagerreportbookingbar" element={<PackagerReportBookingBar/>}/>
          <Route path="/packagerreporttransactionschart" element={<PackagerReportTransactionsChart/>}/>
          <Route path="/packagercomplaintview" element={<PackagerComplaintView/>}/>
          <Route path="/packagercomplaintviewsingle/:complaintId" element={<PackagerComplaintViewSingle/>}/>
          <Route path="/packagerfeedbackview" element={<PackagerFeedbackView/>}/>
          <Route path="/packagerfeedbackviewsingle/:feedbackId" element={<PackagerFeedbackViewSingle/>}/>
          <Route path="/packagerratingview" element={<PackagerRatingView/>}/>
          <Route path="/packagerchangepassword" element={<PackagerChangePassword/>}/>
          </Routes>
          <PackagerFooter/>
      </>
    );
  }