import { QuartersData } from "@/types/types";
import Image from "next/image";
import React from "react";
import { images } from "../../../../public/constants";

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
  compulsoryQuarter: string,
  data: QuartersData
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
        <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 flex gap-6 justify-between items-center">
          <div>
          <h1>{data.main_title}</h1>
          <p>{data.id}</p>
          </div>
          <div className="">
          <Image src={images.courses_main} alt="tech-circle" />
          </div>

          
        </section>
      </main>
    </>
  );
}

export default Page;
