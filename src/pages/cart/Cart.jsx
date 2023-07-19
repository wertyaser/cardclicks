import React, { useContext } from "react";
import { products } from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const alert = () => {
    toast("Thank you for Shopping", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    clearCart();
    navigate("/");
  };

  return (
    <>
      <div className="max-w-xl mx-auto">
        <div className="mb-5">
          <h1 className="text-4xl font-bold my-6 text-center">
            Your Cart Items
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 ">
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="max-w-xl m-auto pt-10">
            <p className="text-xl font-semibold">Subtotal: ₱{totalAmount}</p>
            <div className="flex justify-between flex-wrap pt-3">
              <button
                onClick={() => navigate("/")}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Continue Shopping
              </button>
              <button
                onClick={alert}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <h1 className="text-center font-semibold">(Your Cart is Empty)</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
