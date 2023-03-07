"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
    <header
      className={`${
        customNavbar
          ? "bg-[#ffffffe5]  backdrop-blur-xl"
          : "bg-transparent"
      } w-full flex justify-center ${
        customNavbar ? "sticky" : "relative"
      } top-0 navTransition
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
          } space-x-4 md:space-x-6 text-sm font-semibold`}
        >
          <Link href={"/"} className="px-5 cursor-pointer md:px-0">
            <Button
              px={0}
              className="text-lg xl:text-[16px] md:text-sm"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              bgColor={"transparent"}
            >
              Home
            </Button>
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              px={0}
              width="auto"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              className="text-lg xl:text-[16px]  sm:px-0 md:text-sm"
              bgColor={"transparent"}
              rightIcon={<ChevronDownIcon />}
            >
              Tracks
            </MenuButton>
            <MenuList
              padding={"10px 0"}
              bgColor="rgba(255,255,255,1)"
              className="sm:w-[100vw] sm:text-sm sm:rounded-none rounded-lg  border-blue-100 border-2 sm:mt-4"
            >
              {tracks.map((val, index) => {
                return (
                  <Link key={index} href={`/tracks/${val.id}?quarter=4`}>
                    <MenuItem
                    color={"GrayText"}
                      className= "border-b"
                      _hover={{ bg: "#e6e8f7" }}
                      padding={"10px 20px"}
                    >
                      {val.name}
                    </MenuItem>
                  </Link>
                );
              })}
            </MenuList>
          </Menu>
        </div>
      </section>
    </header>
  );
}
