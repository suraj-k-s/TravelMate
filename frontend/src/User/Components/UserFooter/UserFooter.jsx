import "./UserFooter.css"
import {Copyright,Facebook,Twitter,Instagram,WhatsApp} from "@mui/icons-material";

export default function UserFooter() {
  return (
    <div className="userfooter">
      <div className="userFooterText1">
        Having Trouble? <b>Contact Admin</b>
      </div>
      <div className="userFooterCopyrightWrapper">
      <Copyright className="userFooterCopyright"/>TravelMate
      </div>
      <div className="userFooterIconWrapper">
      <Facebook className="userFooterIcon"/>
      <WhatsApp className="userFooterIcon"/>
      <Instagram className="userFooterIcon"/>
      <Twitter className="userFooterIcon"/>
      </div>
    </div>
  )
}