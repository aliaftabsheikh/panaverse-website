import { QuartersData } from "@/types/types";
import Link from "next/link";
import React from "react";

function CourseQuartersCard({
  trackName,
  data,
  track,
}: {
  trackName?: string;
  data: QuartersData;
  track?: string;
}) {
  return (
    <div className="w-[350px] md:w-full h-fit md:border border-zinc-800 md:rounded-lg flex-shrink-0 sticky md:relative md:top-0 top-32">
      <div className="h-fit rounded-lg p-3 bg-slate-800">
        <h1 className="text-2xl text_gradient font-bold">
          Detail Course Syllabus
        </h1>
        <p className="text-gray-400 mt-2">
          {" "}
          All students must complete the first two quarters, and the remaining
          two are for specialization in different fields
        </p>

        <div className="mt-4">
          {[1, 2, 3].map((item, index) => (
            <Link className="flex gap-8 items-center pt-4" key={index} href={`compulsory/${item}`}>
                <span className="w-10 h-10 p-2 rounded-md btngradient text-center text-lg font-bold">{item}</span>
              <p className="text-xl text-gray-200 ">
                Quarter : &nbsp;{item}
              </p>
            </Link>
          ))}
          {trackName && (
            <div>
              {[4, 5].map((item, index) => (
                <Link className="flex gap-8 items-center pt-4" key={index} href={`/tracks/${track}?quarter=${item}`}>
                    <span className="w-10 h-10 p-2 rounded-md btngradient text-center text-lg font-bold">{item}</span>
                  <p className="text-xl text-gray-200">
                    Quarter : &nbsp;{item}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseQuartersCard;
