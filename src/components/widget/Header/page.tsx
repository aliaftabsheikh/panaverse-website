"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChakraProvider } from "@chakra-ui/react";

import { images } from "../../../../public/constants";

export default function Header() {
  const [customNavbar, setCustomNavbar] = useState(false);

  function changeBackground() {
    console.log(window.scrollY);

    if (typeof window !== undefined) {
      if (window.scrollY >= 40) {
        setCustomNavbar(true);
      } else {
        setCustomNavbar(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, [customNavbar]);

  let tracks = [
    { name: "Web 3 and Metaverse", id: "wmd" },
    { name: "Cloud-Native Computing", id: "cnc" },
    { name: "Artificial Intelligence (AI) and Deep Learning", id: "ai" },
    { name: "Ambient Computing and IoT", id: "iot" },
    { name: "Genomics and Bioinformatics", id: "gbs" },
    { name: "Network Programmability and Automation", id: "npa" },
  ];

  return (
    <ChakraProvider>
      <header
        className={`${
          customNavbar ? "bg-[#ffffffe5]  backdrop-blur-xl" : "bg-[#021327] "
        } w-full flex justify-center ${
          customNavbar ? "sticky" : "relative"
        } top-0 navTransition ${customNavbar ? "z-20" : "z-0"}
       `}
      >
        <section className="flex justify-between items-center w-[1280px] px-6 py-2">
          <Link href={"/"}>
            <Image
              className="w-32 md:w-28 xs:w-24"
              src={
                customNavbar ? images.panaverseLogo : images.panaverseLogoWhite
              }
              alt="panaverse-logo"
            />
          </Link>

          <div
            className={`flex items-center ${
              customNavbar ? "text-black" : "text-white"
            } space-x-4 md:space-x-6 sm:space-x-4 xs:space-x-1 font-semibold `}
          >
            <Link href={"/"} className="cursor-pointer">
              <Button bgColor={'transparent'} _hover={{bg: 'transparent'}} className="text-lg sm:text-base xs:text-sm">Home</Button>
            </Link>
            <Menu>
              <MenuButton
                bgColor={'transparent'}
                className="text-lg sm:text-base xs:text-sm"
              >
                Tracks <ChevronDownIcon />
              </MenuButton>
              <MenuList className="xs:w-screen xs:text-sm xs:rounded-none xs:mt-4">
                {tracks.map((item, index) =>(
                  <Link key={index} href={item.id}>
                  <MenuItem color={"GrayText"}  className="border-b">
                  {item.name}
                  </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </div>
        </section>
      </header>
    </ChakraProvider>
  );
}
