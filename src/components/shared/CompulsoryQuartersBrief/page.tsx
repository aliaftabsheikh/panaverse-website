import Link from "next/link";
import React from "react";

function CompulsoryQuartersBrief({ val, desc }: { val: number; desc: string }) {
  return (
    <div className="w-full mt-10">
      <Link href={`/compulsory/${val}`}>
        <div className="w-full bg-secondary-color h-52 rounded-lg  flex items-center justify-center flex-col relative border border-gray-800 hover:scale-105 transition-all ">
          <h2 className="text-[200px] text-[#44DA64] opacity-10 font-bold absolute right-10">
            {val}
          </h2>
          <h3 className="text-3xl font-semibold text_gradient">
            Quarter {val}
          </h3>
          <p className="text-white text-center mt-4">{desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default CompulsoryQuartersBrief;
