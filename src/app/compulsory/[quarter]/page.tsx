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

async function fetchData(params: any) {
  const res = await fetch(
    `https://panaverse-silk.vercel.app///api/compulsory/${params.quarter}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Page({ params }: { params: { quarter: string } }) {
  const data: QuartersData = await fetchData(params);

  if (!data) {
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
      {data ? (
        <main className="bg-[#021327] flex justify-center">
          <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16">
            <Image src={images.courses_main} />

            <h1>{data.main_title}</h1>
            <p>{data.description}</p>
          </section>
        </main>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-center items-center py-28">
            <h1 className="text-2xl ">Track Not Found !</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
