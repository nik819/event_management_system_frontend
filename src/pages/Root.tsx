import { Outlet } from "react-router-dom";
export default function Root() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="flex-1 overflow-y-auto ">
                <Outlet />
            </div>
        </div>
    );
}