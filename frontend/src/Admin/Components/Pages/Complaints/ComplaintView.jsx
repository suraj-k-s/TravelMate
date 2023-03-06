import "./ComplaintView.css"
import { CalendarToday, DirectionsBus, PermIdentity } from "@mui/icons-material";
import { FcProcess } from "react-icons/fc";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ComplaintView() {

    const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchData = () =>{
    axios
    .get(
      `http://localhost:4000/admincomplaintinfo/${id}`
    )
    .then((response) => {
      var data = response.data.data[0];
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);


  return (
    <div className="singleComplaintView">
        <div className="singleComplaintViewContainer">
            <div className="singleComplaintViewTitleContainer">
                <h2 className="singleComplaintViewTitle">Complaint Details</h2>
            </div>
            <div className="singleComplaintViewComplaintContainer">
                <div className="singleComplaintViewComplaintTop">
                    <div className="singleComplaintViewComplaintInfoTitle">
                        <PermIdentity className="singleComplaintViewComplaintInfoLogo"/>
                        <div className="singleComplaintViewComplaintInfo">{data.user_name}</div>
                    </div>
                    <div className="singleComplaintViewComplaintInfoTitle">
                        <DirectionsBus className="singleComplaintViewComplaintInfoLogo"/>
                        <div className="singleComplaintViewComplaintInfo">{data.packager_name}</div>
                    </div>
                    <div className="singleComplaintViewComplaintInfoTitle">
                        <CalendarToday className="singleComplaintViewComplaintInfoLogo"/>
                        <div className="singleComplaintViewComplaintInfo">{data.complaint_date}</div>
                    </div>
                    <div className="singleComplaintViewComplaintInfoTitle">
                        <FcProcess className="singleComplaintViewComplaintInfoLogo"/>
                        <div className="singleComplaintViewComplaintInfo">{data.complaint_status}</div>
                    </div>
                </div>
                <div className="singleComplaintViewComplaintBottom">
                    <h4 className="singleComplaintViewComplaintBottomTitile">
                        Complaint Content
                    </h4>
                    <div className="singleComplaintViewComplaintBottomContent">
                    {data.complaint_content}
                    </div>
                    <h4 className="singleComplaintViewComplaintBottomTitile">
                        Complaint Reply
                    </h4>
                    <div className="singleComplaintViewComplaintBottomContent">
                    {data.complaint_reply}
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}
