import "./PackageEdit.css";
import {
  Description,
  CurrencyRupee,
  HourglassBottom,
} from "@mui/icons-material";
import Img1 from "../../../../Assets/pic8.jpg";
import Img2 from "../../../../Assets/pic6.jpg";
import Img3 from "../../../../Assets/pic7.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function PackageProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState([]);

  const { packageId } = useParams();

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
    };

    axios
      .put(`http://localhost:4000/packagerpackage/${packageId}`, dat)
      .then((response) => {
        alert("Updated Successfully");
        window.location = "/Packager/allpackagelist";
      });
  };

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/packagerpackageview/${packageId}`)
      .then((response) => {
        var data = response.data.data[0];
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="packageedit">
      <div className="packageEditTopTitleWrapper">
        <div className="packageEditTopTitleDetails">
          <div className="packageEditTopTitleItem">Package Details</div>
        </div>
        <div className="packageEditTopTitleEdit">
          <div className="packageEditTopTitleItem">Edit Package</div>
        </div>
      </div>
      <div className="packageEditcontainer">
        <div className="packageEditPackageShow">
          <div className="packageEditPackageShowTop">
            <span className="packageEditPackageShowPackageName">
              {data.package_name}
            </span>
          </div>
          <div className="packageEditPackageShowBottom">
            <span className="packageEditPackageShowTitle">Package Info</span>
            <div className="packageEditPackageShowInfo">
              <HourglassBottom className="packageshowIcon" />
              <span className="packageEditPackageShowInfoTitle">
                No of Days: {data.package_noofdays}
              </span>
            </div>
            <div className="packageEditPackageShowInfo">
              <CurrencyRupee className="packageshowIcon" />
              <span className="packageEditPackageShowInfoTitle">
                Rate: {data.package_rate}
              </span>
            </div>
            <div className="packageEditPackageShowInfo">
              <Description className="packageshowIcon" />
              <span className="packageEditPackageShowInfoTitle">
                {data.package_description}
              </span>
            </div>
            <div className="packageEditPackageShowInfo">
              <img src={Img1} alt="" className="packageEditPackageShowImg" />
              <img src={Img2} alt="" className="packageEditPackageShowImg" />
              <img src={Img3} alt="" className="packageEditPackageShowImg" />
            </div>
          </div>
        </div>

        <div className="editpackagefullconatiner">
          <div className="editPackage">
            <div className="editPackageUpdate">
              <form className="editPackageUpdateForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="editPackageUpdateLeft">
                  <div className="packagerUpdateItem">
                    <label>Package Name</label>
                    <input
                      defaultValue={data.package_name}
                      type="text"
                      className="editPackageUpdateInput"
                      ref={textInput1}
                    />
                  </div>
                  <div className="packagerUpdateItem">
                    <label>No of Days</label>
                    <input
                      defaultValue={data.package_noofdays}
                      type="text"
                      className="editPackageUpdateInput"
                      ref={textInput2}
                    />
                  </div>
                  <div className="packagerUpdateItem">
                    <label>Rate</label>
                    <input
                      defaultValue={data.package_rate}
                      type="text"
                      className="editPackageUpdateInput"
                      ref={textInput3}
                    />
                  </div>
                  <div className="packagerUpdateItem">
                    <label>Description</label>
                    <textarea
                    defaultValue={data.package_description}
                      className="editPackageUpdateDescriptionInput"
                      ref={textInput4}
                    ></textarea>
                  </div>
                    <button className="editPackageUpdateButton">Update</button>
                </div>
                <div className="editPackageUpdateRight">
                  <div className="editPackageUpdateUpload">
                    <label htmlFor="file">
                      <img src={Img1} alt="" className="editPackageUpdateImg" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className="editPackageUpdateUpload">
                    <label htmlFor="file">
                      <img src={Img2} alt="" className="editPackageUpdateImg" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className="editPackageUpdateUpload">
                    <label htmlFor="file">
                      <img src={Img3} alt="" className="editPackageUpdateImg" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
