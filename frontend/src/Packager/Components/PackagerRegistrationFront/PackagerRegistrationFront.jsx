import "./PackagerRegistrationFront.css";
import { Link } from "react-router-dom";

export default function PackagerRegistrationFront() {
  return (
    <div className="PackagerRegistrationFront">
      <div className="PackagerRegistrationFrontContainer">
          <div className="PackagerRegistrationFrontPackageContainer">
          <Link to="/Packager/packageregistration" className="link">
              <div className="PackagerRegistrationFrontPackageTitle">
                  Package Registration
              </div>
              <div className="PackagerRegistrationFrontPackageDescription">
                  <p>Showcase Your Packages to The Users</p>
              </div>
              <div className="PackagerRegistrationFrontPackageReqContainer">
                  <div className="PackagerRegistrationFrontPackageReqTitle">
                      Required Details
                  </div>
                  <div className="PackagerRegistrationFrontPackageReqItems">
                      <ul className="PackagerRegistrationFrontPackageReqItemsUL">
                            <li className="PackagerRegistrationFrontPackageReqItemsLI">Package Name</li>
                            <li className="PackagerRegistrationFrontPackageReqItemsLI">No of Days</li>
                            <li className="PackagerRegistrationFrontPackageReqItemsLI">Rate</li>
                            <li className="PackagerRegistrationFrontPackageReqItemsLI">Description</li>
                            <li className="PackagerRegistrationFrontPackageReqItemsLI">Images</li>
                      </ul>
                  </div>
              </div>
              </Link>
          </div>
          
          <div className="PackagerRegistrationFrontBusContainer">
          <Link to="/Packager/busregistration" className="link">
              <div className="PackagerRegistrationFrontBusTitle">
                  Bus Registration
              </div>
              <div className="PackagerRegistrationFrontBusDescription">
                  <p>Showcase Your Travelling Features to The Users</p>
              </div>
              <div className="PackagerRegistrationFrontBusReqContainer">
                  <div className="PackagerRegistrationFrontBusReqTitle">
                      Required Details
                  </div>
                  <div className="PackagerRegistrationFrontBusReqItems">
                      <ul className="PackagerRegistrationFrontBusReqItemsUL">
                            <li className="PackagerRegistrationFrontBusReqItemsLI">Bus Name</li>
                            <li className="PackagerRegistrationFrontBusReqItemsLI">Features</li>
                            <li className="PackagerRegistrationFrontBusReqItemsLI">Capacity</li>
                            <li className="PackagerRegistrationFrontBusReqItemsLI">Bus Model</li>
                            <li className="PackagerRegistrationFrontBusReqItemsLI">Manufacturing Year</li>
                      </ul>
                  </div>
              </div>
              </Link>
          </div>
      </div>
        </div>
  )
}
