import React, { useState } from "react";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["Home", "Menu", "Gallery", "About", "Contact"];

  const OnOpen = () => {
    setHideLeft("-left-0");
  };

  const OnClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return <div></div>;
};

export default Header;
