import "./AddLocation.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddLocation() {
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState([]);

  let textInput1 = useRef();
  let textInput2 = useRef();
  let textInput3 = useRef();

  const onSubmit = (e) => {
    var dat = {
      location_name: textInput1.current.value,
      district_id: textInput2.current.value,
      location_pincode: textInput3.current.value,
    };

    axios.post("http://localhost:4000/location/", dat).then((response) => {
      if(response.data.message === "Name Already Exist"){
        alert("Location Already Exist")
      }
      else if(response.data.message === "Pincode Already Exist"){
        alert("Pincode Already Registered")
      }
      else{
      window.location = "/Admin/LocationView";
      alert("Location Registered Successfully...!!")
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

  return (
    <div className="addLocation">
      <form className="addLocationContainer" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="addLocationTitle">Location Registration</h2>
        <div className="addLocationRow">
          <div className="addLocationLabel">Location Name</div>
          <div className="addLocationBox">
            <input
              type="text"
              ref={textInput1}
              className="addLocationBoxElement"
              required
              pattern="[A-Za-z]{0,}"
            />
          </div>
        </div>
        <div className="addLocationRow">
          <div className="addLocationLabel">District Name</div>
          <div className="addLocationBox">
            <select
              name="addLocationDistrict"
              ref={textInput2}
              className="addLocationBoxSelectElement"
              required
            >
              <option value="default">---Select District---</option>
              {data.map((result, key) => (
                <option key={key} value={result.district_id}>
                  {result.district_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="addLocationRow">
          <div className="addLocationLabel">Pincode</div>
          <div className="addLocationBox">
            <input
              type="text"
              ref={textInput3}
              className="addLocationBoxElement"
              required
              pattern="[0-9]{6}"
            />
          </div>
        </div>
        <div className="addLocationRow">
          <div className="addLocationLabel"></div>
          <div className="addLocationBox">
              <input
                type="submit"
                // onClick={() => {
                //   saveData();
                // }}
                value="Register"
                className="addLocationSubmitButton"
              />
              <Link to="/Admin/locationview" className="link">
              <input
                type="submit"
                value="Cancel"
                className="addLocationCancelButton"
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
