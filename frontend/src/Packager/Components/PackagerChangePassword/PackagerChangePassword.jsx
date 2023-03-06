import "./PackagerChangePassword.css"
import { Link } from "react-router-dom"

export default function PackagerChangePassword() {
  return (
    <div className="packagerChangePassword">
        <div className="packagerChangePasswordContainer">
            <h2 className="packagerChangePasswordTitle">
                Change Password
            </h2>
            <div className="packagerChangePasswordRow">
              <div className="packagerChangePasswordLabel">Current Password</div>
              <div className="packagerChangePasswordBox">
                <input type="text" className="packagerChangePasswordBoxElement"/>
              </div>
            </div>
            <div className="packagerChangePasswordRow">
              <div className="packagerChangePasswordLabel">New Password</div>
              <div className="packagerChangePasswordBox">
                <input type="text" className="packagerChangePasswordBoxElement"/>
              </div>
            </div>
            <div className="packagerChangePasswordRow">
              <div className="packagerChangePasswordLabel">Re-Enter New Password</div>
              <div className="packagerChangePasswordBox">
                <input type="text" className="packagerChangePasswordBoxElement"/>
              </div>
            </div>
            <div className="packagerChangePasswordRow">
              <div className="packagerChangePasswordButtonRow">
                <Link to="/">
                <input type="submit" value="Update" className="packagerChangePasswordSubmitButton" />
                <input type="submit" value="Cancel" className="packagerChangePasswordCancelButton" />
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}