import "./SideBar.css";
import {
  Home,
  Timeline,
  TrendingUp,
  Group,
  AttachMoney,
  DirectionsBus,
  BarChart,
  ChatBubbleOutline,
  ReportProblem,
  StarBorder,
  Language,
  Place,
  GpsFixed,
  DirectionsBusFilled,
  PersonAddAlt1

} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/Admin/" className="link">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Reports</h3>
          <ul className="sidebarList">
          
            <Link to="packagers" className="link">
              <li className="sidebarListItem">
                <DirectionsBus className="sidebarIcon" />
                Packagers
              </li>
            </Link>
            <Link to="users" className="link">
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="bookings" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Bookings
            </li>
            </Link>
            <Link to="transactions" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to="packagerapproval" className="link">
          <li className="sidebarListItem">
              <PersonAddAlt1 className="sidebarIcon" />
              Packager Approvals
            </li>
            </Link>
            <Link to="complaintslist" className="link">
            <li className="sidebarListItem">
              <ReportProblem className="sidebarIcon" />
              Complaints
            </li>
            </Link>
            <Link to="feedbacks" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Feedbacks
            </li>
            </Link>
            <Link to="ratings" className="link">
            <li className="sidebarListItem">
              <StarBorder className="sidebarIcon" />
              Ratings
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Registrations</h3>
          <ul className="sidebarList">
          {/* <Link to="/stateview" className="link">
            <li className="sidebarListItem">
              <Language className="sidebarIcon" />
              State
            </li>
            </Link> */}
            <Link to="districtview" className="link">
            <li className="sidebarListItem">
              <Place className="sidebarIcon" />
              District
            </li>
            </Link>
            <Link to="locationview" className="link">
            <li className="sidebarListItem">
              <GpsFixed className="sidebarIcon" />
              Location
            </li>
            </Link>
            <Link to="busmodelview" className="link">
            <li className="sidebarListItem">
              <DirectionsBusFilled className="sidebarIcon" />
              Bus Model
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
