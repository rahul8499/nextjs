import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

import { MdAccountCircle } from "react-icons/md";


const Navbar = ({logout, user,  cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const[dropdown, setDropdown] = useState(false)

  const toggleCart = () => { // cart open or close code // close icon ani cart icon use one function
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start  justify-center items-center shadow-md sticky top-0 bg-white z-10">
        <div className="logo mr-auto md:mx-5">
          <Link href={"/"}>
            {" "}
            <Image width={200} height={40} src="/logo.png" alt="" />{" "}
          </Link>
        </div>
        <div className="nav ">
          <ol className="flex justify-between items-center space-x-6 font-bold md:text-md cursor-pointer">
            <Link href={"/tshirt"}>
              <li>Tshirt</li>
            </Link>
            <Link href={"/hoodies"}>
              <li>Hoddies</li>
            </Link>
            <Link href={"/stickers"}>
              <li>stickers</li>
            </Link>
            <Link href={"/mugs"}>
              <li>mugs</li>
            </Link>
          </ol>
        </div>
        <div className=" cursor-pointer cart items-center absolute right-0 mx-5 top-2 flex ">
          <a
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
          >
            {dropdown && (
              <div className="absolute right-8 bg-white rounded-md py-4 px-5 w-32 top-7 shadow-lg border">
                <ul>
                  <Link href={"/myaccount"}>
                    {" "}
                    <li className="py-1 hover:text-pink-700 text-sm font-bold">
                      MyAccount
                    </li>
                  </Link>
                  <Link href={"/orders"}>
                    {" "}
                    <li className="py-1 hover:text-pink-700 text-sm font-bold">
                      Orders
                    </li>
                  </Link>
                  <li
                    onClick={logout}
                    className="py-1 hover:text-pink-700 text-sm font-bold"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
            {user.value && <MdAccountCircle className="text-3xl mx-2" />}
          </a>
          {/* 
          token asel tr he icon mnje login kel asel tr he icon */}

          {!user.value && (
            <Link href={"/login"}>
              <button className="bg-pink-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                Login
              </button>
              {/* token nasel tr he icon mnje login nsel tr he button */}
            </Link>
          )}
          <AiOutlineShoppingCart onClick={toggleCart} className="text-3xl" />
        </div>

        {/* cart sidebar */}
        <div
          ref={ref}
          className={` w-80 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-8  transition-transform ${
            // cart length o asel tr open honar nahi automatic
            Object.keys(cart).length !== 0
              ? "translate-x-0"
              : "translate-x-full"
          } `}
          //   cart rs 0 asel tr cart open rahnar nahi cart madhe rs astil tr cart open rahil
        >
          <h2 className="font-bold texl-lg text-center mt-1">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
          >
            <AiFillCloseCircle className="cursor-pointer" />
          </span>
          <ol className="list-decimal font-semibold ">
            {/* {Object.keys{cart}.length === 0 && <div> no item</div>} */}
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your Card is Empty!</div>
            )}

            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  {/* k ha itemcode ahe */}

                  <div className="item flex my-8 ">
                    <span className="w-2/3 font-semibold">
                      {cart[k].name}({cart[k].size}/{cart[k].variant})
                    </span>
                    <span className="flex items-center justify-center font-semibold 1/3 texl-lg">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />{" "}
                      <span className="mx-2">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />{" "}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="font-bold my-2">SubTotal: ₹{subTotal}</div>
          <div className="flex">
            <Link href={"/checkout"}>
              <button className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">
                <BsFillBagCheckFill className="m-1" />
                Checkout
              </button>
            </Link>
            {/* onClick={clearCart} */}
            <button
              onClick={clearCart}
              className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
            >
              ClearCart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
