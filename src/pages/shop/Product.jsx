import React from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow">
      <img
        src={productImage}
        className="bg-white border border-gray-200 rounded-xl shadow"
      />
      <div className="p-2 border">
        <p className="text-2xl font-semibold tracking-tight text-gray-900 text-center">
          {productName}
        </p>
      </div>
      <div className="flex items-center justify-between px-5 pb-5 gap-3 flex-wrap">
        <p className="text-3xl font-bold text-gray-900 mt-1">₱{price}</p>
        <button
          onClick={() => addToCart(id)}
          className="w-full block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
