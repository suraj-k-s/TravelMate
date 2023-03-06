import "./AddDistrict.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddDistrict() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  let textInput = useRef();

  const onSubmit = (e) => {
    var dat = {
      district_name: textInput.current.value,
    };

    axios.post("http://localhost:4000/district/", dat).then((response) => {
      if(response.data.message === "Name Already Exist"){
        alert("District Already Exist")
        window.location = "/Admin/DistrictView";
      }
      else{
      alert("District Registered Successfully...!!")
      window.location = "/Admin/DistrictView";
      }
    });
  };

  return (
    <div className="addDistrict">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="addDistrictContainer">
          <h2 className="addDistrictTitle">District Registration</h2>
          <div className="addDistrictRow">
            <div className="addDistrictLabel">District Name</div>
            <div className="addDistrictBox">
              <input
                type="text"
                ref={textInput}
                className="addDistrictBoxElement"
                required
                pattern="[A-Za-z]{0,}"
              />
            </div>
          </div>
          <div className="addDistrictRow">
            <div className="addDistrictLabel"></div>
            <div className="addDistrictBox">
              <input
                type="submit"
                value="Register"
                className="addDistrictSubmitButton"
              />
              <Link to="/Admin/DistrictView" className="link">
                <input
                  type="submit"
                  value="Cancel"
                  className="addDistrictCancelButton"
                  required
                />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
