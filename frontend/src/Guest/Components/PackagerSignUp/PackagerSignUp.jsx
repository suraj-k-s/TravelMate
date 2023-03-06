import "./PackagerSignUp.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  let textInput1 = useRef();
  let textInput2 = useRef();
  let textInput3 = useRef();
  let textInput4 = useRef();
  let textInput5 = useRef();
  let textInput6 = useRef();
  let textInput7 = useRef();
  let textInput8 = useRef();

  const onSubmit = (e) => {
    var dat = {
      packager_name: textInput1.current.value,
      district_id: textInput2.current.value,
      location_id: textInput3.current.value,
      packager_contact: textInput4.current.value,
      packager_email: textInput5.current.value,
      packager_instagram: textInput6.current.value,
      packager_password: textInput7.current.value,
      packager_noofbus: textInput8.current.value,
    };

    axios.post("http://localhost:4000/packagerregistration/", dat).then((response) => {
      if(response.data.message === "Email Already Exist"){
        alert("Email Already Registered")
      }
      else if(response.data.message === "Number Already Exist"){
        alert("Number Already Registered")
      }
      else{
      window.location = "/Login";
      }
    });
  };

  const fetchData = () => {
    axios.get("http://localhost:4000/district").then((response) => {
      var data = response.data.data;
      setData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData2 = (id) => {
    axios.get("http://localhost:4000/location/" + id).then((response) => {
      var data2 = response.data.data;
      setData2(data2);
    });
  };

  return (
    <div className="packagerSignUp">
      <div className="packagerSignUpLogoTitle">
        <Link to="/" className="link">
          TravelMate
        </Link>
      </div>
      <form className="packagerSignUpContainer" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="packagerSignUpHeader">Packager Sign Up</h2>
        <div className="packagerSignUpFormWrapper">
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">Name</div>
            <div className="packagerSignUpFormBox">
              <input
                type="text"
                ref={textInput1}
                className="packagerSignUpFormInput"
                placeholder="Enter your name"
                autocomplete="off"
                required
                pattern="[A-Za-z -]{0,}"
              />
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">District</div>
            <div className="packagerSignUpFormBox">
              <select
                name="addLocationDistrict"
                ref={textInput2}
                className="packagerSignUpFormInputDrop"
                required
                onChange={(event) => fetchData2(event.target.value)}
              >
                <option value="">---Select District---</option>
                {data.map((result, key) => (
                  <option key={key} value={result.district_id}>
                    {result.district_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">Location</div>
            <div className="packagerSignUpFormBox">
              <select
                name="addLocationDistrict"
                ref={textInput3}
                required
                className="packagerSignUpFormInputDrop"
              >
                <option value="default">---Select Location---</option>
                {data2.map((result, key) => (
                  <option key={key} value={result.location_id}>
                    {result.location_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">Contact</div>
            <div className="packagerSignUpFormBox">
              <input
                type="text"
                ref={textInput4}
                className="packagerSignUpFormInput"
                placeholder="Enter your contact number"
                autocomplete="off"
                required
                pattern="[0-9]{10}"
              />
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">E-Mail</div>
            <div className="packagerSignUpFormBox">
              <input
                type="text"
                ref={textInput5}
                className="packagerSignUpFormInput"
                placeholder="Enter your email address"
                autocomplete="off"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{0,}$"
              />
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">Instagram</div>
            <div className="packagerSignUpFormBox">
              <input
                type="text"
                ref={textInput6}
                className="packagerSignUpFormInput"
                placeholder="Enter your Instagram ID"
                autocomplete="off"
                required
                pattern="[a-z_]{0,}"
              />
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">Password</div>
            <div className="packagerSignUpFormBox">
              <input
                type="password"
                ref={textInput7}
                className="packagerSignUpFormInput"
                placeholder="Enter your password"
                required
                pattern="[A-Za-z0-9]{8,}"
              />
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">No of Bus</div>
            <div className="packagerSignUpFormBox">
              <input
                type="text"
                ref={textInput8}
                className="packagerSignUpFormInput"
                placeholder="Enter your no of buses"
                autocomplete="off"
                required
                pattern="[0-9]{1,}"
              />
            </div>
          </div>
          <div className="packagerSignUpFormRow">
            <div className="packagerSignUpFormLabel">Logo</div>
            <div className="packagerSignUpFormUpload">
              <input type="file" className="packagerSignUpFormUploadLogo"/>
            </div>
          </div>
          <div className="packagerSignUpFormCheckWrapper">
            <input type="checkbox" className="packagerSignUpFormCheckbox" required />
            <div className="packagerSignUpFormCheckTitle">
              By Checking this Box, You are Accepting the Terms and Conditions.
            </div>
          </div>
            <div className="packagerSignUpFormRowBtnSubmit">
              <input
                type="submit"
                value="Sign Up"
                className="packagerSignUpFormSubmit"
              />
            </div>
        </div>
      </form>
    </div>
  );
}
