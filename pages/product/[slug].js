import { useRouter } from "next/router";
import { useState } from "react";
import mongoose from "mongoose";
import Product from "@/models/Product";
import { BASE_URI } from "@/Base_url";

const Post = ({ buyNow, addToCart, product, varaint }) => {
  // console.log(product, varaint);
  // console.log(product._id);
  //   Object.values(varaint).map((item) => {
  //     console.log(item);
  //   })
  // );

  const router = useRouter();
  const [pin, setPin] = useState(); //je user te pin type karel te ya state madhe store hoyil
  const [service, setService] = useState(); // user ne jo pin takla ahe to jar pin madhe asel tr true nahitr false he service state madhe store kele

  const checkServiceavailability = async () => {
    let pins = await fetch(`${BASE_URI}/api/pincode`);
    let pinJson = await pins.json();
    // console.log(pinJson, pin);
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  const onChangePin = (e) => {
    // localStorage.setItem("cart" , myCart);

    setPin(e.target.value);
    // console.log(e.target.value);
  };
  const { slug } = router.query;
  // console.log(slug);
  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);
  const refreshVaraint = (newSize, newColor) => {
    let url = `${BASE_URI}/product/${varaint[newColor][newSize][`slug`]}`;
    window.location = url;
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover "
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                onlineStore.com
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title} ({product.size}/{product.color})
              </h1>
              {/* <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div> */}
              <p>{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(varaint).includes("Red") &&
                    Object.keys(varaint["Red"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVaraint(size, "Red");
                        }}
                        className={`border-2 border-red-500 bg-red-700 rounded-full w-6 h-6 ${
                          color === "Red" ? "border-black" : "border-gray-300"
                        } `}
                      ></button>
                    )}
                  {Object.keys(varaint).includes("Black") &&
                    Object.keys(varaint["Black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVaraint(size, "Black");
                        }}
                        className={`border-2  ml-1 bg-black rounded-full w-6 h-6 ${
                          color === "Black" ? "border-black" : "border-gray-300"
                        } `}
                      ></button>
                    )}
                  {Object.keys(varaint).includes("Green") &&
                    Object.keys(varaint["Green"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVaraint(size, "Green");
                        }}
                        className={`border-2  ml-1 bg-green-700 rounded-full w-6 h-6 ${
                          color === "Green" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(varaint).includes("Gray") &&
                    Object.keys(varaint["Gray"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVaraint(size, "Gray");
                        }}
                        className={`border-2  ml-1 bg-gray-700 rounded-full w-6 h-6 ${
                          color === "Gray" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(varaint).includes("Pink") &&
                    Object.keys(varaint["Pink"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVaraint(size, "Pink");
                        }}
                        className={`border-2  ml-1 bg-pink-700 rounded-full w-6 h-6 ${
                          color === "Pink" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVaraint(e.target.value, color);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                    >
                      {/* {Object.values(varaint).map((item) => {
                        console.log(Object.keys(item).map((i)=>{
                          console.log(i);
                          <option>S</option>;
                        }));
                      })}
                      ; */}

                      {/* {Object.keys(varaint).includes("Black") &&
                        Object.values(varaint).keys("M") && (
                          <option value={"M"}>M</option>
                        )} */}

                      {Object.keys(varaint[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(varaint[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(varaint[color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(varaint[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(varaint[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}.0
                </span>
                <button
                  onClick={() => {
                    addToCart(
                      slug,
                      1,
                      product.price,
                      product.title,
                      product.size,
                      product.color
                    );
                  }}
                  className="flex ml-8 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    buyNow(
                      slug,
                      1,
                      product.price,
                      product.title,
                      product.size,
                      product.color
                    );
                  }}
                  className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Buy Now
                </button>
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
              </div>
              <div className="pin mt-6 space-x-2 flex">
                <input
                  onChange={onChangePin}
                  placeholder="Enter Your Pin code Check Serviceavailability"
                  className="px-2 border-2 border-pink-100 rounded-md"
                  type="text"
                />
                <button
                  onClick={checkServiceavailability}
                  className=" text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Pin
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-700 text-sm mt-3">
                  {/* true asel tr return hoil && and mule */}
                  sorry we do not deliver to this pincode
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700 text-sm mt-3">
                  yey! this pin is setServiceable
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// --------------getServerSideProps-----------------------------------
//kontya product la click kel ahe tyacha sgla data ani tyamadhe kontya size available ahe ani konte color available ahe mnje color cha ani size cha array bnvla
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    //jitne bhi mongoose connection hai unka pahila connection readyState hai mtalb already
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.findOne({ slug: context.query.slug });
  let varaint = await Product.find({ title: product.title }); //Black: M: slug: "TshirtPink5"  he structure bnvl
  // ("TshirtPink5");
  let colorSizeSlug = {};
  for (let item of varaint) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      varaint: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, //props send kela ya file chya function la
  };
}

export default Post;
