import "./PackagerTopBar.css";
import { BarChart,Visibility ,NotificationsNone,AppRegistration } from "@mui/icons-material";
import Img from "../../../Assets/oneness.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PackagerTobBar() {

  var packagerid = sessionStorage.getItem("packagerId");
  const [data, setData] = useState([]);

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagerprofile/"+packagerid
    )
    .then((response) => {
      var data = response.data.data[0];
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);


  return (
    <div className="packagerTobBar">
      <div className="packagerTobBarWrapper">
        <div className="packagerTobBarLeft">
        <Link to="/Packager" className="link">
          <span className="packagerTopBarlogo">TravelMate</span>
          </Link>
          <div className="packagerTobBarLeftcaption">We Plan..You Pack..</div>
        </div>
        <div className="packagerTobBarRight">
        <div className="packagerTobBarRightItemContainer">
          <div className="packagerTopbarDropdown">
            <div className="packagerTobBarRightIcon">
                <Visibility/> 
            </div>
            <div className="packagerTopbarDropdown-content">
            <Link to="allpackagelist" className="link">
              Packages
              </Link>
              <Link to="allbuslist" className="link">
              Buses
              </Link>
            </div>
            </div>
          </div>
          <div className="packagerTobBarRightItemContainer">
            <div className="packagerTobBarRightIcon">
            <Link to="packagerpackagebooking" className="link">
                <AppRegistration/> 
                </Link>
            </div>
          </div>
          <div className="packagerTobBarRightItemContainer">
          <div className="packagerTopbarDropdown">
            <div className="packagerTobBarRightIcon">
                <BarChart/> 
            </div>
            <div className="packagerTopbarDropdown-content">
            <Link to="packagerreportbooking" className="link">
              Bookings
              </Link>
              <Link to="PackagerReportTransactions" className="link">
              Transactions
              </Link>
            </div>
            </div>
          </div>
          <div className="packagerTobBarRightItemContainer">
          <div className="packagerTopbarDropdown">
            <div className="packagerTobBarRightIcon">
                <NotificationsNone/> 
            </div>
            <div className="packagerTopbarDropdown-content">
            <Link to="packagercomplaintview" className="link">
              Complaints
              </Link>
              <Link to="packagerfeedbackview" className="link">
              Feedbacks
              </Link>
              <Link to="packagerratingview" className="link">
              Ratings
              </Link>
            </div>
            </div>
          </div>
          <div className="packagerTopbarDropdown">
            <img src={data.packager_logo} alt="" className="packagerTobBarAvatar" />
            <div className="packagerTopbarDropdown-content">
            <Link to="packagerprofile" className="link">
              My Profile
              </Link>
              <Link to="packagerchangepassword" className="link">
              Change Password
              </Link>
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
