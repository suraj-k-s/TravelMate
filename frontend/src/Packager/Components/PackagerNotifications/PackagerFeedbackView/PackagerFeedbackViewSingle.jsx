import "./PackagerFeedbackViewSingle.css"
import { CalendarToday, PermIdentity,Loyalty } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PackagerFeedbackViewSingle() {

    const [data, setData] = useState([]);

  const { feedbackId } = useParams();

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/packagernotificationfeedbackview/${feedbackId}`)
      .then((response) => {
        var data = response.data.data[0];
        setData(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="PackagerFeedbackViewSingle">
        <div className="PackagerFeedbackViewSingleContainer">
            <div className="PackagerFeedbackViewSingleTitleContainer">
                <h2 className="PackagerFeedbackViewSingleTitle">Feedback Details</h2>
            </div>
            <div className="PackagerFeedbackViewSingleFeedbackContainer">
                <div className="PackagerFeedbackViewSingleFeedbackTop">
                    <div className="PackagerFeedbackViewSingleFeedbackInfoTitle">
                        <PermIdentity className="PackagerFeedbackViewSingleFeedbackInfoLogo"/>
                        <div className="PackagerFeedbackViewSingleFeedbackInfo">{data.user_name}</div>
                    </div>
                    <div className="PackagerFeedbackViewSingleFeedbackInfoTitle">
                        <Loyalty className="PackagerFeedbackViewSingleFeedbackInfoLogo"/>
                        <div className="PackagerFeedbackViewSingleFeedbackInfo">{data.package_name}</div>
                    </div>
                    <div className="PackagerFeedbackViewSingleFeedbackInfoTitle">
                        <CalendarToday className="PackagerFeedbackViewSingleFeedbackInfoLogo"/>
                        <div className="PackagerFeedbackViewSingleFeedbackInfo">{data.feedback_date}</div>
                    </div>
                </div>
                <div className="PackagerFeedbackViewSingleFeedbackBottom">
                    <h4 className="PackagerFeedbackViewSingleFeedbackBottomTitile">
                        Feedback Content
                    </h4>
                    <div className="PackagerFeedbackViewSingleFeedbackBottomContent">
                    {data.feedback_content}
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}
