// import Head from "next/head";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Home() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable automatic sliding
//     autoplaySpeed: 3000, // Slide every 3 seconds
//     responsive: [
//       {
//         breakpoint: 768, // screens smaller than 768px
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };



//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   autoplaySpeed: 3000,
//   // };
//   return (
//     <>

//       <div className="relative" style={{height: "90vh"}}>
//         {/* <video
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full  h-5/6 md:h-4/5 object-cover"
//         >
//           <source src="/crouselbackground.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video> */}
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full h-5/6 md:hidden object-cover"
//         >
//           <source src="/crousel2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* For medium and larger screens */}
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full h-4/5 hidden md:block object-cover"
//         >
//           <source src="/crousel2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}

//          <div className="absolute inset-0   flex flex-col items-center justify-center p-4 font-serif">
//       <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white mb-4">
//         We Are RK Group of IT Solutions
//       </h1>
//       <p className="text-xl md:text-2xl lg:text-2xl text-center font-bold text-white mb-8">
//         Solving complex business challenges with innovative IT solutions.
//       </p>

//       <div className="hidden md:flex overflow-x-auto space-x-8 sm:space-x-5 h-64">
//         <div className="relative text-center w-72 max-w-md md:w-60 bg-white bg-opacity-50 p-6 shadow-lg ">
//           <h1 className="text-base font-bold text-black">
//             Create Your Business Website With Us
//           </h1>
//           <p className="  text-black font-serif hover:text-red-800">
//             Build your website with RK Group of IT Solutions for custom designs and mobile responsiveness.
//           </p>
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
//         </div>
//         <div className="relative text-center w-72  md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg">
//           <h1 className="text-base font-bold text-black">
//             Create Your E-Commerce Website With Us
//           </h1>
//           <p className=" text-black font-serif hover:text-red-800">
//             Launch your e-commerce site with RK Group of IT Solutions for custom designs, mobile optimization, and secure payments.
//           </p>
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
//         </div>
//         <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg ">
//           <h1 className="text-base font-bold text-black">
//             Maintain Your Website With Us
//           </h1>
//           <p className=" text-black font-serif hover:text-red-800">
//             Maintain your website with RK Group of IT Solutions for reliability, security, and optimal performance.
//           </p>
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
//         </div>
//       </div>

//       <div className="md:hidden w-full">
//         <Slider {...settings}>
//           <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
//             <h1 className="text-xl font-bold text-black">
//               Build Your Website With Us
//             </h1>
//             <p className="text-lg text-black font-serif hover:text-red-800">
//               Build your website with RK Group of IT Solutions for custom designs and mobile responsiveness.
//             </p>
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
//           </div>

//           <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
//             <h1 className="text-xl font-bold text-black">
//               Create Your E-Commerce Website With Us
//             </h1>
//             <p className="text-lg text-black font-serif hover:text-red-800">
//               Launch your e-commerce site with RK Group of IT Solutions.
//             </p>
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
//           </div>

//           <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
//             <h1 className="text-xl font-bold text-black">
//               Maintain Your Website With Us
//             </h1>
//             <p className="text-lg text-black font-serif hover:text-red-800">
//               Maintain your website with RK Group of IT Solutions for reliability, security, and optimal performance.
//             </p>
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
//           </div>
//         </Slider>
//       </div>
//     </div>

//       </div>
//       <div>
//       Let Us Help with Your Business IT Needs

//       </div>

//     </>
//   );
// }
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 768, // screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>RK Group of IT Solutions</title>
      </Head>
      <Navbar />

      <div className="relative" style={{ height: "90vh" }}>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/crousel2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 font-serif">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center  font-bold text-white mb-4">
            We Are RK Group of IT Solutions
          </h1>
          <p className="text-xl md:text-2xl lg:text-2xl text-center font-bold text-white mb-8">
            Solving complex business challenges with innovative IT solutions.
          </p>

          <div className="hidden md:flex overflow-x-auto space-x-8 sm:space-x-5 h-64">
            <div className="relative text-center w-72 max-w-md md:w-60 bg-white bg-opacity-50 p-6 shadow-lg ">
              <h1 className="text-base font-bold text-black">
                Create Your Business Website With Us
              </h1>
              <p className="text-black font-serif hover:text-red-800">
                Build your website with RK Group of IT Solutions for custom designs and mobile responsiveness.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
            </div>
            <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg">
              <h1 className="text-base font-bold text-black">
                Create Your E-Commerce Website With Us
              </h1>
              <p className="text-black font-serif hover:text-red-800">
                Launch your e-commerce site with RK Group of IT Solutions for custom designs, mobile optimization, and secure payments.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
            </div>
            <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg ">
              <h1 className="text-base font-bold text-black">
                Maintain Your Website With Us
              </h1>
              <p className="text-black font-serif hover:text-red-800">
                Maintain your website with RK Group of IT Solutions for reliability, security, and optimal performance.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
            </div>
          </div>

          <div className="md:hidden w-full">
            <Slider {...settings}>
              <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
                <h1 className="text-xl font-bold text-black">
                  Build Your Website With Us
                </h1>
                <p className="text-lg text-black font-serif hover:text-red-800">
                  Build your website with RK Group of IT Solutions for custom designs and mobile responsiveness.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
              </div>

              <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
                <h1 className="text-xl font-bold text-black">
                  Create Your E-Commerce Website With Us
                </h1>
                <p className="text-lg text-black font-serif hover:text-red-800">
                  Launch your e-commerce site with RK Group of IT Solutions.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
              </div>

              <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
                <h1 className="text-xl font-bold text-black">
                  Maintain Your Website With Us
                </h1>
                <p className="text-lg text-black font-serif hover:text-red-800">
                  Maintain your website with RK Group of IT Solutions for reliability, security, and optimal performance.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
              </div>
            </Slider>
          </div>
        </div>
      </div>



