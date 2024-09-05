import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-slate-900 text-gray-100 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center p-4 w-full">
        <Link to="/" className="text-2xl font-bold">
          MinT
        </Link>
        <button
          className="text-gray-100 block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-4 w-full lg:w-auto`}
        >
          <Link
            to="/"
            className="block lg:inline-block hover:bg-green-400 p-1 rounded font-bold transition ease-in-out"
          >
            Feedback
          </Link>
          <Link
            to="/feedbackdetail"
            className="block lg:inline-block hover:bg-green-400 p-1 rounded font-bold transition ease-in-out"
          >
            Feedback Detail
          </Link>
          <Link
            to="/complaint"
            className="block lg:inline-block hover:bg-green-400 p-1 rounded font-bold transition ease-in-out active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Complaint
          </Link>
          <Link
            to="/complaintdetail"
            className="block lg:inline-block hover:bg-green-400 p-1 rounded font-bold transition ease-in-out active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Complaint Detail
          </Link>
          {user ? (
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
              <span className="text-lg">{user.email}</span>
              <button
                onClick={handleClick}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-2 lg:mt-0"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
              <Link
                to="/login"
                className="block lg:inline-block hover:text-gray-400 mt-2 lg:mt-0"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block lg:inline-block hover:text-gray-400 mt-2 lg:mt-0"
              >
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
