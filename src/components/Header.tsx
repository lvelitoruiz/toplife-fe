import React from "react";
import Logo from "../images/logo.svg";

interface HeaderProps {
    fixed: boolean;
}

const Header = ({fixed}: HeaderProps) => {
  return (
    <header
      id="header"
      className={`flex items-center justify-between px-4 lg:px-[100px] h-[80px] z-10 fixed top-0 w-full ${fixed ? "header-scrolled" : "" }`}
    >
      <div className="flex items-center gap-[120px]">
        <a href="">
          <img className="h-[59px]" src={Logo} alt="" />
        </a>
        <nav className="hidden lg:block">
          <a href="">
            <p className="pt-2">NOSOTROS</p>
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-20">
        <a className="flex items-center justify-center gap-2" href="">
          <span className="w-[30px] h-[30px] flex items-center justify-center bg-[#42B0CD] rounded-full">
            <i className="icon-phone text-white"></i>
          </span>
          <span className="nro text-white hidden lg:block font-medium pt-2">
            415 - 1415
          </span>
        </a>
        <a
          className="font-medium h-[50px] hidden lg:flex bg-[#42B0CD] text-white px-5 uppercase items-center shadow-[0_10px_20px_0_rgba(66,176,205,0.20)]"
          href="#form"
        >
          <span className="pt-2 inline-block">¡Cotizar ahora!</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
