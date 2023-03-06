import "./GuestTopbar.css"
import { Link } from "react-router-dom"

export default function GuestTopbar() {
  return (
    <div className="guestTopBar">
      <div className="guestTopBarTitle">
        TravelMate
      </div>
      <div className="guestTopBarRight">
        <Link to ="/login">
        <input type="button" value="Sign In" className="guestTopBarSignIn"/>
        </Link>
      </div>
    </div>
  )
}