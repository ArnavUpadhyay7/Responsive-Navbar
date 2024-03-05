import Link from 'next/link';
import {React, useState} from 'react'

const NavLinks = () =>{

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <>
        <Link className='md:text-xl text-base font-semibold hover:text-[#2c3e50]' href="#"> Home </Link>
        <Link className='md:text-xl text-base font-semibold hover:text-[#2c3e50]' href="#"> About </Link>
  
        <div className="relative">
            <button onClick={toggleDropdown} className="text-white hover:text-[#2c3e50] font-semibold border-b-black border-b-2 md:text-xl text-base">Services</button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#ebeaea] hover:text-black">Link 1</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#ebeaea] hover:text-black">Link 2</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#ebeaea] hover:text-black">Link 3</Link>
              </div>
            )}
        </div>
  
        <Link className='md:text-xl text-base font-semibold hover:text-[#2c3e50]' href="#"> Contact </Link>
      </>
    )
  }

export default NavLinks