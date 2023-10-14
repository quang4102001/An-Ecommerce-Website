import { useContext } from "react";
import { BsBag } from "react-icons/bs";

import { SidebarContext } from "../contexts/SidebarContext";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-pink-200">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
}

export default Header;
