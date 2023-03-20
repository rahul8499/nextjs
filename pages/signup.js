import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; //navigate sathi
import { ToastContainer, toast } from "react-toastify"; // react tostify
import "react-toastify/dist/ReactToastify.css";
import { BASE_URI } from "@/Base_url";
  

// npm i next-navigation
const signup = () => {
  const router = useRouter();
  const handleChange = (e) => {
    e.target.value;
  };
  const handleSubmit = async (e) => {
  
    e.preventDefault(); // form submit jalyavr page reload nahi honar
    const postData = {
      //post data
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await axios.post(`${BASE_URI}/api/signup`, postData);
        // await axios.post("http://localhost:3000/api/signup", postData);



    toast("Sucess!", {
      // react tostify
      position: "top-left",
      autoClose: 5000,
    });

    setTimeout(() => {
      router.push("/login");
    }, 2000);

    // console.log(e.target.name.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
  };
   useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-4 text-center text-3xl font-bold  text-gray-900">
              Sign up for account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/login"}>Login</Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            method="POST"
          >
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div className=" rounded-md shadow-sm">
              <div>
                <input
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label for="email" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
