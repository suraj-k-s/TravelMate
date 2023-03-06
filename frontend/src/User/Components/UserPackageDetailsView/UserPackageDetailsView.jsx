import "./UserPackageDetailsView.css";
import Img from "../../../Assets/oneness.jpg";

import Img11 from "../../../Assets/pic79.jpg";
import Img12 from "../../../Assets/pic38.jpg";
import Img13 from "../../../Assets/pic7.jpg";
import Img14 from "../../../Assets/pic46.jpg";
import Img15 from "../../../Assets/pic80.jpg";
import Img16 from "../../../Assets/pic81.jpg";
import { Carousel } from 'react-carousel-minimal';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

export default function UserPackageDetailsView() {

  const [data, setData] = useState([])
  const [data3, setData3] = useState([])
  const fetchData = () =>{
    var dat={
       x : sessionStorage.getItem('pid')
    }
    axios
    .post(
      "http://localhost:4000/userpackagedetails",dat
    )
    .then((response) => {
      var data = response.data.data[0];
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData3 = () =>{
      var id = sessionStorage.getItem('pname')
    axios
    .post(
      "http://localhost:4000/userpackagedetailsplaces/"+id
    )
    .then((response) => {
      var data = response.data.data[0];
      setData3(data);
      console.log(data3);
    });
  }
  useEffect(() => {
    fetchData3();
  },[]);

    const data2 = [
        {
          image: Img12,
          caption: "Munnar"
        },
        {
          image: Img11,
          caption: "Coorg"
        },
        {
            image: Img15,
            caption: "Coorg"
          },
        {
            image: Img13,
            caption: "Coorg"
          },
          {
            image: Img14,
            caption: "Coorg"
          },
          {
            image: Img16,
            caption: "Coorg"
          },
      ];

      var x;

  return (
    <div className="userpackagedetailsview">
        <div className="userpackagedetailsviewcontainer">
        <div className="userPackageDetailsViewBox1">
        <div className="userPackageDetailsViewBox1LeftImg">
            <img src={data.packager_logo} alt="" className="userPackageDetailsViewLeftImg" />
          </div>
        <div className="userPackageDetailsViewBox1Text1">
            <div className="userPackageDetailsViewBox1Text1Container">
              <div className="userPackageDetailsViewBox1Text1Name">
                {data.packager_name}
              </div>
              <div className="userPackageDetailsViewBox1Text1Location">
              {data.location_name}, {data.district_name}
              </div>
              <div className="userPackageDetailsViewBox1Text1Phone">
                +91 {data.packager_contact}
              </div>
              <div className="userPackageDetailsViewBox1Text1Mail">
              {data.packager_email}
              </div>
            </div>
          </div>
          </div>
          <div className="userpackagedetailsviewcontainer2">
          <div className="userpackagedetailsviewcontainer3">
          <div className="userPackageDetailsViewBox2">
              <div className="userPackageDetailsViewBox2Title">
                  Package Details
              </div>
              <div className="userPackageDetailsViewBox2Contents">
                  <div className="userPackageDetailsViewBox2ContentList">
                  {data.package_noofdays} Day {
                    parseInt(data.package_noofdays)+1      } Night
                  </div>
                  <div className="userPackageDetailsViewBox2ContentList">
                      Starts at Evening
                  </div>
                  <div className="userPackageDetailsViewBox2ContentList">
                  Ends at Morning
                  </div>  
              </div>
          </div>
          <div className="userPackageDetailsViewBox4">
              <div className="userPackageDetailsViewBox4Contents">
                      <div className="userPackageDetailsViewBox4Title">
                  Package Includes
              </div>
              <div className="userPackageDetailsViewBox4ContentList">
                      Food
                  </div>
                  <div className="userPackageDetailsViewBox4ContentList">
                      Accomodation
                  </div>
                  <div className="userPackageDetailsViewBox4ContentList">
                      Transportation
                  </div>
              </div>
          </div>
          <div className="userPackageDetailsViewBox3">
              <div className="userPackageDetailsViewBox3Title">
                  Package Features
              </div>
              <div className="userPackageDetailsViewBox3Contents">
                  <div className="userPackageDetailsViewBox3ContentList">
                      24 hrs Drinking Water
                  </div>
              <div className="userPackageDetailsViewBox3ContentList">
                      Live Food
                  </div>
                  <div className="userPackageDetailsViewBox3ContentList">
                      Stay in Best Hotels
                  </div>
                  <div className="userPackageDetailsViewBox3ContentList">
                      AC Pushback Buses
                  </div>
              </div>
          </div>
          </div>
          <div className="userPackageDetailsViewBookButton">
            <Link to="/User/userpackagebooking" className="link">
        <button className="userPackageDetailsViewButton">Book Now</button>
        </Link>
        </div>

          </div>
          <div className="userPackageDetailsViewBox5">
              <div className="userPackageDetailsViewBox5Title">
                  Places To Explore
              </div>
              <div className="userPackageDetailsViewBox5Contents">
                  <div className="userPackageDetailsViewBox5ContentList">
                      {data3.tplace_1}
                  </div>
              <div className="userPackageDetailsViewBox5ContentList">
              {data3.tplace_2}
                  </div>
                  <div className="userPackageDetailsViewBox5ContentList">
                  {data3.tplace_3}
                  </div>
                  <div className="userPackageDetailsViewBox5ContentList">
                  {data3.tplace_4}
                  </div>
                  <div className="userPackageDetailsViewBox5ContentList">
                  {data3.tplace_5}
                  </div>
                  <div className="userPackageDetailsViewBox5ContentList">
                  {data3.tplace_6}
                  </div>
                  <div className="userPackageDetailsViewBox5ContentList">
                  {data3.tplace_7}
                  </div>
                  <div className="userPackageDetailsViewBox5ContentList">
                  {data3.tplace_8}
                  </div>
              </div>
          </div>
        </div>
        
        <div className="userimg">
      <Carousel
            data={data2}
            time={2000}
            width="700px"
            height="300px"
            radius="10px"
            slideNumber={false}
            captionPosition="none"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="10px"
            slideBackgroundColor="black"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "700px",
              maxHeight: "300px",
              margin: "30px auto",
            }}
          />
          
      </div>
        </div>
  )
}
