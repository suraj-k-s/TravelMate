import React, { Component } from "react";
import "./BusRegistration.css";
import axios from "axios";

export default class BusRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      bus_name: "",
      bus_capacity: "",
      addBusModel: "",
      addBusFeature: "",
      bus_year: "",
      bus_image: "",
    };
  }
  
  inputValue = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputFileValue = (e) => {
    this.setState({ bus_image: [e.target.files[0]] });
  };


  onSubmit = (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("bus_name", this.state.bus_name[0]);
    formData.append("bus_capacity", this.state.bus_capacity[0]);
    formData.append("busmodel_id", this.state.addBusModel[0]);
    formData.append("bus_features", this.state.addBusFeature[0]);
    formData.append("bus_year", this.state.bus_year[0]);
    formData.append("bus_image", this.state.bus_image[0]);
    formData.append("packager_id", sessionStorage.getItem("packagerId"));

    axios
      .post("http://localhost:4000/packagerbus", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      // window.location = "/Packager/allbuslist";
  };

  componentDidMount() {
    axios.get("http://localhost:4000/busmodel").then((response) => {
      var data = response.data.data;
      this.setState({ data: data });
      //console.log(data);
    });
  }


  render() {
    console.log(this.state.bus_image);
    return (
      <div className="busRegistration">
        <form
          method="post"
          className="busRegistrationContainer"
          onSubmit={this.onSubmit}
        >
          <h2 className="busRegistrationHeader">Bus Registration</h2>
          <div className="busRegistrationFormWrapper">
            <div className="busRegistrationFormRow">
              <div className="busRegistrationFormLabel">Bus Name</div>
              <div className="busRegistrationFormBox">
                <input
                  type="text"
                  className="busRegistrationFormInput"
                  placeholder="Enter Bus Name"
                  autoComplete="off"
                  
                  onChange={this.inputValue}
                  pattern="[A-Za-z0-9 .]{0,}"
                  name="bus_name"
                />
              </div>
            </div>
            <div className="busRegistrationFormRow">
              <div className="busRegistrationFormLabel">Bus Capacity</div>
              <div className="busRegistrationFormBox">
                <input
                  type="text"
                  className="busRegistrationFormInput"
                  placeholder="Enter Bus Capacity"
                  autoComplete="off"
                  onChange={this.inputValue}
                  name="bus_capacity"
                />
              </div>
            </div>
            <div className="busRegistrationFormRow">
              <div className="busRegistrationFormLabel">Bus Model</div>
              <div className="addBusModelBox">
                <select
                  name="addBusModel"
                  onChange={this.inputValue}
                  className="addBusModelBoxSelectElement"
                >
                  <option value="default">---Select Bus Model---</option>
                  {this.state.data.map((result, key) => (
                    <option key={key} value={result.busmodel_id}>
                      {result.busmodel_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="busRegistrationFormRow">
              <div className="busRegistrationFormLabel">Bus Features</div>
              <div className="addBusFeaturesBox">
                <select
                  name="addBusFeature"
                  onChange={this.inputValue}
                  className="addBusFeaturesBoxSelectElement"
                >
                  <option value="default">---Select---</option>
                  <option value="AC Pushback">AC Pushback</option>
                  <option value="Non AC Pushback">Non AC Pushback</option>
                  <option value="Non AC Non Pushback">
                    Non AC Non Pushback
                  </option>
                </select>
              </div>
            </div>
            <div className="busRegistrationFormRow">
              <div className="busRegistrationFormLabel">Year of Making</div>
              <div className="busRegistrationFormBox">
                <input
                  type="textarea"
                  name="bus_year"
                  onChange={this.inputValue}
                  className="busRegistrationFormInput"
                  placeholder="Enter Year of Making"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="busRegistrationFormRow">
              <div className="busRegistrationFormLabel">Images</div>
              <div className="busRegistrationFormUpload">
                <input
                  type="file"
                  onChange={this.inputFileValue}
                  name="bus_image"
                />
              </div>
            </div>
            <div className="busRegistrationFormRowBtnSubmit">
              <input
                type="submit"
                value="Register"
                className="busRegistrationFormSubmit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
