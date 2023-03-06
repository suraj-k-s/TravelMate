import "./AddBusModel.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddBusModel() {
  // const [busmodel, setBusmodel] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  let textInput = useRef();
  // let textInput1 = useRef();

  const onSubmit = (e) => {
    var dat = {
      busmodel_name: textInput.current.value,
      // busmodel_features: textInput1.current.value,
    };

    axios.post("http://localhost:4000/busmodel/", dat).then((response) => {
      if(response.data.message === "Name Already Exist"){
        alert("Bus Model Already Exist")
        window.location = "/Admin/BusModelView";
      }
      else{
      alert("Bus Model Registered Successfully...!!")
      window.location = "/Admin/BusModelView";
      }
    });
  };

  return (
    <div className="addBusModel">
      <form className="addBusModelContainer" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="addBusModelTitle">Bus Model Registration</h2>
        <div className="addBusModelRow">
          <div className="addBusModelLabel">Bus Model Name</div>
          <div className="addBusModelBox">
            <input
              type="text"
              ref={textInput}
              className="addBusModelBoxElement"
              required
              pattern="[A-Za-z ]{0,}"
            />
          </div>
        </div>
        {/* <div className="addBusModelRow">
          <div className="addBusModelLabel">Bus Model Features</div>
          <div className="addBusModelBox">
            <input
              type="text"
              ref={textInput1}
              className="addBusModelBoxElement"
              required
              pattern="[A-Za-z]{0,}"
            />
          </div>
        </div> */}
        <div className="addBusModelRow">
          <div className="addBusModelLabel"></div>
          <div className="addBusModelBox">
              <input
                type="submit"
                // onClick={() => {
                //   saveData();
                // }}
                value="Register"
                className="addBusModelSubmitButton"
              />
              <Link to="/Admin/busmodelview" className="link">
              <input
                type="submit"
                value="Cancel"
                className="addBusModelCancelButton"
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
