import Image from "next/image";
import React from "react";
import { images } from "../../../../public/constants";

export default function Hero() {
  return (
    <main
      className=" w-full text-white flex justify-center items-start py-4 bg-[#021327]"
    >
      <Image
        className="absolute top-0 left-0 z-10 lg:w-3/4 md:w-1/2 sm:hidden"
        src={images.heroBg}
        alt="hero-bg"
      />
      <circle className="blurGreenCircle absolute top-0 right-0 mt-64"></circle>

      <section className="flex justify-between items-center gap-4 w-[1280px] px-6 mt-10 md:flex-col sm:justify-around">
        <div className="w-3/4 lg:w-1/2 md:w-full">
          <h2 className="text-5xl lg:text-4xl font-bold text-white">
            Web 3.0 <br /> And Metaverse <br /> Development
          </h2>
          <p className="mt-6 text-gray-300 text-lg md:text-base">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </p>
          <p className="mt-4 text-lg md:text-base">
            First two quarters are compulsary for everyone and remaining two are
            the specialization in different domains
          </p>
          <button className="btngradient py-4 px-8 rounded-full mt-8 text-lg font-semibold">
            Apply Now
          </button>
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
  );
}
