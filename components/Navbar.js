import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart ,AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';
import { BsFillBagCheckFill} from 'react-icons/bs';

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
            <ul className='flex justify-between items-center space-x-6 font-bold md:text-md cursor-pointer'>

               <Link href={'/tshirt'}><li>Tshirt</li></Link> 
                <Link href ={'/hoodies'}><li>Hoddies</li></Link>
                <Link href ={'/stickers'}><li>stickers</li></Link>
                <Link href ={'/mugs'}><li>mugs</li></Link>
            </ul>
        </div>
    <div onClick={toggleCart} className=" cursor-pointer cart absolute right-0 mx-5 top-2 ">
        <AiOutlineShoppingCart className='text-3xl'/>

    </div>

    {/* cart sidebar */}
    <div  ref={ref} className=" w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8  transition-transform translate-x-full">
<h2 className='font-bold texl-lg text-center mt-1'>Shopping Cart</h2> 
<span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle className='cursor-pointer'/></span>
<ol className='list-decimal font-semibold ' >
    <li>
        <div className="item flex my-8 ">

       <span className='w-2/3 font-semibold'>tshirt-clothes</span>
       <span className='flex items-center justify-center font-semibold 1/3 texl-lg'> <AiFillPlusCircle className='cursor-pointer text-pink-500'/><span className='mx-2' >1</span> <AiFillMinusCircle className='cursor-pointer text-pink-500'/></span>
        </div>
    </li>
       <li>
        <div className="item flex my-8">

       <span className='w-2/3 font-semibold'>tshirt-clothes</span>
       <span className='flex items-center justify-center font-semibold 1/3 texl-lg'><AiFillPlusCircle className='cursor-pointer text-pink-500' /><span className='mx-2' >1</span> <AiFillMinusCircle className='cursor-pointer text-pink-500'/></span>
        </div>
    </li>
       <li>
        <div className="item flex my-8 ">

       <span className='w-2/3 font-semibold'>tshirt-clothes</span>
       <span className='flex items-center justify-center font-semibold 1/3 texl-lg'><AiFillPlusCircle className='cursor-pointer text-pink-500'/><span className='mx-2' >1</span> <AiFillMinusCircle className='cursor-pointer text-pink-500'/></span>
        </div>
    </li>
       <li>
        <div className="item flex  my-8   ">

       <span className='w-2/3 font-semibold'>tshirt-clothes</span>
       <span className='flex items-center justify-center font-semibold 1/3 texl-lg'><AiFillPlusCircle  className='cursor-pointer text-pink-500'/> <span className='mx-2' >1</span><AiFillMinusCircle  className='cursor-pointer text-pink-500'/> </span>
        </div>
    </li>
</ol>
<div className="flex">
<button className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Checkout</button>

    <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">ClearCart</button>
</div>
    

    </div>
    </div>
    </>
  )
}

export default Navbar
