import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../../../../public/constants";

export default function Hero() {
  return (
    <>
      <main className="w-full text-white flex justify-center items-center py-4 bg-primary-color">
        <Image
          className="absolute top-0 left-0 z-10 lg:w-3/4 md:w-1/2 sm:hidden"
          src={images.heroBg} 
          alt="hero-bg"
        />
        <circle className="blurGreenCircle absolute top-0 right-0 mt-64"></circle>

        <section className="flex justify-between items-center gap-4 w-[1280px] px-6  md:px-4 sm:px-2 mt-10 md:flex-col sm:justify-around ">
          <div className="w-3/4 lg:w-1/2 md:w-full">
            <h2 className="text-5xl lg:text-4xl xs:text-3xl font-bold text-white tracking-wide">
              Web 3.0 And <br /> <span className="text_gradient">Metaverse</span> <br /> Development
            </h2>
            <p className="mt-6 text-gray-400">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </p>
            <p className="mt-4 font-thin">
            All students must complete the first two quarters, and the remaining two are for specialization in different fields
            </p>
            <Link href="https://www.piaic.org/" target="_blank">
            <button className="btngradient py-4 px-8 rounded-full mt-8 text-lg font-semibold md:text-base">
              Apply Now
            </button>
            </Link>
          </div>

          <div className="w-1/2 md:w-3/4 sm:w-2/3 xs:w-full items-center flex justify-center">
            <Image
              className="w-full h-auto sm:mt-6"
              src={images.heroMain}
              alt="Hero-section-img"
            />
          </div>
        </section>
      </main>
    </>
  );
}
