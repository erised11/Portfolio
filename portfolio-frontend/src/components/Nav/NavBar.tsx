import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

import logo from "../../assets/aperture3.png";

const NavBar = () => {
  return (
    <div className="h-32 text-gray-300 flex justify-between tracking-widest px-10 py-10">
      <img src={logo} className="h-2/3 md:h-4/5 lg:h-full" />
      <div className="hidden sm:flex gap-10">
        <div>
          <Link to={"/"}>
            <p className="hover:underline">Chatbot</p>
          </Link>
        </div>
        <div>
          <Link to={"portfolio"}>
            <p className="hover:underline">Portfolio</p>
          </Link>
        </div>
        <div>
          <Link to={"about"}>
            <p className="hover:underline">About</p>
          </Link>
        </div>
        <div>
          <Link to={"contact"}>
            <p className="hover:underline">Contact</p>
          </Link>
        </div>
      </div>
      <div className="sm:hidden">
        <Dropdown color={""} label="Menu" dismissOnClick={true}>
          <Link to={"/"}>
            <Dropdown.Item>Chatbot</Dropdown.Item>
          </Link>
          <Link to={"portfolio"}>
            <Dropdown.Item>Portfolio</Dropdown.Item>
          </Link>
          <Link to={"about"}>
            <Dropdown.Item>About</Dropdown.Item>
          </Link>
          <Link to={"contact"}>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Link>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar;
