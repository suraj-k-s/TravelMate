import Charts from "../../Charts/Charts"
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo"
import "./Home.css"
import { bookingData } from "../../../../dummyData";
import WidgetLg from "../../WidgetLg/WidgetLg";
import WidgetSm from "../../WidgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Charts data={bookingData} title="Booking Analytics" grid dataKey="Booking"/>
        <div className="homeWidgets">
        <WidgetSm/>
          <WidgetLg/>
          </div>
    </div>
  )
}
