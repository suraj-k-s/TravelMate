import React from "react";
import "./TopBar.css";
import { NotificationsNone } from "@mui/icons-material";
import Img from "../../../Assets/adminpropic.jpg";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link to="/Admin/" className="link">
          <span className="logo">TravelMate</span>
          </Link>
          <div className="topLeftcaption">We Plan..You Pack..</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="topbarIconSymbol"/>
            <span className="topIconBadge">5</span>
          </div>
          <div className="dropdown">
            <img src={Img} alt="" className="topAvatar" />
            <div className="dropdown-content">
            {/* <Link to="/Admin/adminchangepassword" className="link">
              Change Password
              </Link> */}
              <Link to="/" className="link">
               LogOut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
