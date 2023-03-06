import "./BusEdit.css";
import {
  Description,
  CurrencyRupee,
  HourglassBottom,
  CalendarMonth,
} from "@mui/icons-material";
import Img1 from "../../../../Assets/pic56.jpg";
import axios from "axios";
import { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { height } from "@mui/system";

export default function BusProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [busm, setBusm] = useState([]);
  const [busf, setBusf] = useState([]);

  const { busId } = useParams();

  let textInput1 = useRef();

  const onSubmit = (e) => {
    var dat = {
      bus_name: textInput1.current.value,
      busmodel_id: busm,
      bus_features: busf,
    };

    axios
      .put(`http://localhost:4000/packagerbus/${busId}`, dat)
      .then((response) => {
        alert("Updated Successfully");
        window.location = "/Packager/allbuslist";
      });
  };

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/packagerbusview/${busId}`)
      .then((response) => {
        var data = response.data.data[0];
        setData(data);
        setBusm(data.busmodel_id);
        setBusf(data.bus_features);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData2 = () => {
    axios.get("http://localhost:4000/busmodel").then((response) => {
      var data2 = response.data.data;
      setData2(data2);
    });
  };
  useEffect(() => {
    fetchData2();
  }, []);

  const busmChange = (e) => {
    setBusm(e.target.value);
  };
  const busfChange = (e) => {
    setBusf(e.target.value);
  };

  return (
    <div className="busedit">
      <div className="busEditTopTitleWrapper">
        <div className="busEditTopTitleDetails">
          <div className="busEditTopTitleItem">Bus Details</div>
        </div>
        <div className="busEditTopTitleEdit">
          <div className="busEditTopTitleItem">Edit Bus</div>
        </div>
      </div>
      <div className="busEditcontainer">
        <div className="busEditBusShow">
          <div className="busEditBusShowTop">
            <span className="busEditBusShowBusName">{data.bus_name}</span>
          </div>
          <div className="busEditBusShowBottom">
            <span className="busEditBusShowTitle">Bus Info</span>
            <div className="busEditBusShowInfo">
              <HourglassBottom className="busshowIcon" />
              <span className="busEditBusShowInfoTitle">
                Capacity: {data.bus_capacity}
              </span>
            </div>
            <div className="busEditBusShowInfo">
              <Description className="busshowIcon" />
              <span className="busEditBusShowInfoTitle">
                Model: {data.busmodel_name}
              </span>
            </div>
            <div className="busEditBusShowInfo">
              <CurrencyRupee className="busshowIcon" />
              <span className="busEditBusShowInfoTitle">
                Features: {data.bus_features}
              </span>
            </div>
            <div className="busEditBusShowInfo">
              <CalendarMonth className="busshowIcon" />
              <span className="busEditBusShowInfoTitle">
                Year: {data.bus_year}
              </span>
            </div>
            <div className="busEditBusShowInfoWrapper">
              <div className="busEditBusShowInfo">
                <img src={data.bus_image} alt="" style={{width:"120px",height:"120px"}} className="busEditBusShowImg" />
              </div>
            </div>
          </div>
        </div>

        <div className="editbusfullconatiner">
          <div className="editBus">
            <div className="editBusUpdate">
              <form className="editBusUpdateForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="editBusUpdateLeft">
                  <div className="busrUpdateItem">
                    <label>Bus Name</label>
                    <input
                      type="text"
                      className="editBusUpdateInput"
                      defaultValue={data.bus_name}
                      ref={textInput1}
                    />
                  </div>
                  <div className="busrUpdateItem">
                    <label>Model</label>
                    <div className="editBusModelBox">
                      <select
                        value={busm}
                        name="addBusModel"
                        onChange={busmChange}
                        className="editBusModelBoxSelectElement"
                      >
                        <option value="default">---Select Bus Model---</option>
                        {data2.map((result, key) => (
                          <option key={key} value={result.busmodel_id}>
                            {result.busmodel_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="busrUpdateItem">
                    <label>Feature</label>
                    <div className="editBusFeaturesBox">
                      <select
                        value={busf}
                        name="addBusModel"
                        onChange={busfChange}
                        className="editBusFeaturesBoxSelectElement"
                      >
                        <option value="default">
                          ---Select Bus Features---
                        </option>
                        <option value="AC Pushback">AC Pushback</option>
                        <option value="Non AC Pushback">Non AC Pushback</option>
                        <option value="Non AC Non Pushback">
                          Non AC Non Pushback
                        </option>
                      </select>
                    </div>
                  </div>
                    <button className="editBusUpdateButton">Update</button>
                </div>
                <div className="editBusUpdateRight">
                  <div className="editBusUpdateUpload">
                    <label htmlFor="file">
                      <img src={data.bus_image} alt="" className="editBusUpdateImg" />
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
  )
}
