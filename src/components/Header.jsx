import { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import Logo from "../assets/logo.svg";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div
        className="container flex mx-auto items-center 
      justify-between h-full"
      >
        <Link to={`/`}>
          <div>
            <img className="w-[40px]" src={Logo} alt="logo" />
          </div>
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div
            className="absolute -bottom-2 -right-2 text-[10px] leading-none 
          text-white h-4 w-4 flex justify-center items-center 
          bg-red-500 rounded-full"
          >
            <span>{itemAmount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
