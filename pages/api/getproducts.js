// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let product = await Product.find();
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
  res.status(200).json({ tshirts });
};

export default connectDb(handler);


// -------------------OutPut-------------------
//same color ani same size ek ch asel

// {
//   "tshirts": {
//     "tshirt": {
//       "_id": "63fdc5795e63ad87a7978be8",
//       "title": "tshirt",
//       "slug": "tshirtBlack",
//       "desc": "tshirBlack",
//       "img": "https://m.media-amazon.com/images/I/81JY6XT8pGL._AC_UL1500_.jpg",
//       "category": "tshirt",
//       "size": [
//         "L",
//         "M",
//         "XL",
//         "XxL"
//       ],
//       "color": [
//         "Black",
//         "Red",
//         "Blue"
//       ],
//       "price": 499,
//       "availableQty": 1,
//       "createdAt": "2023-02-28T09:12:25.208Z",
//       "updatedAt": "2023-02-28T09:12:25.208Z",
//       "__v": 0
//     }
//   }
// }



//-----------------------Get Product Api------------------------
// import Product from "@/models/Product";
// import connectDb from "@/middleware/mongoose";

// const handler = async(req, res)=> {
//     let product = await Product.find()
//   res.status(200).json({ product });
// }

  // export default connectDb (handler)
