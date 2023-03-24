"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChakraProvider } from "@chakra-ui/react";
import { images } from "../../../../public/constants";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  const [customNavbar, setCustomNavbar] = useState(false);

  function changeBackground() {
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
          customNavbar ? "bg-[#3f3f5f9c]  backdrop-blur-xl" : "bg-primary-color"
        } ${poppins.className} w-full flex justify-center ${
          customNavbar ? "sticky" : "relative"
        } top-0 navTransition ${customNavbar ? "z-20" : "z-0"}
       `}
      >
        <section className="flex justify-between items-center w-[1280px] px-6 md:px-4 sm:px-2 py-2">
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
              customNavbar ? "text-gray-200" : "text-white"
            } space-x-2  sm:space-x-0  font-semibold `}
          >
            <Link href={"/"} className="cursor-pointer">
              <Button
                className="sm:text-sm"
                bgColor={"transparent"}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              >
                Home
              </Button>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                bgColor={"transparent"}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                width='auto'  
                className="sm:text-sm"
              >
                Tracks <ChevronDownIcon />
              </MenuButton>
              <MenuList className="xs:w-screen xs:text-sm xs:rounded-none xs:mt-4 z-40">
                {tracks.map((item, index) => (
                  <Link key={index} href={`tracks/${item.id}?quarter=4`}>
                    <MenuItem
                    padding={'10px 20px'}
                      color={"gray.700"}
                      className="border-b font-semibold"
                    >
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
