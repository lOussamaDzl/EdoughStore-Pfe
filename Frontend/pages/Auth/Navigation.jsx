import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";

export const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setDropdownOpen(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${showSidebar ? "hidden" : "flex"}
    xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-[#186F65] w-[10%] hover:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link
          to="/"
          className="flex items-center transition-transform transform
            hover:translate-x-2"
        >
          <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">HOME</span>{" "}
        </Link>
        <Link
          to="/shop"
          className="flex items-center transition-transform transform
            hover:translate-x-2"
        >
          <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
        </Link>
        <Link to="/cart" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineShoppingCart className="mr-2 mt-[3rem]" size={26} />
            <span className="hidden nav-item-name mt-[3rem]">CART</span>{" "}
            <div className="absolute top-9 ">
              {cartItems.length > 0 && (
                <span>
                  <span className="ml-6  px-1 py-0 text-sm text-white bg-[#BC2A24] rounded-full">
                    {cartItems.length}
                  </span>
                </span>
              )}
            </div>
          </div>
        </Link>
        <Link to="/favorite" className="flex relative">
          <div
            className="flex items-center transition-transform transform
            hover:translate-x-2"
          >
            <FaHeart className="mr-2 mt-[3rem]" size={26} />
            <span className="hidden nav-item-name mt-[3rem]">
              Favorite
            </span>{" "}
            <FavoritesCount />
          </div>
        </Link>
      </div>

      <div className="realtive user_name  ">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-8000 foucs:outline-none transition-transform transform
          hover:translate-x-2"
        >
          {userInfo ? (
            <span className="text_white text-xl   ">{userInfo.username}</span>
          ) : (
            <></>
          )}
          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-3 ml-0.5 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {dropdownOpen && userInfo && (
          <ul
            className={` absolute right-0 mt-80 mr-14 space-y-2 bg-white text-gray-600 ${
              !userInfo.isAdmin ? "-mt-24" : "-top-0"
            }`}
          >
            {userInfo.isAdmin && (
              <div>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/productlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categorylist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/userlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Users
                  </Link>
                </li>
              </div>
            )}
            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
      {!userInfo && (
        <ul>
          <li>
            <Link
              to="/login"
              className="flex items-center transition-transform transform
            hover:translate-x-2"
            >
              <AiOutlineLogin className="mr-2 mt-[3rem]" size={26} />
              <span className="hidden nav-item-name mt-[3rem]">Login</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex items-center transition-transform transform
            hover:translate-x-2"
            >
              <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={26} />
              <span className="hidden nav-item-name mt-[3rem]">
                Register
              </span>{" "}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
