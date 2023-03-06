import "./PackagerProfile.css";
import {
  PermIdentity,
  CalendarToday,
  Phone,
  MailOutline,
  LocationOn,
  Instagram,
} from "@mui/icons-material";
import Img from "../../../Assets/oneness.jpg";
import EditPackager from "./EditPackager";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PackagerProfile() {

  const [data, setData] = useState([]);
  var packagerid = sessionStorage.getItem("packagerId");

  const fetchData = () =>{
    axios
    .get(
      `http://localhost:4000/packagerprofile/`+packagerid
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
    <div className="packagerprofile">
      <div className="packagerProfileTopTitleWrapper">
        <div className="packagerProfileTopTitleProfile">
          <div className="packagerProfileTopTitleItem">My Profile</div>
        </div>
        <div className="packagerProfileTopTitleEdit">
          <div className="packagerProfileTopTitleItem">Edit Profile</div>
        </div>
      </div>
      <div className="packagerProfilecontainer">
        <div className="packagerProfilePackagerShow">
          <div className="packagerProfilePackagerShowTop">
            <img src={data.packager_logo} alt="" className="packagerProfilePackagerShowImg" />
            <span className="packagerProfilePackagerShowPackagerName">{data.packager_name}</span>
          </div>
          <div className="packagerProfilePackagerShowBottom">
            <span className="packagerProfilePackagerShowTitle">Profile Info</span>
            <div className="packagerProfilePackagerShowInfo">
              <PermIdentity className="packagershowIcon" />
              <span className="packagerProfilePackagerShowInfoTitle">{data.packager_name}</span>
            </div>
            <div className="packagerProfilePackagerShowInfo">
              <LocationOn className="packagershowIcon" />
              <span className="packagerProfilePackagerShowInfoTitle">
              {data.location_name}, {data.district_name}
              </span>
            </div>
            <div className="packagerProfilePackagerShowInfo">
              <Phone className="packagershowIcon" />
              <span className="packagerProfilePackagerShowInfoTitle">+91 {data.packager_contact}</span>
            </div>
            <div className="packagerProfilePackagerShowInfo">
              <Instagram className="packagershowIcon" />
              <span className="packagerProfilePackagerShowInfoTitle">{data.packager_instagram}</span>
            </div>
            <div className="packagerProfilePackagerShowInfo">
              <MailOutline className="packagershowIcon" />
              <span className="packagerProfilePackagerShowInfoTitle">
              {data.packager_email}
              </span>
            </div>
            <div className="packagerProfilePackagerShowInfo">
              <CalendarToday className="packagershowIcon" />
              <span className="packagerProfilePackagerShowInfoTitle">{data.packager_doj}</span>
            </div>
          </div>
        </div>
        <div className="packagerProfileEditPackager">
        <EditPackager />
        </div>
      </div>
    </div>
  );
}
