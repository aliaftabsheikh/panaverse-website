import { specializedTracksData } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SpecializationQuartersBrief({name, image, id, quarter}: specializedTracksData) {
  return (
    <div className='w-full hover:scale-[1.02] transition-all drop-shadow-sm'>
        <Link href={`/tracks/${id}?quarter=4`}>
            <div className='bg-primary-color flex flex-col items-center justify-center rounded-lg p-4 overflow-hidden border border-gray-800'>
                <Image className='w-36 h-36  md:w-44 md:h-44' src={image} alt="web3Icon"/>
                <p className='text-white mt-2 text-center  md:text-lg font-medium truncate w-full'>{name}</p>
            </div>
        </Link>
    </div>

  ) 
}

export default SpecializationQuartersBrief