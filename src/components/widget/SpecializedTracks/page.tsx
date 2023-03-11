import SpecializationQuartersBrief from "@/components/shared/SpecializationQuartersBrief/page";
import { specializedTracks } from "@/config";
import React from "react";

function SpecializedTracks() {
  return (
    <main className="bg-[#04182f] flex justify-center">
      <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 specializedTrackBg">
        <div className="flex gap-4 xs:flex-col xs:gap-1">
          <h2 className="text-5xl lg:text-4xl text_gradient font-bold tracking-wide">
            Specialized
          </h2>
          <h4 className="text-white text-5xl lg:text-4xl xs:text-3xl font-bold tracking-wide">
            Tracks
          </h4>
        </div>

        <p className="text-gray-400 mt-4">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
        <div className="grid grid-cols-3 gap-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:gap-4 m-auto w-full mt-10">
          {specializedTracks.map((item, index) => (
            <SpecializationQuartersBrief
            key={index}
              name={item.name}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SpecializedTracks;
