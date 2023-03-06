import "./UserPackageBooking.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UserPackageBooking() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const fetchData = () => {
    var id = sessionStorage.getItem("pid");
    axios
      .post("http://localhost:4000/userbookingpackager/" + id)
      .then((response) => {
        var data = response.data.data[0];
        sessionStorage.setItem("pnod",data.package_noofdays );
        fetchData2(data.packager_id);
        
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData2 = (id) => {
    axios
      .get("http://localhost:4000/userbookingbus/"+id)
      .then((response) => {
        var data3 = response.data.data;
        setData2(data3);
      });
  };

  console.log(data2);
  
  let textInput1 = useRef();
  let textInput2 = useRef();
  let textInput3 = useRef();
  let textInput4 = useRef();
  let textInput5 = useRef();


  const onSubmit = (e) => {

    var dat = {
      booking_tripdate: textInput1.current.value,
      booking_triptime: textInput2.current.value,
      booking_startpoint: textInput3.current.value,
      booking_noofpeople: textInput4.current.value,
      bus_id: textInput5.current.value,
      user_id:sessionStorage.getItem('userId'),
      package_id:sessionStorage.getItem('pid'),
      package_noofdays:sessionStorage.getItem('pnod')
    };
console.log(dat);

    axios.post("http://localhost:4000/userbooking/", dat).then((response) => {
      var x=response.data.data[0].id;
      sessionStorage.setItem('bkid',x);
      window.location = "/User/userpayment";
    });
  };

 

  return (
    <div className="userPackageBooking">
      <form
        className="userPackageBookingContainer"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="userPackageBookingHeader">Package Booking</h2>
        <div className="userPackageBookingFormWrapper">
          <div className="userPackageBookingFormRow">
            <div className="userPackageBookingFormLabel">Trip Date</div>
            <div className="userPackageBookingFormBox">
              <input
                type="date"
                ref={textInput1}
                className="userPackageBookingFormInput"
              />
            </div>
          </div>
          <div className="userPackageBookingFormRow">
            <div className="userPackageBookingFormLabel">Trip Time</div>
            <div className="userPackageBookingFormBox">
              <input type="time" ref={textInput2} className="userPackageBookingFormInput" />
            </div>
          </div>
          <div className="userPackageBookingFormRow">
            <div className="userPackageBookingFormLabel">Starting Point</div>
            <div className="userPackageBookingFormBox">
              <input
                type="text"
                ref={textInput3}
                className="userPackageBookingFormInput"
                placeholder="Enter Starting Point"
              />
            </div>
          </div>
          <div className="userPackageBookingFormRow">
            <div className="userPackageBookingFormLabel">No of People</div>
            <div className="userPackageBookingFormBox">
              <input
                type="text"
                ref={textInput4}
                className="userPackageBookingFormInput"
                placeholder="Enter No of People"
              />
            </div>
          </div>
          <div className="userPackageBookingFormRow">
            <div className="userPackageBookingFormLabel">Bus Features</div>
            <div className="addBusModelBox">
              <select
                name="addBusModel"
                className="userselectBusFeaturesBoxSelectElement"
              >
                <option value="default"> ---Select Bus Features---</option>
                <option value="AC Pushback">AC Pushback</option>
                <option value="Non AC Pushback">Non AC Pushback</option>
                <option value="Non AC Non Pushback">Non AC Non Pushback</option>
              </select>
            </div>
          </div>
          <div className="userPackageBookingFormRow">
            <div className="userPackageBookingFormLabel">Bus</div>
            <div className="addBusModelBox">
              <select
                name="addBusModel"
                ref={textInput5}
                className="userselectBusModelBoxSelectElement"
              >
                <option value="default">---Select Bus---</option>
                {data2.map((result, key) => (
                  <option key={key} value={result.bus_id}>
                    {result.bus_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
            <div className="userPackageBookingFormRowBtnSubmit">
              <input
                type="submit"
                value="Proceed To Payment"
                className="userPackageBookingFormSubmit"
              />
            </div>
        </div>
      </form>
    </div>
  );
}
