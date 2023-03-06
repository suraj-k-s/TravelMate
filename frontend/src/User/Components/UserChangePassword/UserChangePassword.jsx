import "./UserChangePassword.css"
import { Link } from "react-router-dom"

export default function UserChangePassword() {
  return (
    <div className="userChangePassword">
        <div className="userChangePasswordContainer">
            <h2 className="userChangePasswordTitle">
                Change Password
            </h2>
            <div className="userChangePasswordRow">
              <div className="userChangePasswordLabel">Current Password</div>
              <div className="userChangePasswordBox">
                <input type="text" className="userChangePasswordBoxElement"/>
              </div>
            </div>
            <div className="userChangePasswordRow">
              <div className="userChangePasswordLabel">New Password</div>
              <div className="userChangePasswordBox">
                <input type="text" className="userChangePasswordBoxElement"/>
              </div>
            </div>
            <div className="userChangePasswordRow">
              <div className="userChangePasswordLabel">Re-Enter New Password</div>
              <div className="userChangePasswordBox">
                <input type="text" className="userChangePasswordBoxElement"/>
              </div>
            </div>
            <div className="userChangePasswordRow">
              <div className="userChangePasswordButtonRow">
                <Link to="/">
                <input type="submit" value="Update" className="userChangePasswordSubmitButton" />
                <input type="submit" value="Cancel" className="userChangePasswordCancelButton" />
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}