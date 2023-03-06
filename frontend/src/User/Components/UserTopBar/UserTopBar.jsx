import "./UserTopBar.css";
import { BarChart,Visibility ,NotificationsNone,AppRegistration, ManageAccounts } from "@mui/icons-material";
import Img from "../../../Assets/oneness.jpg";
import { Link } from "react-router-dom";

export default function UserTobBar() {
  return (
    <div className="userTobBar">
      <div className="userTobBarWrapper">
        <div className="userTobBarLeft">
        <Link to="/User" className="link">
          <span className="userTopBarlogo">TravelMate</span>
          </Link>
          <div className="userTobBarLeftcaption">We Plan..You Pack..</div>
        </div>
        <div className="userTobBarRight">
          <div className="userTobBarRightItemContainer">
            <div className="userTobBarRightText">
            <Link to="/User/usermybookings" className="link">
                My Bookings |
                </Link>
            </div>
          </div>
          <div className="userTopbarDropdown">
          <div className="userTobBarRightIcon">
                <ManageAccounts/> 
            </div>
            <div className="userTopbarDropdown-content">
            <Link to="/userchangepassword" className="link">
              Change Password
              </Link>
              <Link to="/" className="link">
              LogOut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
