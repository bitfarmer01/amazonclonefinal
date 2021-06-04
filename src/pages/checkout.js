import Image from "next/image";
import { useSession } from "next-auth/client";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProductList from "../components/CheckoutProductList";
import Header from "../components/Header";
import { selectItems } from "../slices/cartSlice";

function checkout() {
  const items = useSelector(selectItems);

  const [session] = useSession();
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <main className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
        <div className="m-5">
          <Image
            src="https://pbs.twimg.com/media/CKmOzB0VEAAAm6U.jpg"
            alt="banner 7"
            objectFit="contain"
            height={250}
            width={1020}
          />
          <div className="flex flex-col bg-white p-5 m-5">
            <h3 className="text-2xl  border-b pb-4 ">Shopping Cart</h3>
            {items.length > 0 ? (
              <div>
                {items.map(
                  ({ id, title, description, category, image, price }, i) => (
                    <CheckoutProductList
                      key={id}
                      id={id}
                      title={title}
                      description={description}
                      category={category}
                      image={image}
                      price={price}
                    />
                  )
                )}
              </div>
            ) : (
              <div className="w-full text-center p-14">
                Your basket is empty.
              </div>
            )}
          </div>
        </div>
        {items.length > 0 && (
          <div className="bg-white p-5 space-y-3 flex flex-col">
            <span className="whitespace-nowrap">
              Subtotal ({items.length} items):{" "}
            </span>
            <button
              role="link"
              disabled={!session}
              className={`button ${
                !session &&
                "bg-gradient-to-b from-gray-300 to-gray-500 text-gray-300"
              }`}
              className="button"
            >
              {!session
                ? "Sign In to Checkout"
                : `Proceed to Checkout ${session.user.name}`}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default checkout;
