import { Route,Routes } from "react-router-dom";
import GuestApp from "./Guest/App";
import UserApp from "./User/App";
import PackagerApp from "./Packager/App";
import AdminApp from "./Admin/App";

export default function App() {
    return (
        <Routes>
            <Route path="/*" element={<GuestApp />} />
            <Route path="/User/*" element={<UserApp />} />
            <Route path="/Packager/*" element={<PackagerApp />} />
            <Route path="/Admin/*" element={<AdminApp />} />
        </Routes>
    )
}