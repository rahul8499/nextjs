import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart ,AiFillCloseCircle} from 'react-icons/ai';

const Navbar = () => {
const toggleCart = ()=>{
    if(ref.current.classList.contains('translate-x-full'))
    {
        ref.current.classList.remove('translate-x-full')
        ref.current.classList.add('translate-x-0')
    }
     else if(!ref.current.classList.contains('translate-x-full'))
    {
        ref.current.classList.remove( 'translate-x-0')
        ref.current.classList.add('translate-x-full')
    }

}

    const ref =useRef ()
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
    <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-2 ">
        <AiOutlineShoppingCart className='text-3xl'/>

    </div>

    {/* cart sidebar */}
    <div ref={ref} className="sideCart absolute top-0 right-0 bg-pink-100 p-10  transition-transform translate-x-full">
<h2 className='font-bold text-xl'>Shopping Cart</h2> 
<span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle/></span>
<ul>
    <li>
       <span>tshirt-clothes</span>
    </li>
</ul>
    </div>
    </div>
    </>
  )
}

export default Navbar
