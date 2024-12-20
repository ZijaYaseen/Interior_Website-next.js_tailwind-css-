"use client"; 

import React, { useEffect, useState } from 'react'
import ThemeToggler from './ThemeToggler';
import Logo from './Logo';
import Nav from './nav';
import MobileNavigation from './MobileNavigation';
import { usePathname } from 'next/navigation';

const Header = () => {

  const [header, setheader] = useState(false);
  const pathName = usePathname()

  useEffect(() => {
    // Callback function to handle scroll
    const handleScroll = () => {
      window.scrollY > 50 ? setheader(true) : setheader(false);
    };
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <header className={`${header ?
      "py-4 bg-tertiary-DEEFAULT shadow-lg dark:bg-accent"
      :
      "py-6 dark:bg-transparent"
    } sticky top-0 z-50 transition-all ${pathName === "/" && 'bg-[#fff]'}`}>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between '>
          {/*Logo */}
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/* Nav bar Section */}
            <Nav containerStyles= "hidden xl:flex gap-x-8 items-center"
            linkStyles = "relative hover:text-primary transition-all"
            underlineStyles = 'absolute left-0 top-full h-[2px] bg-primary w-full'
            />

            {/* Theme changer */}
            <ThemeToggler />

            {/*Mobile Navigation Section */}
            <div className='xl:hidden'>
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;