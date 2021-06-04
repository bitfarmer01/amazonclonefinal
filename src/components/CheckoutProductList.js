import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectItems } from "../slices/cartSlice";

const CheckoutProductList = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const addItemtoCart = () => {
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
  const removeCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5 my-7">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5 ">
        <p className="font-semibold">{title}</p>
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <p>₹{Math.floor(price * 75)}</p>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemtoCart} className="button mt-auto">
          Add Quantity
        </button>
        <button onClick={removeCart} className="button mt-auto">
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProductList;
