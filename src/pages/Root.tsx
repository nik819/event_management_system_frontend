import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/common/navBar";

export default function Root() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-screen h-screen flex flex-col">
      {!isHomePage && <NavBar />}
      <div className="flex-1 overflow-y-auto ">
        <Outlet />
      </div>
    </div>
  );
}
