import { compulsoryQuartersOutline } from "@/config";
import React from "react";
import CompulsoryQuartersBrief from "../../shared/CompulsoryQuartersBrief/page";

function CompulsoryQuarters() {
  return (
    <main className="bg-primary-color flex justify-center">
      <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16">
        <div className="flex gap-4 xs:flex-col xs:gap-1">
          <h2 className="text-5xl lg:text-4xl text_gradient font-bold tracking-wide">
            Essential
          </h2>
          <h4 className="text-white text-5xl lg:text-4xl xs:text-3xl font-bold tracking-wide">
            Courses
          </h4>
        </div>
        <div className="mt-4">
          <h5 className="text-white text-lg font-normal">
            Core Courses (Common in All Specializations)
          </h5>
          <p className="font-extralight text-gray-400">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1 md:gap-4 m-auto w-full">
{
    compulsoryQuartersOutline.map((item, index)=>(
        <CompulsoryQuartersBrief key={index} val={item.id} desc={item.description} />
    ))
}
        </div>
      </section>
    </main>
  );
}

export default CompulsoryQuarters;
