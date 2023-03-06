import "./FeaturedInfo.css"
import {ArrowUpward,ArrowDownward} from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featureTitle">Income</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,415</span>
                <span className="featuredMoneyRate">+11.4 <ArrowUpward className="featuredIconUp"/></span>
                </div>
            <span className="featuredSub">Compared to Last Month</span>
            </div>
            <div className="featuredItem">
            <span className="featureTitle">Bookings</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">53</span>
                <span className="featuredMoneyRate">-23 <ArrowDownward className="featuredIconDown"/></span>
                </div>
            <span className="featuredSub">Compared to Last Month</span>
            </div>
            <div className="featuredItem">
            <span className="featureTitle">Users</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">3233</span>
                <span className="featuredMoneyRate">+217 <ArrowUpward className="featuredIconUp"/></span>
                </div>
            <span className="featuredSub">Compared to Last Month</span>
            </div>
        </div>
  )
}
