import "./PackageRegistration.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  let textInput1 = useRef();
  let textInput2 = useRef();
  let textInput3 = useRef();
  let textInput4 = useRef();

  const onSubmit = (e) => {
    var dat = {
      package_name: textInput1.current.value,
      package_noofdays: textInput2.current.value,
      package_rate: textInput3.current.value,
      package_description: textInput4.current.value,
      packager_id: sessionStorage.getItem("packagerId"),
    };

    axios.post("http://localhost:4000/packagerpackage/", dat).then((response) => {
      if(response.data.message === "Name Already Exist"){
        alert("Package Already Registered")
      }
      else{
        window.location = "/Packager/allpackagelist";
      }
    });
  };

  return (
    <div className="packageRegistration">
      <form
        className="packageRegistrationContainer"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="packageRegistrationHeader">Package Registration</h2>
        <div className="packageRegistrationFormWrapper">
          <div className="packageRegistrationFormRow">
            <div className="packageRegistrationFormLabel">Package Name</div>
            <div className="packageRegistrationFormBox">
              <input
                type="text"
                className="packageRegistrationFormInput"
                placeholder="Enter Package Name"
                ref={textInput1}
                autocomplete="off"
                required
                pattern="[A-Za-z]{0,}"
              />
            </div>
          </div>
          <div className="packageRegistrationFormRow">
            <div className="packageRegistrationFormLabel">No of Days</div>
            <div className="packageRegistrationFormBox">
              <input
                type="text"
                className="packageRegistrationFormInput"
                placeholder="Enter No of Days"
                ref={textInput2}
                autocomplete="off"
                required
                pattern="[0-9]{0,}"
              />
            </div>
          </div>
          <div className="packageRegistrationFormRow">
            <div className="packageRegistrationFormLabel">Rate</div>
            <div className="packageRegistrationFormBox">
              <input
                type="text"
                className="packageRegistrationFormInput"
                placeholder="Enter Package Rate"
                ref={textInput3}
                autocomplete="off"
                required
                pattern="[0-9]{0,}"
              />
            </div>
          </div>
          <div className="packageRegistrationFormRow">
            <div className="packageRegistrationFormLabel">Description</div>
            <div className="packageRegistrationFormBox">
              <input
                type="textarea"
                className="packageRegistrationFormInput"
                placeholder="Enter Package Description"
                ref={textInput4}
                autocomplete="off"
                required
              />
            </div>
          </div>
          <div className="packageRegistrationFormRow">
            <div className="packageRegistrationFormLabel">Images</div>
            <div className="packageRegistrationFormUpload">
              <input
                type="file"
                id="files"
                className="packageRegistrationFormUploadLogo"
                multiple
              />
            </div>
          </div>
            <div className="packageRegistrationFormRowBtnSubmit">
              <input
                type="submit"
                value="Register"
                className="packageRegistrationFormSubmit"
              />
            </div>
        </div>
      </form>
    </div>
  );
}