<div class="relative">
    <video autoplay loop muted className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="/buisnessITNeed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div class=" inset-0 font-serif flex items-center justify-center">
        <div class="max-w-4xl mx-auto p-8 text-white text-center  z-10 ">
            <h2 class="text-4xl text-black font-bold mb-4">Let Us Help with Your Business IT Needs</h2>
            <p class="text-xl text-black">We are a unique product development company, providing cutting-edge software solutions to maximize your business potential. Our mission is to assist brands in navigating their digital transformation journey.</p>
        </div>
    </div>

    <div class="flex items-center font-serif justify-center p-8 relative z-10">
        <div class="flex flex-wrap justify-center">
            <div class="flex flex-col items-center">
                <div class="flex items-center mb-4">
                    <div class="h-0.5 bg-black w-16"></div>
                    <div class="bg-white border border-gray-300 p-2 rounded-full text-center w-32 h-32 flex items-center justify-center shadow-md">
                        <span class="font-bold">Identify</span>
                    </div>
                    <div class="h-0.5 bg-black w-16"></div>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="flex items-center mb-4">
                    <div class="h-0.5 bg-black w-16"></div>
                    <div class="bg-white border border-gray-300 p-2 rounded-full text-center w-32 h-32 flex items-center justify-center shadow-md">
                        <span class="font-bold">Implement</span>
                    </div>
                    <div class="h-0.5 bg-black w-16"></div>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="flex items-center mb-4">
                    <div class="h-0.5 bg-black w-16"></div>
                    <div class="bg-white border border-gray-300 p-2 rounded-full text-center w-32 h-32 flex items-center justify-center shadow-md">
                        <span class="font-bold">Manage</span>
                    </div>
                    <div class="h-0.5 bg-black w-16"></div>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="flex items-center mb-4">
                    <div class="h-0.5 bg-black w-16"></div>
                    <div class="bg-white border border-gray-300 p-2 rounded-full text-center w-32 h-32 flex items-center justify-center shadow-md">
                        <span class="font-bold">Review</span>
                    </div>
                    <div class="h-0.5 bg-black w-16"></div>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="flex items-center mb-4">
                    <div class="h-0.5 bg-black w-16"></div>
                    <div class="bg-white border border-gray-300 p-2 rounded-full text-center w-32 h-32 flex items-center justify-center shadow-md">
                        <span class="font-bold">Finalize</span>
                    </div>
                    <div class="h-0.5 bg-black w-16"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="relative">
    <video autoplay loop muted className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="/buisnessITNeed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div class=" inset-0 font-serif flex items-center justify-center">
        <div class="max-w-4xl mx-auto p-8 text-white text-center  z-10 ">
            <h2 class="text-4xl text-black font-bold mb-4">Let Us Help with Your Business IT Needs</h2>
            <p class="text-xl text-black">We are a unique product development company, providing cutting-edge software solutions to maximize your business potential. Our mission is to assist brands in navigating their digital transformation journey.</p>
        </div>
    </div>

    <div class="flex items-center font-serif justify-center p-8 relative z-10">
        <div class="flex flex-wrap justify-center">
            <div class="flex flex-col items-center">
                <div class="flex items-center mb-4">
                    <div class="h-0.5 bg-black w-16"></div>
                    <div class="bg-white border border-gray-300 p-2 rounded-full text-center w-32 h-32 flex items-center justify-center shadow-md">
                        <span class="font-bold">Identify</span>
                    </div>
                    <div class="h-0.5 bg-black w-16"></div>
                </div>
            </div>


        </div>
    </div>
</div>
<div className=" p-10 bg-white  font-serif">
<div class=" inset-0 font-serif flex items-center justify-center">
        <div class="max-w-4xl mx-auto p-8 text-white text-center z-10">
            <h2 class="text-4xl text-black font-bold mb-4">Our Expertise & Service</h2>
            <p class="text-xl text-black">"Our team of experts empowers developers with comprehensive support and guidance in diverse areas."</p>
        </div>
    </div></div>

    </>
  );
}
