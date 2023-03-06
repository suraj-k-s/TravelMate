import "./UserPayment.css";
import {
  FaUser,
  FaCcVisa,
  FaGooglePay,
  FaRegCreditCard,
  FaCreditCard,
} from "react-icons/fa";
import { BsCalendar2MonthFill, BsCalendar3 } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { SiPhonepe } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";


export default function UserPayment() {

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
      } = useForm();
    
      const [data, setData] = useState([]);

      const fetchData = () => {
        var id = sessionStorage.getItem("bkid");
        axios
          .get("http://localhost:4000/userpayment/"+id)
          .then((response) => {
            var data = response.data.data[0];
            setData(data);
           
            
          });
      };
      useEffect(() => {
        fetchData();
      }, []);

      let textInput1 = useRef();


  const onSubmit = (e) => {
    var dat = {
      bookpayment_amount: textInput1.current.value,
      booking_id:sessionStorage.getItem('bkid')
    };


    axios.post("http://localhost:4000/userpayment/", dat).then((response) => {
      window.location = "/User/userbookingsuccess";
    });
  };

  return (
    <div classNameName="userpayment">
      <div className="wrapper">
        <h2>Payment Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Account</h4>
          <div className="input_group">
            <div className="input_box">
              <input
                type="text"
                value={data.user_name}
                required
                className="name"
              />
              <i className="fa fa-user icon">
                <FaUser />
              </i>
            </div>
            <div className="input_box">
              <input
                type="text"
                placeholder="Name on Card"
                required
                className="name"
              />
              <i className="fa fa-user icon">
                <FaUser />
              </i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input
                type="number"
                value={data.user_contact}
                required
                className="name"
              />
              <i className="fa fa-envelope icon">
                <MdCall />
              </i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <h4>Payment Details</h4>
              <input
                type="radio"
                name="pay"
                className="radio"
                id="bc1"
                checked
              />
              <label for="bc1">
                <span>
                  <i className="fa fa-cc-visa">
                    <FaCcVisa />
                  </i>{" "}
                  Credit Card
                </span>
              </label>
              <input type="radio" name="pay" className="radio" id="bc2" />
              <label for="bc2">
                <span>
                  <i className="fa fa-cc-paypal">
                    <SiPhonepe />
                  </i>{" "}
                  UPI
                </span>
              </label>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input
                type="tel"
                name=""
                className="name"
                placeholder="0000 0000 0000 0000"
                required
              />
              <i className="fa fa-credit-card icon">
                <FaRegCreditCard />
              </i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input
                type="tel"
                name=""
                className="name"
                placeholder="Card CVV"
                required
              />
              <i className="fa fa-user icon">
                <FaCreditCard />
              </i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <div className="input_box">
                <input
                  type="number"
                  placeholder="Exp Month"
                  required
                  className="name"
                />
                <i className="fa fa-calendar icon" aria-hidden="true">
                  <BsCalendar2MonthFill />
                </i>
              </div>
            </div>
            <div className="input_box">
              <input
                type="number"
                placeholder="Exp Year"
                required
                className="name"
              />
              <i className="fa fa-calendar-o icon" aria-hidden="true">
                <BsCalendar3 />
              </i>
            </div>
          </div>
          <div className="input_box">
            <input
              type="number"
              value={data.amount}
              ref={textInput1}
              required
              className="name"
            />
            <i className="fa fa-money icon" aria-hidden="true">
              <BiRupee />
            </i>
          </div>
          <div className="input_group">
            <div className="input_box">
                <button type="submit">PAY NOW</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
