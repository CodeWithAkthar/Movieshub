import { Link } from "react-router-dom";
import watched from "../assets/whitehistory.png";
const Header = () => {

  return (
    <nav className="font-kamerik flex items-center justify-between h-16 bg-gradient-to-r from-[#191b40]  to-[#12192b] bg-opacity-25 sticky top-0 z-50">
      <div className="ml-5 text-2xl font-bold hover:text-gray-400 md:mx-16 lg:ml-36 lg:text-2xl md:text-2xl">
        <Link to={"/"}>
          <a href="#" className="text-white">
            MoviesHub
          </a>
        </Link>
      </div>

      <div className="flex items-center mr-5 space-x-4 md:mr-20 lg:mr-36 ">
        <div className="rounded-md">
          <Link to={"/recentlywatched"}>
            <img className="w-7 hover:bg-gray-800 " src={watched} alt="" />{" "}
          </Link>
        </div>
        <Link to={"/wishlist"}>
          <a href="#" className="relative">
            <svg
              className="w-6 h-6 hover:bg-gray-800 "
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              ></path>
            </svg>
            <span className="absolute px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full -top-2 -right-2">
              10
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
