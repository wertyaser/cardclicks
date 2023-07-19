import React from "react";
import { products } from "../../products";
import Product from "./Product";
import { Link } from "react-router-dom";
import { FacebookLogo, GithubLogo, InstagramLogo } from "phosphor-react";
const Shop = () => {
  return (
    <>
      <div className="max-w-5xl m-auto mt-5 mb-10">
        <div className="mb-5">
          <h1 className="text-4xl font-bold my-6 text-center">CardClicks</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>

      <div className="border shadow-lg">
        <div className=" flex justify-center gap-10 my-10">
          <Link to="https://github.com/LeonielGNacman">
            <GithubLogo size={32} />
          </Link>
          <Link to="https://www.facebook.com/LeonielNacman0/">
            <FacebookLogo size={32} />
          </Link>
          <Link to="https://www.instagram.com/_leonielgarin/">
            <InstagramLogo size={32} />
          </Link>
          <p>|</p>
          <p className="text-center text-lg font-semibold">Leoniel Nacman</p>
        </div>
      </div>
    </>
  );
};

export default Shop;
