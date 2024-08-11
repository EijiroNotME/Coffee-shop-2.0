import React, { useState } from "react";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["Home", "Menu", "Gallery", "About", "Contact"];

  const onOpen = () => {
    setHideLeft("-left-0");
  };

  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  const Logo = () => {
    return (
      <h1 className="text-4xl font-bold text-color-heading">
        Coffee<span className="text-accent-default">.</span>
      </h1>
    );
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} Logo={<Logo />} />
      </div>

      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          onOpen={onOpen}
          onClose={onClose}
          hideLeft={hideLeft}
          Logo={<Logo />}
        />
      </div>
    </>
  );
};

export default Header;
