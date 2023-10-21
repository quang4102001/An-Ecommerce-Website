import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill, BsPlus } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const { category, description, id, image, price, rating, title } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="absolute top-4 -right-10 p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center w-12 h-12 bg-red-500">
                <BsPlus />
              </div>
            </button>
            <Link to={`/product/${id}`}>
              <div className="flex justify-center items-center w-12 h-12 bg-white drop-shadow-xl">
                <BsEyeFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <p className="font-semibold mb-1">{price}$</p>
      </div>
    </div>
  );
}

export default Product;
