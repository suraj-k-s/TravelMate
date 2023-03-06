import "./PackagerPackageBooking.css";
import { Link } from "react-router-dom";
import { useRef, useState,useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function PackagerPackageBooking() {

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState([]);
  
  const fetchData = () => {
    axios.get("http://localhost:4000/busmodel").then((response) => {
      var data = response.data.data;
      setData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="packagerPackageBooking">
      <div className="packagerPackageBookingContainer">
        <h2 className="packagerPackageBookingHeader">Package Booking</h2>
        <div className="packagerPackageBookingFormWrapper">
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">Name</div>
            <div className="packagerPackageBookingFormBox">
              <input
                type="text"
                className="packagerPackageBookingFormInput"
                placeholder="Enter Customer Name"
                autocomplete="off"
              />
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">Package Name</div>
            <div className="packagerPackageBookingFormBox">
              <input
                type="text"
                className="packagerPackageBookingFormInput"
                placeholder="Enter Package Name"
                autocomplete="off"
              />
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">Booking Date</div>
            <div className="packagerPackageBookingFormBox">
              <input type="date" className="packagerPackageBookingFormInput" />
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">Trip Date</div>
            <div className="packagerPackageBookingFormBox">
              <input type="date" className="packagerPackageBookingFormInput" />
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">Trip Time</div>
            <div className="packagerPackageBookingFormBox">
              <input type="time" className="packagerPackageBookingFormInput" />
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">Bus</div>
            <div className="addBusModelBox">
              <select
                name="addBusModel"
                className="packagerPackageBookingBusSelectElement"
              >
                <option value="default">-----Select Bus-----</option>
                <option value="Idukki">Dhashavathar</option>
                <option value="Ernakulam">KingBull</option>
                <option value="Kannur">Leo</option>
              </select>
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">
              Starting Point
            </div>
            <div className="packagerPackageBookingFormBox">
              <input
                type="text"
                className="packagerPackageBookingFormInput"
                placeholder="Enter Starting Point"
              />
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">No of People</div>
            <div className="packagerPackageBookingFormBox">
              <input
                type="text"
                className="packagerPackageBookingFormInput"
                placeholder="Enter No of People"
              />
            </div>
          </div>
          <div className="packagerPackageBookingFormRow">
            <div className="packagerPackageBookingFormLabel">Amount</div>
            <div className="packagerPackageBookingFormBox">
              <input
                type="text"
                className="packagerPackageBookingFormInput"
                placeholder="Enter Advance Amount"
              />
            </div>
          </div>
          <Link to="/packagerreportbooking" className="link">
            <div className="packagerPackageBookingFormRowBtnSubmit">
              <input
                type="submit"
                value="Book Package"
                className="packagerPackageBookingFormSubmit"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
