"use client"

import CourseBrief from "@/components/widget/CourseBrief/page";
import Hero from "@/components/widget/Hero/page";
import Image from "next/image";
import { images } from "../../public/constants";

export default function Home() {
  return (
    <>
    <Hero/>
    <div>
    <Image className="w-screen bg-[#04182f]" src={images.heroWavy} alt="wavy-shape" />
    </div>
    <CourseBrief/>
    </>
  );
}
