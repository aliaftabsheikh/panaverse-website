import CourseDetailContent from "@/components/shared/CourseDetailContent/page";
import CourseDetailCover from "@/components/shared/CourseDetailCover/page";
import CourseQuartersCard from "@/components/shared/CourseQuartersCard/page";
import { QuartersData } from "@/types/types";
import React from "react";

// async function getData(params: any) {
//   const res = await fetch(
//     `https://panaverse-silk.vercel.app///api/compulsory/${params.quarter}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }
interface dataType {
  compulsoryQuarter: string;
  data: QuartersData;
}

async function fetchData(params: any) {
  const res = await fetch(
    `https://panaverse-silk.vercel.app/api/compulsory/${params.quarter}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Page({ params }: { params: { quarter: string } }) {
  const data: QuartersData = await fetchData(params);

  return (
    <>
      <main className="bg-primary-color flex justify-center">
        <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 ">
          <CourseDetailCover id={data?.id} />
        </section>
      </main>


{/* Content-section */}

      <main className="flex justify-center bg-secondary-color">
        <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 ">
          <div className="flex justify-between gap-8 md:flex-col-reverse ">
            <CourseDetailContent data={data}/>

            <CourseQuartersCard data={data}/>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
