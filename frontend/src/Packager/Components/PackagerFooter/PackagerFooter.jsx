import "./PackagerFooter.css"
import {Copyright,Facebook,Twitter,Instagram,WhatsApp} from "@mui/icons-material";

export default function GuestFooter() {
  return (
    <div className="packagerfooter">
      <div className="packagerFooterText1">
        Having Trouble? <b>Contact Admin</b>
      </div>
      <div className="packagerFooterCopyrightWrapper">
      <Copyright className="packagerFooterCopyright"/>TravelMate
      </div>
      <div className="packagerFooterIconWrapper">
      <Facebook className="packagerFooterIcon"/>
      <WhatsApp className="packagerFooterIcon"/>
      <Instagram className="packagerFooterIcon"/>
      <Twitter className="packagerFooterIcon"/>
      </div>
    </div>
  )
}