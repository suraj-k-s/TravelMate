import Home from "./Components/Pages/Home/Home";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PackagerList from "./Components/Pages/PackagerList/PackagerList";
import Packager from "./Components/Pages/Packager/Packager";
import UserList from "./Components/Pages/UserList/UserList";
import DistrictView from "./Components/Pages/Views/DistrictView";
import LocationView from "./Components/Pages/Views/LocationView";
import Transactions from "./Components/Pages/Transactions/Transactions";
import AddDistrict from "./Components/Pages/Registrations/AddDistrict";
import AddLocation from "./Components/Pages/Registrations/AddLocation";
import BusModelView from "./Components/Pages/Views/BusModelView";
import AddBusModel from "./Components/Pages/Registrations/AddBusModel";
import ChangePassword from "./Components/Pages/ChangePassword/ChangePassword";
import PackagerApproval from "./Components/Pages/PackagerApproval/PackagerApproval";
import Feedback from "./Components/Pages/Feedback/Feedback";
import FeedbackView from "./Components/Pages/Feedback/FeedbackView";
import ComplaintList from "./Components/Pages/Complaints/ComplaintsList";
import ComplaintView from "./Components/Pages/Complaints/ComplaintView";
import Rating from "./Components/Pages/Ratings/Rating";
import Bookings from "./Components/Pages/Bookings/Bookings";
import React from "react";

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/packagers" element={<PackagerList />} />
          <Route path="/packagerinfo/:id" element={<Packager />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/districtview" element={<DistrictView />}/>
          <Route path="/locationview" element={<LocationView />}/>
          <Route path="/transactions" element={<Transactions />}/>
          <Route path="/adddistrict" element={<AddDistrict />}/>
          <Route path="/addlocation" element={<AddLocation />}/>
          <Route path="/busmodelview" element={<BusModelView />}/>
          <Route path="/addbusmodel" element={<AddBusModel />}/>
          <Route path="/adminchangepassword" element={<ChangePassword />}/>
          <Route path="/packagerapproval" element={<PackagerApproval />}/>
          <Route path="/feedbacks" element={<Feedback />}/>
          <Route path="/adminfeedbackinfo/:id" element={<FeedbackView />} />
          <Route path="/complaintslist" element={<ComplaintList />}/>
          <Route path="/admincomplaintinfo/:id" element={<ComplaintView />} />
          <Route path="ratings" element={<Rating />} />
          <Route path="bookings" element={<Bookings />} />
        
        </Routes>
      
      </div>
    </>
  );
}
export default App;
