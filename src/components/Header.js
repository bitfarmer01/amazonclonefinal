import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signout, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
const Header = () => {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const Router = useRouter();
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow  sm:flex-grow-0">
          <Image
            onClick={() => Router.push("/")}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500  ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            type="text"
            placeholder="search items"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right hand side of search*/}
        <div className="text-white flex items-center text-xs space-x-6  mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signout} className="link ">
            <p>{session ? `Hi ${session.user.name}` : `Sign in`}</p>
            <p className="font-extrabold md:text-sm">Account and lists</p>
          </div>
          <div className="link">
            <p>Returns </p>
            <p className="font-extrabold md:text-sm">and orders</p>
          </div>
          <div
            onClick={() => Router.push("./checkout")}
            className="relative link flex items-center cursor-pointer"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/*sub menu*/}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-gray-50  text-sm mb-1">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Today's deals</p>
        <p className="link">Amazon pay</p>
        <p className="link hidden lg:inline-flex">Electronics </p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">New releases </p>
      </div>
    </header>
  );
};

export default Header;
