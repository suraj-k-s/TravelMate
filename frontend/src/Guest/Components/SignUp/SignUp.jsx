import "./SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup">
         <div className="signupLogoTitle">
        <Link to="/" className="link">
          TravelMate
        </Link>
      </div>
      <div className="signupContainer">
          <div className="signupPackagerContainer">
          <Link to="/packagersignup" className="link">
              <div className="signupPackagerTitle">
                  Packager Registration
              </div>
              <div className="signupPackagerDescription">
                  <p>Join the TravelMate Family</p>
              </div>
              <div className="signupPackagerReqContainer">
                  <div className="signupPackagerReqTitle">
                      Required Details
                  </div>
                  <div className="signupPackagerReqItems">
                      <ul className="signupPackagerReqItemsUL">
                            <li className="signupPackagerReqItemsLI">Contact</li>
                            <li className="signupPackagerReqItemsLI">E-mail</li>
                            <li className="signupPackagerReqItemsLI">Location</li>
                            <li className="signupPackagerReqItemsLI">Logo</li>
                            <li className="signupPackagerReqItemsLI">Images</li>
                      </ul>
                  </div>
              </div>
              </Link>
          </div>
          
          <div className="signupUserContainer">
          <Link to="/usersignup" className="link">
              <div className="signupUserTitle">
                  User Registration
              </div>
              <div className="signupUserDescription">
                  <p>Join the TravelMate Family and Book Your Holidays With The Best Travelling Partners in Best Offers.</p>
              </div>
              <div className="signupUserReqContainer">
                  <div className="signupUserReqTitle">
                      Required Details
                  </div>
                  <div className="signupUserReqItems">
                      <ul className="signupUserReqItemsUL">
                            <li className="signupUserReqItemsLI">Name</li>
                            <li className="signupUserReqItemsLI">E-mail</li>
                            <li className="signupUserReqItemsLI">Contact</li>
                      </ul>
                  </div>
              </div>
              </Link>
          </div>
      </div>
        </div>
  )
}
