import "./UserSignUp.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {
  // const [data, setData] = useState([]);
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
  let textInput5 = useRef();

  const onSubmit = (e) => {
    var dat = {
      user_name: textInput1.current.value,
      user_email: textInput2.current.value,
      user_contact: textInput3.current.value,
      user_password: textInput4.current.value,
      user_profession: textInput5.current.value,
    };

    axios.post("http://localhost:4000/userregistration/", dat).then((response) => {
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

  return (
    <div className="userSignUp">
      <div className="userSignUpLogoTitle">
        <Link to="/" className="link">
          TravelMate
        </Link>
      </div>
      <form className="userSignUpContainer" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="userSignUpHeader">User Sign Up</h2>
        <div className="userSignUpFormWrapper">
          <div className="userSignUpFormRow">
            <div className="userSignUpFormLabel">Name</div>
            <div className="userSignUpFormBox">
              <input
                type="text"
                ref={textInput1}
                className="userSignUpFormInput"
                placeholder="Enter your name"
                autocomplete="off"
                required
                pattern="[A-Za-z ]{0,}"
              />
            </div>
          </div>
          <div className="userSignUpFormRow">
            <div className="userSignUpFormLabel">E-Mail</div>
            <div className="userSignUpFormBox">
              <input
                type="text"
                ref={textInput2}
                className="userSignUpFormInput"
                placeholder="Enter your email address"
                autocomplete="off"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{0,}$"
              />
            </div>
          </div>
          <div className="userSignUpFormRow">
            <div className="userSignUpFormLabel">Contact</div>
            <div className="userSignUpFormBox">
              <input
                type="text"
                ref={textInput3}
                className="userSignUpFormInput"
                placeholder="Enter your contact number"
                autocomplete="off"
                required
                pattern="[0-9]{10}"
              />
            </div>
          </div>
          <div className="userSignUpFormRow">
            <div className="userSignUpFormLabel">Password</div>
            <div className="userSignUpFormBox">
              <input
                type="password"
                ref={textInput4}
                className="userSignUpFormInput"
                placeholder="Enter your password"
                required
                pattern="[A-Za-z0-9]{0,}"
              />
            </div>
          </div>
          <div className="userSignUpFormRow">
            <div className="userSignUpFormLabel">Profession</div>
            <div className="userSignUpFormBox">
              <input
                type="text"
                ref={textInput5}
                className="userSignUpFormInput"
                placeholder="Enter your profession"
                required
                pattern="[A-Za-z ]{0,}"
              />
            </div>
          </div>
            <div className="userSignUpFormRowBtnSubmit">
              <input
                type="submit"
                value="Sign Up"
                className="userSignUpFormSubmit"
              />
            </div>
        </div>
      </form>
    </div>
  );
}
