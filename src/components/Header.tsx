import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Header: React.FC = () => {
  const location = useLocation();
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
        {user &&
          (location.pathname === "/user/category" ||
            location.pathname === "/user/follow") && (
            <>
            <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-white text-xl font-bold">
                Denaurlen
              </Link>

              <ul className="flex">
                {location.pathname === "/user/category" && (
                  <li className="ml-4">
                    <button className="text-white flex items-start">
                      Categories
                    </button>
                  </li>
                )}
                {location.pathname === "/user/follow" && (
                  <li className="ml-4">
                    <button className="text-white flex items-start">
                      Suggestion for you
                    </button>
                  </li>
                )}
              </ul>
              </div>
              </header>
            </>
          )}
    </>
  );
};

export default Header;
