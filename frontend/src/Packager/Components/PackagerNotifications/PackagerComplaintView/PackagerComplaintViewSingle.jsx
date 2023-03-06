import "./PackagerComplaintViewSingle.css";
import {
  CalendarToday,
  GppMaybe,
  PermIdentity,
  Loyalty,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";


export default function PackagerComplaintViewSingle() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();


  const [data, setData] = useState([]);

  const { complaintId } = useParams();

let textInput1 = useRef();
let textInput2 = useRef();

  const onSubmit = (e) => {
    var dat = {
      complaint_reply: textInput1.current.value,
      complaint_status: textInput2.current.value,
    };
    axios
      .put(`http://localhost:4000/complaintreplyupdate/${complaintId}`, dat)
      .then((response) => {
        alert("Updated Successfully");
        window.location = "/Packager/PackagerComplaintView";
      });
  };


  const fetchData = () => {
    axios
      .get(`http://localhost:4000/packagernotificationcomplaintview/${complaintId}`)
      .then((response) => {
        var data = response.data.data[0];
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="PackagerComplaintViewSingle">
      <div className="PackagerComplaintViewSingleContainer">
        <div className="PackagerComplaintViewSingleTitleContainer">
          <h2 className="PackagerComplaintViewSingleTitle">
            Complaint Details
          </h2>
        </div>
        <div className="PackagerComplaintViewSingleComplaintContainer">
          <div className="PackagerComplaintViewSingleComplaintTop">
            <div className="PackagerComplaintViewSingleComplaintInfoTitle">
              <PermIdentity className="PackagerComplaintViewSingleComplaintInfoLogo" />
              <div className="PackagerComplaintViewSingleComplaintInfo">
              {data.user_name}
              </div>
            </div>
            <div className="PackagerComplaintViewSingleComplaintInfoTitle">
              <Loyalty className="PackagerComplaintViewSingleComplaintInfoLogo" />
              <div className="PackagerComplaintViewSingleComplaintInfo">
              {data.package_name}
              </div>
            </div>
            <div className="PackagerComplaintViewSingleComplaintInfoTitle">
              <CalendarToday className="PackagerComplaintViewSingleComplaintInfoLogo" />
              <div className="PackagerComplaintViewSingleComplaintInfo">
              {data.complaint_date}
              </div>
            </div>
            <div className="PackagerComplaintViewSingleComplaintInfoTitle">
              <GppMaybe className="PackagerComplaintViewSingleComplaintInfoLogo" />
              <div className="PackagerComplaintViewSingleComplaintInfo">
              {data.complaint_status}
              </div>
            </div>
          </div>
          <form className="PackagerComplaintViewSingleComplaintBottom" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="PackagerComplaintViewSingleComplaintBottomTitile">
              Complaint Content
            </h4>
            <div className="PackagerComplaintViewSingleComplaintBottomContent">
            {data.complaint_content}
            </div>
            <h4 className="PackagerComplaintViewSingleComplaintBottomTitile">
              Complaint Reply
            </h4>
            <textarea
              name="packagercomplaintreplyupdate"
              className="packagercomplaintreplyupdatetextarea"
              placeholder="Enter Complaint Reply"
              defaultValue={data.complaint_reply}
              ref={textInput1}
              
            ></textarea>
            <h4 className="PackagerComplaintViewSingleComplaintBottomTitile">
              Complaint Status
            </h4>
            <div className="PackagerComplaintViewSingleComplaintBottomUpdate">
              <select
                name="updatecomplaintstatus"
                className="packagercomplaintstatusupdate"
                ref={textInput2}
              >
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
              </select>
                <input
                  type="submit"
                  value="Update"
                  className="packagercomplaintstatusupdatebutton"
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
