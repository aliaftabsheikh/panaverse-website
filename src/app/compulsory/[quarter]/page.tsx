import CourseDetailContent from "@/components/shared/CourseDetailContent/page";
import CourseDetailCover from "../../../components/shared/CourseDetailCover/page";
import CourseQuartersCard from "@/components/shared/CourseQuartersCard/page";
import { QuartersData } from "@/types/types";
import React from "react";
import { redirect } from "next/navigation";

async function fetchData(params: any) {
  if (params.quarter > "3") {
    redirect("tracks/wmd?quarter=4");
  }

  const res = await fetch(
    `https://panaverse-dao-ultimate.vercel.app/api/compulsory/${params.quarter}`,
    { cache: "no-cache" }
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
        <circle className="blurBlueCircle absolute top-0 left-0 mt-24"></circle>
        <circle className="blurGreenCircle absolute top-0 right-0 mt-64"></circle>
        <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 ">
          <CourseDetailCover id={data?.id} />
        </section>
      </main>

      {/* Content-section */}

      <main className="flex justify-center bg-secondary-color">
        <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 ">
          <div className="flex justify-between gap-8 lg:flex-col-reverse ">
            <CourseDetailContent data={data} />

            <CourseQuartersCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
