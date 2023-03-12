import Link from "next/link";
import React from "react";

function CompulsoryQuartersBrief({val, desc}: {val: number, desc: string}) {
  return (
    <div className="w-full mt-10">
        
    <Link href={`/compulsory/${val}`} >

      <div className="w-full btngradient h-52 rounded-lg  flex items-center justify-center flex-col ">
        <h2 className="text-9xl text-gray-900 opacity-40 font-extrabold">{val}</h2>
        <h3 className="text-3xl font-semibold text-slate-800">Quarter {val}</h3>
      </div>
      <div className="bg-white w-[95%] m-auto rounded-lg shadow-lg py-4 -my-5 h-48 md:h-36 px-4 flex items-center justify-center xs:h-auto  drop-shadow-lg"> 
        <p className="text-slate-800  hover:underline hover:text-[#44DA64] transition-all text-center">
          {desc}
        </p>
      </div>
    </Link>
    </div>
  );
}

export default CompulsoryQuartersBrief;
