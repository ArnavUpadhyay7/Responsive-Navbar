"use client"
import React, { useState } from 'react'
import NavLinks from './NavLinks';

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (

    <div className='bg-[#3498db] text-white flex sticky top-0 justify-between md:pr-20 md:pl-8 pr-4 pl-4 md:py-8 py-4'>
      
        <img className='size-12' src='https://cdn-icons-png.flaticon.com/128/3015/3015824.png'/>      

      <div className='hidden md:flex gap-16'>
        <NavLinks />
      </div>
      {isOpen && 
        <>
        <div>
          <button className='md:hidden absolute top-5 right-4' onClick={toggle}>  
         <img className='size-8' src='https://cdn-icons-png.flaticon.com/128/1828/1828774.png'/> 
            
          </button>
          <div className='flex flex-col gap-5 my-14 h-32 w-18'>
            <NavLinks />
          </div>
        </div>
        </>
      }
      {!isOpen &&
        <button className='md:hidden' onClick={toggle}>  
          <img className='size-10' src='https://cdn-icons-png.flaticon.com/128/8867/8867520.png'/>
        </button>
      }

    </div>
  )
}

export default Navbar