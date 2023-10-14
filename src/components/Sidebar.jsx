import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
// import {FiTrash2} from 'react-icons/fi'

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } h-full bg-white fixed top-0 shadow-2xl w-full md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:py-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping bag (0)</div>
        <IoArrowForward
          className="cursor-pointer"
          onClick={() => handleClose()}
        />
      </div>
    </div>
  );
}

export default Sidebar;
