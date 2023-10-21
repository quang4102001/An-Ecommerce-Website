import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdRemove } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

function CartItem({ item }) {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div
      className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200
     w-full font-light text-gray-500"
    >
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px]
               text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer">
              <FaTimes
                onClick={() => removeFromCart(id)}
                className="text-gray-500 hover:text-red-500
                 transition"
              />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div
              className="flex flex-1 max-w-[100px] items-center
             h-full border text-primary font-medium"
            >
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center
                 items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div
                className="h-full flex justify-center items-center
               px-2"
              >
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center 
                items-center cursor-pointer"
              >
                <BiPlus />
              </div>
            </div>
            <div className="flex-1 flex justify-around items-center">
              $ {price}
            </div>
            <div
              className="flex-1 flex justify-end items-center
             text-primary font-medium"
            >{`$ ${parseFloat(price * amount)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
