import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const addItemBasket = () => {
    toast.warning("Added to cart!");
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToCart(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      {/* <p className="absolute top-2 right-2 text-xs text-gray-400">{category}</p> */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-2  text-xl line-clamp-2">{title}</h4>
      <p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>

      <p className="font-bold text-lg mb-5 ">₹{Math.floor(price * 75)}</p>

      <button onClick={addItemBasket} className="mt-auto button">
        Add to cart
      </button>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Flip}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Product;
