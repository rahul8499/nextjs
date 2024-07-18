
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/Services' },
//     { name: 'Internship', path: '/Internship' },
//     { name: 'Portfolio', path: '/Portfolio' },
//     { name: 'Career', path: '/Career' },
//     { name: 'About', path: '/About' },
//     { name: 'Blogs', path: '/Blogs' },
//     { name: 'Contact', path: '/Contact', isSpecial: true },
//   ];

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row md:justify-between items-center shadow-lg sticky top-0 bg-white z-10 py-4 px-6">
//         <div className="flex justify-between items-center w-full md:w-auto">
//           <div className="logo mr-auto md:mx-5">
//             <Link href="/">
//               <span className="text-red-800 font-serif font-extrabold text-lg">RK</span>
//             </Link>
//           </div>
//           <button
//             className="md:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400"
//             onClick={toggleMenu}
//           >
//             <FaBars size={24} />
//           </button>
//         </div>
//         <div className="hidden md:flex w-full md:w-auto md:ml-auto">
//           <ol className="flex flex-col md:flex-row justify-end items-center space-y-2 md:space-y-0 md:space-x-8 text-lg font-serif">
//             {navItems.map((item) => (
//               <li
//                 key={item.name}
//                 className={`relative group ${
//                   router.pathname === item.path ? 'text-red-800' : 'text-gray-800'
//                 } ${item.isSpecial ? 'bg-red-700 p-1 ' : ''}`}
//               >
//                 <Link
//                   href={item.path}
//                   className={` transition-colors duration-300 ${
//                     item.isSpecial ? 'hover:text-white text-white p-2' : 'hover:text-red-800'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//                 {router.pathname === item.path && (
//                   <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>
//                 )}
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>

//       <div
//         className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
//           menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//         onClick={toggleMenu}
//       ></div>

//       <div
//         className={`fixed top-0 left-0 z-50 w-full h-full bg-white shadow-md transform ${
//           menuOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <button
//           onClick={toggleMenu}
//           className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full"
//         >
//           <FaTimes size={24} />
//         </button>
//         <div className="p-4">
//           <h2 className="text-xl font-bold">RK GROUP OF IT SOLUTION</h2>
//           <ol className="flex flex-col space-y-4 mt-4  text-lg font-serif">
//             {navItems.map((item) => (
//               <li
//                 key={item.name}
//                 className={`relative group ${
//                   router.pathname === item.path ? 'text-red-800' : 'text-gray-800'
//                 } ${item.isSpecial ? 'bg-red-700 p-1 ' : ''}`}
//               >
//                 <Link
//                   href={item.path}
//                   className={` transition-colors duration-300 ${
//                     item.isSpecial ? 'hover:text-white text-white p-2' : 'hover:text-red-800'
//                   }`}
//                   onClick={toggleMenu}
//                 >
//                   {item.name}
//                 </Link>
//                 {router.pathname === item.path && (
//                   <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>
//                 )}
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [navbarBackground, setNavbarBackground] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setNavbarBackground(true);
//     } else {
//       setNavbarBackground(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`fixed w-full z-10 top-0 transition-all duration-300 ${navbarBackground ? 'bg-white shadow-lg' : 'bg-transparent text-white'}`}>
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <Link href="/" >
//         RK Group of IT Solutions
//         </Link>
//         <div className="space-x-4">
//           <Link href="/">
//           Home
//           </Link>
//           <Link href="/About">
//           About
//           </Link>
//           <Link href="/services">
//           Services
//           </Link>
//           <Link href="/contact">
//           Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  // const router = useRouter();

  // const handleScroll = () => {
  //   if (window.scrollY > 50) {
  //     setNavbarBackground(true);
  //   } else {
  //     setNavbarBackground(false);
  //   }
  // };
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    if (window.scrollY > 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services'  },
    { name: 'Internship', path: '/Internship' },
    { name: 'Portfolio', path: '/Portfolio' },
    { name: 'Career', path: '/Career' },
    { name: 'About', path: '/About' },
    { name: 'Blogs', path: '/Blogs' },
    { name: 'Contact', path: '/Contact', isSpecial: true },
  ];
    // const imageSrc = scrollPosition > 50
    // ? '/vector1.jpg'
    // : (router.pathname === '/'
    //     ? '/logo.png'
    //     : '/vector1.jpg');

  const textColor = scrollPosition > 50 ? 'text-black' : (router.pathname === '/' ? 'text-white' : 'text-black');
  return (
    <div>
      <nav className={`fixed w-full z-20 top-0 transition-all duration-300 ${navbarBackground ? 'bg-white shadow-lg' : 'bg-transparent '}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/">
          {/* <img src={imageSrc} alt="Logo" width={130} height={50}  /> */}



            <span className= {` font-serif font-extrabold text-lg ${textColor}`}>RKGROUPOFITSOLUTIONS</span>
          </Link>
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes size={24}   className={` ${textColor}`} /> : <FaBars size={24}  className={` ${textColor}`}  />}
          </button>
          <div className="hidden md:flex w-full md:w-auto md:ml-auto">
            <ol className="flex flex-col md:flex-row justify-end items-center space-y-2 md:space-y-0 md:space-x-8 text-lg font-serif">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`relative group ${textColor} ${router.pathname === item.path ? 'text-red-800' : 'text-gray-800'} ${item.isSpecial ? 'bg-red-700 p-1 ' : ''} `}
                >
                  <Link href={item.path}>
                    <span className={`transition-colors duration-300  ${item.isSpecial ? 'hover:text-white text-white p-2' : 'hover:text-red-800'}`}>
                      {item.name}
                    </span>
                  </Link>
                  {router.pathname === item.path && (
                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 left-0 z-50 w-full h-full  bg-white shadow-md transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full"
        >
          <FaTimes size={24} />
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold">RK GROUP OF IT SOLUTION</h2>
          <ol className="flex flex-col space-y-4 mt-4 text-lg font-serif">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`relative group ${router.pathname === item.path ? 'text-red-800' : 'text-gray-800'} ${item.isSpecial ? 'bg-red-700 p-1 ' : ''}`}
              >
                <Link href={item.path} onClick={toggleMenu}>
                  <span className={`transition-colors duration-300 ${item.isSpecial ? 'hover:text-white text-white p-2' : 'hover:text-red-800'}`}>
                    {item.name}
                  </span>
                </Link>
                {router.pathname === item.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
