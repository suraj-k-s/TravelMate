import "./Login.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {
  const [data, setData] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  let textInput1 = useRef();
  let textInput2 = useRef();

  const onSubmit = (e) => {
    var dat = {
      email: textInput1.current.value,
      password: textInput2.current.value,
    };

    axios.post("http://localhost:4000/login/", dat).then((response) => {
      if (response.data.type === "user") {
        window.sessionStorage.setItem(
          "userId",
          response.data.data[0]["user_id"]
        );
        window.location = "/User";
      } else if (response.data.type === "packager") {
        window.sessionStorage.setItem(
          "packagerId",
          response.data.data[0]["packager_id"]
        );
          var packagerid = sessionStorage.getItem("packagerId");
          axios.get("http://localhost:4000/logincheck/"+packagerid)
          .then((response) => {
            var data = response.data.data[0];
            setData(data);
            var status = data.packager_status;
            if( status=="Pending"){
              alert("Your Request is Not Approved.. Please Try Again Later..")
            }
            else {
              window.location = "/Packager";
            }
          })
        
      } else if (response.data.type === "admin") {
        window.sessionStorage.setItem(
          "adminId",
          response.data.data[0]["admin_id"]
        );
        window.location = "/Admin";
      } else {
        alert("Invalid Credentials...!");
      }
    });
  };

  return (
    <div className="Login">
      <div className="loginLogoTitle">
        <Link to="/" className="link">
          TravelMate
        </Link>
      </div>
      <div className="loginContainer">
        <form className="loginform" onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          <input
            type="email"
            ref={textInput1}
            placeholder="Email or phone number"
            required
            className="loginforminput"
          />
          <input
            type="password"
            required
            ref={textInput2}
            placeholder="Password"
            className="loginforminput"
          />
          <button onClick={handleSubmit(onSubmit)} className="loginButton">
            Sign In
          </button>
          <span>
            New to TravelMate?{" "}
            <Link to="/signup" className="link">
              <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
