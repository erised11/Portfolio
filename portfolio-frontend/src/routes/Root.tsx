import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";

export default function Root() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-700">
      <NavBar></NavBar>
      <div className="lg:w-1/2 w-3/4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
