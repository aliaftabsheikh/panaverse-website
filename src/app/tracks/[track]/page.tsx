import CourseDetailCover from "@/components/shared/CourseDetailCover/page";
import { QuartersData } from "@/types/types";
import React from "react";

interface dataType {
  trackName: string;
  data: QuartersData;
}

async function getData(params: any, searchParams: any) {
  const res = await fetch(
    `https://panaverse-silk.vercel.app/api/tracks/${params.track}?quarter=${searchParams.quarter}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Page({ params, searchParams }: any) {
  const data: dataType = await getData(params, searchParams);
  console.log(data.trackName);

  return (
    <main className="bg-primary-color flex justify-center">
      <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 ">
        <CourseDetailCover trackName={data.trackName} id={data?.data.id} />
      </section>
    </main>
  );
}

export default Page;
