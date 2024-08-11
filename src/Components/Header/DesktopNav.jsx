import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, Logo }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-10 lg:px-40  py-10 bg-transparent w-full z-10 absolute">
      <a href="">{Logo}</a>
      <ul className="flex gap-7">
        {menuItems.map((menu, index) => (
          <li key={index}>
            <Link
              to={menu}
              className="font-medium capitalize text-color-heading hover:text-accent-default transition-all duration-300 ease-linear"
            >
              {menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
