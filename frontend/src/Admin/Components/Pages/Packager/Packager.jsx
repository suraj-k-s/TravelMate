import "./Packager.css";
import Img from "../../../../Assets/oneness.jpg";
import {
  PermIdentity,
  CalendarToday,
  Phone,
  MailOutline,
  LocationOn,
  Instagram,
} from "@mui/icons-material";
import Chart from "./Chart";
import PackageList from "./PackageList";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { packageData } from "../../../../dummyData";

export default function Packager() {

  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchData = () =>{
    axios
    .get(
      `http://localhost:4000/packagerinfo/${id}`
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
    <div className="packager">
      <div className="packagerTitleContainer">
        <h1 className="packagerTitle">Packager Info</h1>
        <div className="packagerInfoPackageTitle">
        <h2 className="packageListTitleContent">Package List</h2>
        </div>
      </div>
      <div className="packagerContainer">
        <div className="packagerShow">
          <div className="packagerShowTop">
            <img src={data.packager_logo} alt="" className="packagerShowImg" />
            <span className="packagerShowPackagerName">{data.packager_name}</span>
          </div>
          <div className="packagerShowBottom">
            <span className="packagerShowTitle">Profile Info</span>
            <div className="packagerShowInfo">
              <PermIdentity className="packagershowIcon" />
              <span className="packagerShowInfoTitle">{data.packager_name}</span>
            </div>
            <div className="packagerShowInfo">
              <LocationOn className="packagershowIcon" />
              <span className="packagerShowInfoTitle">
              {data.location_name}, {data.district_name}
              </span>
            </div>
            <div className="packagerShowInfo">
              <Phone className="packagershowIcon" />
              <span className="packagerShowInfoTitle">+91 {data.packager_contact}</span>
            </div>
            <div className="packagerShowInfo">
              <Instagram className="packagershowIcon" />
              <span className="packagerShowInfoTitle">
                {data.packager_instagram}
              </span>
            </div>
            <div className="packagerShowInfo">
              <MailOutline className="packagershowIcon" />
              <span className="packagerShowInfoTitle">
                {data.packager_email}
              </span>
            </div>
            <div className="packagerShowInfo">
              <CalendarToday className="packagershowIcon" />
              <span className="packagerShowInfoTitle">{data.packager_doj}</span>
            </div>
          </div>
        </div>
        <div className="packageListShow">
        <PackageList id={id}/>
        </div>
        </div>
        <div className="packageListChart">
        <Chart data={packageData} title="Package Analysis" grid dataKey="Bookings"/>
        </div>
      </div>
  );
}
