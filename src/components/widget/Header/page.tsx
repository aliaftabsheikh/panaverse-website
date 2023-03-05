"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { images } from "../../../../public/constants";

export default function Header() {

  const [customNavbar, setCustomNavbar] = useState(false)

  const changeBackground = ()=>{
    
    if(window.scrollY >= 80){
      setCustomNavbar(true)
    }else{
      setCustomNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
      <header className={`${customNavbar ? 'bg-white' : 'bg-transparent'} w-full flex justify-center ${customNavbar ? 'sticky' : 'relative'} top-0 transition-all ${customNavbar ? '' : 'bgtop-lines-s'} `}>
        <section className="flex justify-between items-center w-[1200px]">
          <Link href={'/'}>
          <Image
            className="w-28 py-2"
            src={customNavbar ? images.panaverseLogo : images.panaverseLogoWhite}
            alt="panaverse-logo"
          />
          </Link>

          <ul className={`flex ${customNavbar ? 'text-black' : 'text-white'}  space-x-5 cursor-pointer font-semibold`}>
            <li>
              Home
            </li>
            <li>
              Courses
            </li>
          </ul>
        </section>
      </header>

    

  );
}
