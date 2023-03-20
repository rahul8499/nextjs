import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"; // react tostify
import "react-toastify/dist/ReactToastify.css";
import { BASE_URI } from "@/Base_url";

const Login = () => {
  const router = useRouter();
  const handleChange = (e) => {
    e.target.value;
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // form submit jalyavr page reload nahi honar
    const postData = {
      //post data
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await axios.post(`${BASE_URI}/api/login`, postData).then((res) => {
      if (res.data.success == true) {
        toast("Sucess!", {
          // react tostify
          position: "top-left",

          autoClose: 5000,
        });

        // console.log("sucess");
        // console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        console.log(res.data.error);
        toast(res.data.error, {
          // react tostify
          position: "top-left",

          autoClose: 5000,
        });

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
      console.log(res.data);
    });
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
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/signup"}>
                {" "}
                <a
                  href="#"
                  className="font-medium text-pink-600 hover:text-pink-500"
                >
                  Signup
                </a>{" "}
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <label
                  for="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href={"/forgot"}>
                  {" "}
                  <a
                    href="#"
                    className="font-medium text-pink-600 hover:text-pink-500"
                  >
                    Forgot your password?
                  </a>{" "}
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Sign in
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
