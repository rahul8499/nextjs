import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center shadow-lg sticky top-0 bg-white z-10 py-4 px-6">
      <div className="logo mr-auto md:mx-5">
        <Link href="/">
          {/* <Image width={100} height={40} src="/balckcompanylogoi.png"  alt="Logo" /> */}
          <span className=" text-red-800  font-serif font-extrabold text-lg">RK GROUP OF IT SOLUTION</span>
        </Link>
      </div>
      <div className="nav">
        <ol className="flex justify-between items-center space-x-8 font-semibold text-lg   font-serif ">
        <li className={`relative group ${router.pathname === '/Home' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/" className="hover:text-red-800 font-bold transition-colors duration-300">
              Home
              </Link>
            {router.pathname === '/' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          <li className={`relative group ${router.pathname === '/Services' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/Services" className="hover:text-red-800 font-bold transition-colors duration-300">
              Services
            </Link>
            {router.pathname === '/Services' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          <li className={`relative group ${router.pathname === '/Internship' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/Internship" className="hover:text-red-800 font-bold transition-colors duration-300">
              Internship
            </Link>
            {router.pathname === '/Internship' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          <li className={`relative group ${router.pathname === '/Portfolio' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/Portfolio" className="hover:text-red-800 font-bold transition-colors duration-300">
              Portfolio
            </Link>
            {router.pathname === '/Portfolio' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          <li className={`relative group ${router.pathname === '/Career' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/Career" className="hover:text-red-800 font-bold transition-colors duration-300">
              Career
            </Link>
            {router.pathname === '/Career' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          <li className={`relative group ${router.pathname === '/About' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/About" className="hover:text-red-800 font-bold transition-colors duration-300">
              About
            </Link>
            {router.pathname === '/About' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          <li className={`relative group ${router.pathname === '/Blogs' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/Blogs" className="hover:text-red-800 font-bold transition-colors duration-300">
              Blogs
            </Link>
            {router.pathname === '/Blogs' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          <li className={`relative group  bg-red-700 p-1 ${router.pathname === '/Contact' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/Contact" className="hover:text-white-800 text-white p-4 font-bold transition-colors duration-300">
              Contact
            </Link>
            {router.pathname === '/Contact' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300"></span>}
          </li>
          {/* <li className={`relative group ${router.pathname === '/tshirt' ? 'text-red-800' : 'text-gray-800'}`}>
            <Link href="/tshirt"  className="hover:text-red-800" >
                T-Shirts
            </Link>
            {router.pathname === '/tshirt' && <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-500 transition-all duration-300"></span>}
          </li> */}

        </ol>
      </div>
    </div>
  );
};

export default Navbar;
