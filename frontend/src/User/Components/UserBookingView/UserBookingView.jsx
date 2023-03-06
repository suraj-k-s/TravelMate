import "./UserBookingView.css";
import * as React from "react";
import { FaBusAlt, FaLocationArrow, FaRegMoneyBillAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarDateFill, BsCalendar2Date } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { HiCurrencyRupee } from "react-icons/hi";
import { Rating } from "@mui/material";
import { useState,useEffect,useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function UserBookingView() {

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const { id } = useParams();

  const [value, setValue] = React.useState(0);
  const [data, setData] = useState([])
  var userid = sessionStorage.getItem("userId");

  const fetchData = () =>{
    axios
    .get(
      `http://localhost:4000/userbookingview/${id}`
    )
    .then((response) => {
      var data = response.data.data[0];
      setData(data);
      setValue(data.rating);
      
      
    });
  }
  useEffect(() => {
    fetchData();
  },[]);


let textInput1 = useRef();
let textInput2 = useRef();


const onSubmit = (e) => {
  var dat = {
    feedback_content: textInput1.current.value,
    packager_id:data.packager_id,
    package_id:data.package_id,
    user_id:data.user_id,
    rating:value,
    booking_id:id,
  };
  console.log(dat);


  axios.post("http://localhost:4000/userfeedbackrating/", dat).then((response) => {
    window.location = "/User/usermybookings";
  });
};

const onSubmit2 = (e) => {
  var dat = {
    complaint_content: textInput2.current.value,
    packager_id:data.packager_id,
    package_id:data.package_id,
    user_id:data.user_id,
    booking_id:id,
  };


  axios.post("http://localhost:4000/usercomplaint/", dat).then((response) => {
    window.location = "/User/usermybookings";
  });
};

  return (
    <div className="userBookingView">
      <div className="userBookingViewTitleWrapper">
        <h2 className="userBookingViewTitle">Booking Details</h2>
      </div>
      <div className="userBookingViewContainer">
        <div className="userBookingViewDetailsWrapper">
          <div className="userBookingViewDetailsRow">
            <FaBusAlt className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.packager_name}</p>
          </div>

          <div className="userBookingViewDetailsRow">
            <ImLocation2 className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.booking_startpoint}</p>
          </div>
          <div className="userBookingViewDetailsRow">
            <FaLocationArrow className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.package_name}</p>
          </div>
          <div className="userBookingViewDetailsRow">
            <BsFillCalendarDateFill className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.booking_date}</p>
          </div>
          <div className="userBookingViewDetailsRow">
            <BsCalendar2Date className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.booking_tripdate}</p>
          </div>
          <div className="userBookingViewDetailsRow">
            <FaRegMoneyBillAlt className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.bookpayment_status}</p>
          </div>
          <div className="userBookingViewDetailsRow">
            <BiTimeFive className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.trip_status}</p>
          </div>
          <div className="userBookingViewDetailsRow">
            <HiCurrencyRupee className="userBookingViewDetailsIcon" />
            <p className="userBookingViewDetail">{data.bookpayment_amount}</p>
          </div>
        </div>
        <form className="userBookingFeedbackContainer" onSubmit={handleSubmit(onSubmit)}>
          <p>Your Feedbacks Values a Lot...!</p>
          <textarea
            name=""
            required
            placeholder="Write Your Feedback...!"
            defaultValue={data.feedback_content}
            ref={textInput1}
            className="userBookingFeedback"
          ></textarea>
          <Rating
            name="simple-controlled"
           defaultValue={data.rating}
            value={value}
            className="userratingstaricon"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <input
            type="submit"
            value="Submit"
            className="userBookingFeedbackBtnSubmit"
          />
        </form>
        <form className="userBookingComplaintContainer" onSubmit={handleSubmit(onSubmit2)}>
        <p>Have any Trouble..Feel Free to Complaint...!</p>
          <textarea
            name=""
            placeholder="Write Your Complaint...!"
            defaultValue={data.complaint_content}
            ref={textInput2}
            className="userBookingComplaint"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="userBookingComplaintBtnSubmit"
          />
          <div className="userBookingComplaintViewContainer">
            <h4>Complaint Reply :</h4>
            <p className="userBookingComplaintViewReply">{data.complaint_reply}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
