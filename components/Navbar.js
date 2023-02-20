import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row md:justify-start justify-center my-2 items-center shadow-md '>
        <div className="logo mx-5">
         <Link href={'/'}>  <a ><Image  width={200} height= {40} src="/logo.png" alt="" /> </a> </Link>
        </div>
        <div className="nav ">
            <ul className='flex justify-between items-center space-x-6 font-bold md:text-md'>

               <Link href={'/tshirt'}><li>Tshirt</li></Link> 
                <Link href ={'/hoodies'}><li>Hoddies</li></Link>
                <Link href ={'/stickers'}><li>stickers</li></Link>
                <Link href ={'/mugs'}><li>mugs</li></Link>
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
