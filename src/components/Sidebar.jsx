import { useContext } from "react";
import { IoArrowForward } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } h-full bg-white fixed top-0 shadow-2xl w-full sm:w-[60vw] 
      md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 
      px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({itemAmount})
        </div>
        <IoArrowForward
          className="cursor-pointer"
          onClick={() => handleClose()}
        />
      </div>
      <div
        className="flex flex-col gap-y-2 custom-height 
        overflow-y-auto overflow-x-hidden border-b"
      >
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 py-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 
            text-white w-12 h-12 flex justify-center items-center 
            text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex justify-center 
        items-center p-4 text-primary font-medium w-full"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-primary flex justify-center 
        items-center p-4 text-white font-medium w-full"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
