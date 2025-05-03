import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navBar";

export default function Root() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 overflow-y-auto ">
        <Outlet />
      </div>
    </div>
  );
}
