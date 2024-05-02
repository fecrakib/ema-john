import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import  logo from '../../../../images/favicon.ico'
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <div>
         <nav className="bg-gray-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className="text-white font-bold"><img className='w-[30px]' src={logo} alt="" /></a>
                </div>
                <div className="hidden md:flex flex-grow justify-center">
                    <a href="#" className="text-white mx-4">Home</a>
                    <a href="#" className="text-white mx-4">About</a>
                    <a href="#" className="text-white mx-4">Services</a>
                    <a href="#" className="text-white mx-4">Contact</a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <CiMenuBurger />
                    </button>
                </div>
            </div>

            {
            isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-2 px-4">
                    <a href="#" className="block my-2">Home</a>
                    <a href="#" className="block my-2">About</a>
                    <a href="#" className="block my-2">Services</a>
                    <a href="#" className="block my-2">Contact</a>
                </div>
            )
            }
        </nav>

        </div>
    
  )
}

export default Header