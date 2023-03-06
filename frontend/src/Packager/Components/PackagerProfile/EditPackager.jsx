import "./EditPackager.css";
import Img from "../../../Assets/oneness.jpg";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export default function EditPackager() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  var packagerid = sessionStorage.getItem("packagerId");

  const [data, setData] = useState([]);

  let textInput1 = useRef();
  let textInput2 = useRef();
  let textInput3 = useRef();
  let textInput4 = useRef();

  const onSubmit = (e) => {
    var dat = {
      packager_name: textInput1.current.value,
      packager_contact: textInput2.current.value,
      packager_email: textInput3.current.value,
      packager_instagram: textInput4.current.value,
    };
    axios
      .put(`http://localhost:4000/packagerprofile`, dat)
      .then((response) => {});
    alert("Updated Successfully");
    window.location.reload();
  };

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/packagerprofile/` + packagerid)
      .then((response) => {
        var data = response.data.data[0];
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData2 = () => {
  //   axios.get("http://localhost:4000/district").then((response) => {
  //     var data2 = response.data.data;
  //     setData2(data2);
  //   });
  // };
  // useEffect(() => {
  //   fetchData2();
  // }, []);

  // const fetchData3 = (id) => {
  //   axios.get("http://localhost:4000/location/" + id).then((response) => {
  //     var data3 = response.data.data;
  //     setData3(data3);
  //   });
  // };

  // const packagerdChange = (e) => {
  //   setPackagerd(e.target.value);
  // };
  // const packagerlChange = (e) => {
  //   setPackagerl(e.target.value);
  // };

  return (
    <div className="editPackager">
      <div className="editPackagerUpdate">
        <form
          className="editPackagerUpdateForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="editPackagerUpdateLeft">
            <div className="packagerUpdateItem">
              <label>Packager Name</label>
              <input
                type="text"
                defaultValue={data.packager_name}
                className="editPackagerUpdateInput"
                ref={textInput1}
              />
            </div>
            <div className="packagerUpdateItem">
              <label>District</label>
              <input
                type="text"
                defaultValue={data.district_name}
                className="editPackagerUpdateInput"
                readOnly
              />
            </div>
            <div className="packagerUpdateItem">
              <label>Location</label>
              <input
                type="text"
                defaultValue={data.location_name}
                className="editPackagerUpdateInput"
                readOnly
              />
            </div>
            <div className="packagerUpdateItem">
              <label>Contact</label>
              <input
                type="text"
                defaultValue={data.packager_contact}
                className="editPackagerUpdateInput"
                ref={textInput2}
              />
            </div>
            <div className="packagerUpdateItem">
              <label>Email</label>
              <input
                type="text"
                defaultValue={data.packager_email}
                className="editPackagerUpdateInput"
                ref={textInput3}
              />
            </div>
            <div className="packagerUpdateItem">
              <label>Instagram</label>
              <input
                type="text"
                defaultValue={data.packager_instagram}
                className="editPackagerUpdateInput"
                ref={textInput4}
              />
            </div>
          </div>
          <div className="editPackagerUpdateRight">
            <div className="editPackagerUpdateUpload">
              {/* <img src={Img} alt="" className="editPackagerUpdateImg" /> */}
              <label htmlFor="file">
                <img
                  src={data.packager_logo}
                  alt=""
                  className="editPackagerUpdateImg"
                />
                {/* <Upload className="editPackagerUpdateIcon" /> */}
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="editPackagerUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
