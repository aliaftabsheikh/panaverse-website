import CourseDetailContent from "@/components/shared/CourseDetailContent/page";
import CourseDetailCover from "../../../components/shared/CourseDetailCover/page";
import CourseQuartersCard from "@/components/shared/CourseQuartersCard/page";
import { QuartersData } from "@/types/types";
import React from "react";

interface dataType {
  trackName: string;
  data: QuartersData;
}

async function getData(params: any, searchParams: any) {
  const res = await fetch(
    `https://panaverse-dao-ultimate.vercel.app/api/tracks/${params.track}?quarter=${searchParams.quarter}`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}



async function Page({ params, searchParams }: any) {
  const data: dataType = await getData(params, searchParams);

  if (!data.data) {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center items-center py-28">
          <h1 className="text-2xl ">Track Not Found !</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="bg-primary-color flex justify-center">
        <circle className="blurBlueCircle absolute top-0 left-0 mt-24"></circle>
        <circle className="blurGreenCircle absolute top-0 right-0 mt-64"></circle>
        <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 ">
          <CourseDetailCover trackName={data.trackName} id={data?.data.id} />
        </section>
      </main>

      {/* Content-section */}

      <main className="flex justify-center bg-secondary-color">
        <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 ">
          <div className="flex justify-between gap-8 md:flex-col-reverse ">
            <CourseDetailContent data={data?.data} />

            <CourseQuartersCard
              trackName={data?.trackName}
              data={data?.data}
              track={params?.track}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
