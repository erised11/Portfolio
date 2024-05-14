import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-32 text-gray-300 flex justify-end tracking-widest px-10 py-5">
      <div className="flex gap-10">
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
    </div>
  );
};

export default NavBar;
