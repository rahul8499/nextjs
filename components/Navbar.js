import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row md:justify-start justify-center  items-center '>
        <div className="logo mx-5">
            <Image  width={200} height= {40} src="/logo.png" alt="" />
        </div>
        <div className="nav ">
            <ul className='flex justify-between items-center space-x-2 font-bold md:text-xl'>
               <Link href={'/'}><li>Tshirt</li></Link> 
                <Link href ={'/'}><li>Hoddies</li></Link>
                <Link href ={'/'}><li>mugs</li></Link>
                <Link href ={'/'}><li>stickers</li></Link>
            </ul>
        </div>
    <div className="cart absolute right-0 mx-5 top-2 ">
        <AiOutlineShoppingCart className='text-3xl'/>

    </div>
    </div>
    </>
  )
}

export default Navbar
