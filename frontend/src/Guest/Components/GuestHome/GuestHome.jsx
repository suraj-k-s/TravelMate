import "./GuestHome.css";
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
import { Carousel } from 'react-carousel-minimal';
import GuestFooter from "../GuestFooter/GuestFooter";
export default function GuestHome() {
  const data = [
    {
      image: Img12,
      caption: "Munnar"
    },
    {
      image: Img11,
      caption: "Coorg"
    },
    {
      image:Img15,
      caption: "Hampi"
    },
    {
      image: Img19,
      caption: "Pondicherry"
    },
    {
      image: Img13,
      caption: "Goa"
    },
    {
      image: Img16,
      caption: "Rameswaram"
    },
    {
      image: Img18,
      caption: "Chikkamagaluru"
    },
    {
      image: Img20,
      caption: "Mysore"
    },
    {
      image: Img14,
      caption: "Ooty"
    },
    {
      image: Img17,
      caption: "Kanyakumari"
    }
  ];
  return (
    <div className="guesthome">
      <div className="guestTopBar">
        <div className="guestTopBarTitle">
          TravelMate
          <div className="topLeftcaption">We Plan..You Pack..</div>
        </div>

        <div className="guestTopBarRight">
          <Link to="/login">
            <input
              type="button"
              value="Sign In"
              className="guestTopBarSignIn"
            />
          </Link>
        </div>
      </div>
      <div className="guestimg">
      <Carousel
            data={data}
            time={2500}
            width="13000px"
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
      </div>
      <div className="guestHomeBox1">
        <div className="guestHomeBox1Title">God's Own Country</div>
        <div className="guestHomeBox1ImageConatiner">
          <div className="guestHomeBox1Image">
            <img src={Img3} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Munnar</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img2} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Vagamon</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img7} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Athirapally</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img8} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Wonderla</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img9} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Wayanad</div>
          </div>
        </div>
      </div>
      <div className="guestHomeBox1">
        <div className="guestHomeBox1Title">
          Favourite Destinations Now Open
        </div>
        <div className="guestHomeBox1ImageConatiner">
          <div className="guestHomeBox1Image">
            <img src={Img10} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Kodachadri</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img2} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Nandi Hills</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img4} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Goa</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img5} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Hampi</div>
          </div>
          <div className="guestHomeBox1Image">
            <img src={Img6} alt="" className="guestHomeBox1ImageItem" />
            <br />
            <div className="guestHomeBox1ImageItemTitle">Hyderabad</div>
          </div>
        </div>
      </div>
      <GuestFooter />
    </div>
  );
}
