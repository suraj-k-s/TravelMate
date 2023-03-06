import "./WidgetSm.css"
import Img1 from "../../../Assets/oneness.jpg"
import Img2 from "../../../Assets/pic83.jpg"
import Img3 from "../../../Assets/pic84.jpg"
import Img4 from "../../../Assets/pic86.jpg"
import Img5 from "../../../Assets/pic87.jpg"
import {Visibility} from '@mui/icons-material';

export default function WidgetSm() {
  return (
    <div className="widgetsm">
        <span className="widgetsmTitle">New Join Packagers</span>
        <ul className="widgetsmList">
          <li className="widgetsmListItem">
            <img src={Img1} alt="" className="widgetsmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Oneness Travels</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li>
            <li className="widgetsmListItem">
            <img src={Img3} alt="" className="widgetsmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">JaiGuru Holidays</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li><li className="widgetsmListItem">
            <img src={Img2} alt="" className="widgetsmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Komban Holidays</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li><li className="widgetsmListItem">
            <img src={Img4} alt="" className="widgetsmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Honeybase Holidays</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li><li className="widgetsmListItem">
            <img src={Img5} alt="" className="widgetsmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">London TravelLights</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li>
          </ul>
        </div>
  )
}
