import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/common/navBar";
import Sidebar from "../components/common/sidebar";

export default function Root() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-screen h-screen flex flex-col">
      {!isHomePage && <NavBar />}
      <div className="w-full flex">
        <Sidebar />
        <div className="w-[calc(100%-300px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
