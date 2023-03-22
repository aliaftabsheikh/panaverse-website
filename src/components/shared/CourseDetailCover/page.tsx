import Image from "next/image";
import React from "react";
import { images } from "../../../../public/constants";

function CourseDetailCover({
  id,
  trackName,
}: {
  id: number;
  trackName?: string;
}) {
  return (
    <div className="flex justify-between items-center lg:flex-col gap-6">
      <div className="text-white w-1/2 lg:w-full">
          <p className="text-5xl md:text-4xl xs:text-2xl leading-tight tracking-wide text_gradient font-bold">
            {trackName ? trackName : "Common In All"}
          </p>
          <p className="text-5xl md:text-4xl xs:text-2xl tracking-wide font-bold pt-2 leading-tight">
            {trackName ? "Specialization" : "Specializations"}
          </p>

        <div className="bg-secondary-color w-full border border-gray-800   mt-8 rounded-lg">
          <div className="p-6">
            <p className="text-2xl font-medium sm:text-xl">
              Quarter : &nbsp;{id}
            </p>
            <div className="text-sm mt-5 bg-slate-800 p-5 text-center rounded-lg w-fit md:text-xs ">
              <p className="font-medium">Duration: &nbsp; ( 13 Weeks )</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 lg:w-full flex justify-end lg:justify-center">
        <Image src={images.courses_main} alt="course-main" />
      </div>
    </div>
  );
}

export default CourseDetailCover;
