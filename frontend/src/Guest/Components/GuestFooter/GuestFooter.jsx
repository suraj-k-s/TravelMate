import "./GuestFooter.css"
import {Copyright,Facebook,Twitter,Instagram,WhatsApp} from "@mui/icons-material";

export default function GuestFooter() {
  return (
    <div className="guestfooter">
      <div className="guestFooterText1">
        Having Trouble? <b>Contact Admin</b>
      </div>
      <div className="guestFooterCopyrightWrapper">
      <Copyright className="guestFooterCopyright"/>TravelMate
      </div>
      <div className="guestFooterIconWrapper">
      <Facebook className="guestFooterIcon"/>
      <WhatsApp className="guestFooterIcon"/>
      <Instagram className="guestFooterIcon"/>
      <Twitter className="guestFooterIcon"/>
      </div>
    </div>
  )
}