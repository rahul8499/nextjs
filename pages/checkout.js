import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URI } from "@/Base_url";
import { useRouter } from "next/navigation"; //navigate sathi

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";

const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  const router = useRouter();

  const handleChnage = (e) => {
    e.target.value;
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // form submit jalyavr page reload nahi honar
    // console.log(e);

    const postData = {
      userName: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      state: e.target.state.value,
      pincode: e.target.pincode.value,
      totalAmount: subTotal,
      cart, // ha pbject pass kela
    };

    // console.log(postData);
    await axios.post(`${BASE_URI}/api/createorder`, postData).then((res) => {
      // router.push("/order");
      router.push("/");

      // console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
      <div className="container px-2 sm:m-auto">
        <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
        <h2 className="font-semibold text-xl">1. Delivery Details</h2>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                onChange={handleChnage}
                // value={name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div class="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                onChange={handleChnage}
                // value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div class="mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Addres
            </label>
            <textarea
              onChange={handleChnage}
              // value={address}
              name="address"
              id="address"
              cols="30"
              rows="2"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>

        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                onChange={handleChnage}
                // value={phone}
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div class="mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                onChange={handleChnage}
                // value={city}
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                onChange={handleChnage}
                // value={state}
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                onChange={handleChnage}
                // value={pincode}
                type="text"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <h2 className="font-semibold text-xl">2. Review Cart Items & pay</h2>

        <div className="  sideCart  bg-pink-100 p-6 m-2 ">
          <ol className="list-decimal font-semibold  ">
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
          <span className="font-bold">SubTotal: ₹{subTotal}</span>
        </div>
        <div className="mx-4">
          {/* <Link href={"/checkout"}> */}
          <button
            type="submit"
            // disabled={disabled}
            className=" disabled:bg-pink-300 flex mr-2  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            <BsFillBagCheckFill className="m-1" />
            Pay ₹ {subTotal}
          </button>
          {/* </Link> */}
        </div>
      </div>
    </form>
  );
};

export default Checkout;
