import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { Plus, Minus } from "phosphor-react";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex gap-3 bg-white border border-gray-200 rounded-xl shadow">
      <img
        src={productImage}
        className="w-36 object-cover aspect-square bg-white border border-gray-200 rounded-xl shadow"
      />
      <div className="p-2 mt-4 mx-4">
        <p className="text-2xl font-semibold tracking-tight text-gray-900 ">
          {productName}
        </p>

        <div className="flex gap-20 items-center my-2 flex-wrap">
          <p className="text-3xl font-bold text-gray-900 ">₱{price}</p>
          <div>
            <button
              onClick={() => removeFromCart(id)}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-l p-2.5 text-center inline-flex items-center mr-1"
            >
              <Minus size={15} />
            </button>
            <input
              value={cartItems[id]}
              type="text"
              className="w-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              onClick={() => addToCart(id)}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-l p-2.5 text-center inline-flex items-center ml-1"
            >
              <Plus size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
