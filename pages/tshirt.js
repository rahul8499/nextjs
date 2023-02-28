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
            {product.map((item) => {
              return (
                <Link
                  passHref={true}
                  href={`/product/${item.slug}`}
                  key={item._id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-2"
                >
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto h-[30vh] md:h-[36vh] block"
                      src={item.img}
                    ></img>
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirt
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">₹{item.price}</p>
                    <p className="mt-1">{item.size}</p>
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
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    //jitne bhi mongoose connection hai unka pahila connection readyState hai mtalb already
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.find({ category: "tshirt" });  //product table madhun category: tshirt asel tech get hotil karan product ya tabel madhe khup sare product mnje item astil jyanchi category tshirt asel tech get hotil
  return {
    props: { product: JSON.parse(JSON.stringify(product)) }, //props send kela ya file chya function la
  };
}

export default Tshirt;
