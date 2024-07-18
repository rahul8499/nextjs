
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
// import './index.css'
import styles from '@/styles/index.module.css';

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

  const [internshipCount, setInternshipCount] = useState(0);
  const [workshopCount, setWorkshopCount] = useState(0);
  const [seminarCount, setSeminarCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkshopCount(prevCount => (prevCount < 50 ? prevCount + 1 : prevCount));
    }, 100); // Faster interval

    return () => clearInterval(interval);
  }, []);

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Determine scroll direction
      // setIsScrollingDown(scrollTop > (window.data || 0));
      // window.data = scrollTop;

      // Show the section when scrolled past a certain point
      if (scrollTop > 100) {
        setShowSection(true);
      } else {
        setShowSection(false);
      }
      if (scrollTop > 530) {
        setShowCards(true);
      } else {
        setShowCards(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className={styles.container}>


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
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-4 font-serif">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center  font-bold text-white mb-4">
            We Are RK Group of IT Solutions
          </h1>
          <p className="text-xl md:text-2xl lg:text-2xl text-center font-bold text-white mb-8">
            Solving complex business challenges with innovative IT solutions.
          </p>

          <div className="hidden md:flex overflow-x-auto space-x-8 sm:space-x-5 h-64">
            <div className="relative  text-center w-72 max-w-md md:w-60 bg-white bg-opacity-50 p-6 shadow-lg ">
              <h1 className="text-base font-bold text-black">
                Create Your Business Website With Us
              </h1>
              <p className="text-black font-serif hover:text-red-800">
                Build your website with RK Group of IT Solutions for custom
                designs and mobile responsiveness.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
            </div>
            <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg">
              <h1 className="text-base font-bold text-black">
                Create Your E-Commerce Website With Us
              </h1>
              <p className="text-black font-serif hover:text-red-800">
                Launch your e-commerce site with RK Group of IT Solutions for
                custom designs, mobile optimization, and secure payments.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
            </div>
            <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg ">
              <h1 className="text-base font-bold text-black">
                Maintain Your Website With Us
              </h1>
              <p className="text-black font-serif hover:text-red-800">
                Maintain your website with RK Group of IT Solutions for
                reliability, security, and optimal performance.
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
                  Build your website with RK Group of IT Solutions for custom
                  designs and mobile responsiveness.
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
                  Maintain your website with RK Group of IT Solutions for
                  reliability, security, and optimal performance.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
              </div>
            </Slider>
          </div>
        </div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 font-serif">
  <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white mb-4">
    We Are RK Group of IT Solutions
  </h1>
  <p className="text-xl md:text-2xl lg:text-2xl text-center font-bold text-white mb-8">
    Solving complex business challenges with innovative IT solutions and comprehensive training.
  </p>

  <div className="hidden md:flex overflow-x-auto space-x-8 sm:space-x-5 h-64">
    {/* IT Solutions Cards */}
    <div className="relative text-center w-72 max-w-md md:w-60 bg-white bg-opacity-50 p-6 shadow-lg">
      <h1 className="text-base font-bold text-black">
        Web Design and Development
      </h1>
      <p className="text-black font-serif hover:text-red-800">
        Build your website with RK Group of IT Solutions for custom designs and mobile responsiveness.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
    </div>
    <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg">
      <h1 className="text-base font-bold text-black">
        E-Commerce Web Development
      </h1>
      <p className="text-black font-serif hover:text-red-800">
        Launch your e-commerce site with RK Group of IT Solutions for custom designs, mobile optimization, and secure payments.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
    </div>
    <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg">
      <h1 className="text-base font-bold text-black">
        Support & Maintenance
      </h1>
      <p className="text-black font-serif hover:text-red-800">
        Maintain your website with RK Group of IT Solutions for reliability, security, and optimal performance.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
    </div>
    {/* IT Training Cards */}
    <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg">
      <h1 className="text-base font-bold text-black">
        Software Development Training
      </h1>
      <p className="text-black font-serif hover:text-red-800">
        Learn programming languages and web development frameworks with our expert training programs.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
    </div>
    <div className="relative text-center w-72 md:w-60 max-w-md bg-white bg-opacity-50 p-6 shadow-lg">
          <h1 className="text-base font-bold text-black">
            Workshop Students Trained
          </h1>
          <p className="text-black font-serif hover:text-red-800">
            {workshopCount}
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
        </div>
  </div>

  <div className="md:hidden w-full">
    <Slider {...settings}>
      {/* IT Solutions Cards */}
      <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold text-black">
          Web Design and Development
        </h1>
        <p className="text-lg text-black font-serif hover:text-red-800">
          Build your website with RK Group of IT Solutions for custom designs and mobile responsiveness.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
      </div>
      <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold text-black">
          E-Commerce Web Development
        </h1>
        <p className="text-lg text-black font-serif hover:text-red-800">
          Launch your e-commerce site with RK Group of IT Solutions.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
      </div>
      <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold text-black">
          Support & Maintenance
        </h1>
        <p className="text-lg text-black font-serif hover:text-red-800">
          Maintain your website with RK Group of IT Solutions for reliability, security, and optimal performance.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
      </div>
      {/* IT Training Cards */}
      <div className="relative text-center w-full max-w-md bg-white bg-opacity-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold text-black">
          Software Development Training
        </h1>
        <p className="text-lg text-black font-serif hover:text-red-800">
          Learn programming languages and web development frameworks with our expert training programs.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
      </div>

    </Slider>
  </div>
</div>

      </div>
      <div >

      <div className="relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/buisnessITNeed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content section */}
        <section >

        <div className="relative z-10">
          <div className={`relative ${styles.section} ${showSection ? styles.leftToRight : styles.itNeedsRightToLeft}`}>

          <div class=" inset-0 font-serif flex items-center justify-center">
            <div class="max-w-4xl mx-auto p-8 text-white text-center  z-10  ">
              <h2 class="text-4xl text-black font-bold mb-4">
                Let Us Help with Your Business IT Needs
              </h2>
              <p class="text-xl text-black">
                We are a unique product development company, providing
                cutting-edge software solutions to maximize your business
                potential. Our mission is to assist brands in navigating their
                digital transformation journey.
              </p>
            </div>
          </div>
          </div>
          <div className={`relative ${styles.section} ${showSection ? styles.leftToRight : styles.itNeedsLeftToRight}`}>

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
        </div>
        </section>
      </div>

</div>
<div>

      <div className="relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        >
          <source src="/c9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content section */}
        <section1 className="relative z-10">
          <div className="inset-0 font-serif flex items-center justify-center">
            <div className="max-w-4xl font-serif mx-auto  text-white text-center z-10">
              <h2 className="text-4xl text-white font-bold mb-4 pt-24 md:p-8">
                Our Expertise & Service
              </h2>
              <p className="text-xl text-white">
                "Our team of experts empowers developers with comprehensive
                support and guidance in diverse areas."
              </p>
            </div>
          </div>

          {/* Card container */}
          <div className="flex flex-wrap justify-center">

            <div className=" font-serif flex flex-wrap justify-center p-8">
  <div className={` ${ showCards? styles.cardTransion : styles.cardLeftToRight} card1 bg-red-600 bg-opacity-25 shadow-2xl  rounded-lg p-6 m-4 max-w-60 w-full md:w-1/3 transform transition duration-500 ease-in-out hover:scale-110  hover:shadow-xl`}>
  <h1 className="text-xl text-white font-bold mb-2">
    Web design and development
  </h1>
  <p className="text-white">
    Design and development services for websites are the focus of RK Group of IT Solutions.
  </p>
  </div>
  <div className={` ${ showCards? styles.cardTransion : styles.cardRightToLeft} card1 bg-red-600 bg-opacity-25 shadow-2xl rounded-lg p-6 m-4 max-w-60 w-full md:w-1/3 transform transition duration-500 ease-in-out hover:scale-110`} >
      <h1 className="text-xl text-white font-bold mb-2">
        IT Consulting
      </h1>
      <p className="text-white">
        Providing expert advice to help businesses optimize their IT infrastructure and strategy.
      </p>
    </div>
    <div className={` ${ showCards? styles.cardTransion : styles.cardLeftToRight} card1 bg-red-600 bg-opacity-25 shadow-2xl  rounded-lg p-6 m-4 max-w-60 w-full md:w-1/3 transform transition duration-500 ease-in-out hover:scale-110  hover:shadow-xl`}>
    <h1 className="text-xl text-white font-bold mb-2">
         Support & Maintenance
    </h1>
    <p className="text-white">
    Support & Maintenance services ensure your website or application runs smoothly and efficiently.

    </p>
  </div>
  <div className={` ${ showCards? styles.cardTransion : styles.cardRightToLeft} card1 bg-red-600 bg-opacity-25 shadow-2xl rounded-lg p-6 m-4 max-w-60 w-full md:w-1/3 transform transition duration-500 ease-in-out hover:scale-110`}>
    <h1 className="text-xl text-white font-bold mb-2">
    E-commerce Web Development
    </h1>
    <p className="text-white">
    E-commerce Web Development Creating secure and user-friendly online platforms for selling products or services.
    </p>
  </div>

</div>

          </div>
        </section1>
      </div>
</div>
    </div>
    </>
  );
}
