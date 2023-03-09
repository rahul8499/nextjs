import Link from "next/link";
import React from "react";
import Product from "@/models/Product";
// import connectDb from "@/middleware/mongoose";
import mongoose from "mongoose";

const Tshirt = ({ product }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap  -m-4 justify-center ">
            {Object.keys(product).map((item) => {
              //object ahe array nahi array asla asta tr product.map
              return (
                <Link
                  passHref={true}
                  href={`/product/${product[item].slug}`}
                  key={product[item]._id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-2"
                >
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto h-[30vh] md:h-[36vh] block"
                      src={product[item].img}
                    ></img>
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirt
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product[item].title}
                    </h2>
                    <p className="mt-1">₹{product[item].price}</p>
                    {/* //object aslyamule{product[item]}.price* {product[item].size} */}
                    <div className="mt-1">
                      {product[item].size.includes("S") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          S
                        </span>
                      )}
                      {product[item].size.includes("M") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          M
                        </span>
                      )}
                      {product[item].size.includes("L") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          L
                        </span>
                      )}
                      {product[item].size.includes("XL") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          XL
                        </span>
                      )}
                      {product[item].size.includes("XXL") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          XXL
                        </span>
                      )}
                    </div>
                    <div className="mt-1">
                      {product[item].color.includes("Red") && (
                        <span>
                          {" "}
                          <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 "></button>
                        </span>
                      )}
                      {product[item].color.includes("Black") && (
                        <span>
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 "></button>{" "}
                        </span>
                      )}
                      {product[item].color.includes("Pink") && (
                        <span>
                          {" "}
                          <button className="border-2 border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 "></button>
                        </span>
                      )}
                      {product[item].color.includes("Gray") && (
                        <span>
                          {" "}
                          <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 "></button>
                        </span>
                      )}
                      {product[item].color.includes("Green") && (
                        <span>
                          {" "}
                          <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 "></button>
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

//-----------serverSideProps-------------
// 1]mongoose ch connection ghetl getserverSideProps madhe 
// 2]logic write kel jya item ch title same ahe ani tyamdhe diffrent size, diffrent color ahe te common hotil mnje ek product che kiti size ani kiti color available ahe te show hotil new product add kela database madhe tyach title same asel tr tye product ch size ani color ani size add keli jayil tya item madhe mnje eka item che kiti color ani size ahe te show hotil

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    //jitne bhi mongoose connection hai unka pahila connection readyState hai mtalb already
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.find({ category: "tshirt" }); //product table madhun category: tshirt asel tech get hotil karan product ya tabel madhe khup sare product mnje item astil jyanchi category tshirt asel tech get hotil
  let tshirts = {};
  for (let item of product) {
    if (item.title in tshirts) {
      //1] tshirt ha khali object ahe tyamdhe item.title nasnar to else madhe jayil
      //3] tya product cha dusra size an dusra color yeto tevhe item.title he tshirt madhe asnar
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0 //4]jar to color nasel ani quantity >0 asel tr tshirt chya color array madhe to push hoyil
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        //5]jar to size nasel ani quantity >0 asel tr tshirt chya size array madhe to push hoyil
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      // 2]new tshirt varaint alyvr to add in tshirt made tyasathi
      tshirts[item.title] = JSON.parse(JSON.stringify(item)); //tshirt madhe title ek key bnvli ahe purna object la value bnvli
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color]; // array bnvle color, size
        tshirts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { product: JSON.parse(JSON.stringify(tshirts)) }, //props send kela ya file chya function la
  };
}

export default Tshirt;
