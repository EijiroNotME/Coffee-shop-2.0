import React from "react";
//Icons
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.jsx";

const MobileNav = ({ menuItems, Logo, onOpen, onClose, hideLeft }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12 bg-background-transparent absolute text-secondary shadow-md  w-full z-10 ">
      <Link to="/">{Logo}</Link>
      <Button variant="default" size="icon" onClick={onOpen}>
        <HiBars3BottomRight className="w-7 h-7 text-color-heading" />
      </Button>

      <div
        className={`transition-all duration-500 ease-in-out w-full h-full fixed  bg-background-contrast z-50 top-0 ${hideLeft} flex items-center justify-center`}
      >
        <Button
          variant="default"
          size="icon"
          onClick={onClose}
          className="absolute top-5 right-6 text-secondary text-color-heading"
        >
          <RiCloseCircleLine className="w-7 h-7" />
        </Button>

        <div className="flex flex-col items-center gap-8 p-6">
          <a href="/" className="mb-8">
            {Logo}
          </a>

          <ul className="flex flex-col items-center gap-5 text-color-heading">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                  onClick={onClose}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
