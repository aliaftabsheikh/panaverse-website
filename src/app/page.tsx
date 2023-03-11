"use client"

import CourseBrief from "@/components/widget/CourseBrief/page";
import CompulsoryQuarters from "@/components/widget/CompulsoryQuarters/page";
import Hero from "@/components/widget/Hero/page";
import Image from "next/image";
import { images } from "../../public/constants";
import SpecializedTracks from "@/components/widget/SpecializedTracks/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <div>
    <Image className="w-screen bg-[#04182f]" src={images.heroWavy} alt="wavy-shape" />
    </div>
    <CourseBrief/>
    <CompulsoryQuarters/>
    <SpecializedTracks/>
    </>
  );
}
