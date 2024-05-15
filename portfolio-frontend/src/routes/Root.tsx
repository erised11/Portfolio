import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";

export default function Root() {
  return (
    <div className="w-[100vw] min-h-[100vh] h-full bg-gradient-to-b from-gray-700 to-gray-900 absolute top-0 bottom-0 left-0 right-0 overflow-auto">
      <NavBar></NavBar>
      <div className="xl:w-1/2 lg:w-3/5 md:w-3/4 w-5/6 mx-auto pb-32">
        <Outlet />
      </div>
    </div>
  );
}
