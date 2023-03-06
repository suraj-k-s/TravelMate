import { CurrencyRupee, Sort, Star } from "@mui/icons-material";
import "./UserPackageView.css";
import { Link } from "react-router-dom";
import Img from "../../../Assets/oneness.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import {Rating} from '@mui/material';

export default function UserPackageView() {
  const y = sessionStorage.getItem("pname");
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [dat, setDat] = useState([]);

  const fetchData = () => {
    var dat = {
      x: sessionStorage.getItem("pname"),
      
    };
    axios.post("http://localhost:4000/usersearch", dat).then((response) => {
      var data1 = response.data.data;
      var data = response.data.data1;
      console.log(data1);
      console.log(data);
      setData(data);
      setData1(data1);

    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getData = (id) => {
    var d = id;
    sessionStorage.setItem("pid", d);
    window.location = "/User/userpackagedetailsview";
  };

  const supFun = (avg) => {
    dat.push(avg);
  };

  data1.map((rs) => (supFun(rs[0].avgp)));

   
  return (
    <div className="userpackageview">
      <div className="userPackageViewBox1">
        <div className="userPackageViewBox1Left">
          <div className="userPackageViewBox1LeftContent">
            Search Results for '{y}'
          </div>
        </div>
        <div className="userPackageViewBox1Right">
          <div className="userSortDropdown">
            <Sort className="userPackageViewBox1RightSortIcon" />
            <div className="userSortDropdown-content">
              <Link to="/allpackagelist" className="link">
                Rate
              </Link>
              <Link to="/allbuslist" className="link">
                Rating
              </Link>
            </div>
          </div>
        </div>
      </div>
      {data.map((result, key) => (
        <div
          className="userPackageViewContainer"
          onClick={() => getData(result[0].package_id)}
        >
          {/* <Link to="/User/userpackagedetailsview" className="link"> */}
          <div className="userPackageViewBox2">
            <div className="userPackageViewBox2LeftImg">
              <img src={result[0].packager_logo} alt="" className="userPackageViewLeftImg" />
            </div>
            <div className="userPackageViewBox2Text1">
              <div className="userPackageViewBox2Text1Container">
                <div className="userPackageViewBox2Text1Name">
                  {result[0].packager_name}
                </div>
                <div className="userPackageViewBox2Text1Location">
                  {result[0].location_name}, {result[0].district_name}
                </div>
                <div className="userPackageViewBox2Text1Phone">
                  +91 {result[0].packager_contact}
                </div>
                <div className="userPackageViewBox2Text1Mail">
                  {result[0].packager_email}
                </div>
              </div>
            </div>
            <div className="userPackageViewBox5">
              <div className="userPackageViewBox5RateWrapper">
                <div className="userPackageViewBox5RateWrapper1">
                  <CurrencyRupee className="userPackageViewBox5RateIcon" />
                  <div className="userPackageViewBox5Rate">
                    {result[0].package_rate}
                  </div>
                </div>
                <div className="userPackageViewBox5RateCaption">
                  *inclusive of all taxes
                </div>
              </div>
            </div>
            <div className="userPackageViewBox6">
              <div className="userPackageViewBox6RatingWrapper">
                <div className="userPackageViewBox6RatingTitle">
                {
                    dat[key]
                  }
                </div>
                <div className="userPackageViewBox6RatingIcon">
                  
                  <Star className="userPackageViewBox6RatingStar" />
                  {/* <Rating name="half-rating-read" defaultValue={dat[key]} precision={0.5} readOnly /> */}
                </div>
              </div>
              <Link to="/User/userpackagebooking" className="link">
                <button className="userPackageViewBookButton">Book Now</button>
              </Link>
            </div>
          </div>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}
