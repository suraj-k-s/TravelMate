import "./UserHome.css";
import Img2 from "../../../Assets/pic28.jpg";
import Img3 from "../../../Assets/pic24.jpg";
import Img4 from "../../../Assets/pic25.jpg";
import Img5 from "../../../Assets/pic26.jpg";
import Img6 from "../../../Assets/pic27.jpg";
import Img7 from "../../../Assets/pic29.jpg";
import Img8 from "../../../Assets/pic32.jpg";
import Img9 from "../../../Assets/pic33.jpg";
import Img10 from "../../../Assets/pic30.jpg";
import Img11 from "../../../Assets/pic37.jpg";
import Img12 from "../../../Assets/pic38.jpg";
import Img13 from "../../../Assets/pic36.jpg";
import Img14 from "../../../Assets/pic39.jpg";
import Img15 from "../../../Assets/pic40.jpg";
import Img16 from "../../../Assets/pic41.jpg";
import Img17 from "../../../Assets/pic42.jpg";
import Img18 from "../../../Assets/pic43.jpg";
import Img19 from "../../../Assets/pic44.jpg";
import Img20 from "../../../Assets/pic45.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import UserFooter from "../UserFooter/UserFooter";
import { Search } from "@mui/icons-material";
import { useRef, useState,useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UserHome() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState([]);

  let textInput1 = useRef();

  const fetchData = () =>{

    var sr=textInput1.current.value
    sessionStorage.setItem('pname',sr);
    window.location="/User/userpackageview"
  }

  const data2 = [
    {
      image: Img12,
      caption: "Munnar",
    },
    {
      image: Img11,
      caption: "Coorg",
    },
    {
      image: Img15,
      caption: "Hampi",
    },
    {
      image: Img19,
      caption: "Pondicherry",
    },
    {
      image: Img13,
      caption: "Goa",
    },
    {
      image: Img16,
      caption: "Rameswaram",
    },
    {
      image: Img18,
      caption: "Chikkamagaluru",
    },
    {
      image: Img20,
      caption: "Mysore",
    },
    {
      image: Img14,
      caption: "Ooty",
    },
    {
      image: Img17,
      caption: "Kanyakumari",
    },
  ];
  return (
    <div className="userhome">
      <div className="userimg">
        <Carousel
          data={data2}
          time={2500}
          width="1300px"
          height="550px"
          radius="10px"
          slideNumber={false}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="10px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "1300px",
            maxHeight: "550px",
            margin: "60px auto",
          }}
        />
        <div className="userHomeSearchContainer">
          <input
            ref={textInput1}
            type="text"
            className="userHomeSearchBox"
            placeholder="Search Your Holidays"
          />
        </div>
        <div className="userHomeSearchIconContainer">
          <Search className="userHomeSearchIcon" onClick={()=>fetchData()}/>
        </div>
      </div>
      <div className="userHomeBox1">
        <div className="userHomeBox1Title">God's Own Country</div>
        <div className="userHomeBox1ImageConatiner">
          <div className="userHomeBox1Image">
            <Link to="userpackageview" className="link">
              <img src={Img3} alt="" className="userHomeBox1ImageItem" />
            </Link>
            <br />
            <div className="userHomeBox1ImageItemTitle">Wayanad</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img2} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Vagamon</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img7} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Athirapally</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img8} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Wonderla</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img9} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Munnar</div>
          </div>
        </div>
      </div>
      <div className="userHomeBox1">
        <div className="userHomeBox1Title">Favourite Destinations Now Open</div>
        <div className="userHomeBox1ImageConatiner">
          <div className="userHomeBox1Image">
            <img src={Img10} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Kodachadri</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img2} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Nandi Hills</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img4} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Goa</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img5} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Hampi</div>
          </div>
          <div className="userHomeBox1Image">
            <img src={Img6} alt="" className="userHomeBox1ImageItem" />
            <br />
            <div className="userHomeBox1ImageItemTitle">Hyderabad</div>
          </div>
        </div>
      </div>
      <UserFooter />
    </div>
  );
}
