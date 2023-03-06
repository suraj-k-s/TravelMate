import Confetti from "react-confetti";
import "./UserBookingSuccess.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function UserBookingSuccess() {

  const [data, setData] = useState([]);

  const fetchData = () => {
    var id = sessionStorage.getItem("bkid");
    axios
      .get("http://localhost:4000/userbookingsuccess/" + id)
      .then((response) => {
        var data = response.data.data[0];
        console.log(data);
        setData(data);
        
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const timeString = data.booking_triptime;
  // Prepend any date. Use your birthday.
  const timeString12hr = new Date(
    "1970-01-01T" + timeString + "Z"
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  var time = timeString12hr;

  // const dateString = data.booking_tripdate;

//   function ChangeFormateDate(oldDate)
// {
//    return oldDate.toString().split("-").reverse().join("-");
// }

// var date=ChangeFormateDate(dateString)


// var dateString2 = date // Oct 23

// const d = new Date();
// let text = dateString2.toString();

// console.log(text);

  return (
    <div className="userBookingSuccess">
      <div className="userBookingSuccessContainer">
        <Confetti
          width={740}
          height={550}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={6000}
          className="userBookingSuccessConfetti"
        />
        <div className="userBookingSuccessTitleWrapper">
          <p className="userBookingSuccessTitle">
            Booking Successful...!
          </p>
        </div>
        <div className="userBookingSuccessContentWrapper">
            <p className="userBookingSuccessContent">
                {data.package_name}
            </p>
        </div>
        <div className="userBookingSuccessRow">
            <div className="userBookingSuccessLabel">
                From:
            </div>
            <div className="userBookingSuccessData">{data.booking_startpoint}</div>
        </div>
        <div className="userBookingSuccessRow">
            <div className="userBookingSuccessLabel">
                Date :
            </div>
            <div className="userBookingSuccessData">{data.booking_tripdate}</div>
        </div>
        <div className="userBookingSuccessRow">
            <div className="userBookingSuccessLabel">
                Time :
            </div>
            <div className="userBookingSuccessData">{data.booking_triptime}</div>
        </div>
        <div className="userBookingSuccessButtonWrapper">
            <Link to="/User" className="link">
            <input type="button" value="Home" className="userBookingSuccessButton"/>
            </Link>
        </div>
      </div>
    </div>
  );
}