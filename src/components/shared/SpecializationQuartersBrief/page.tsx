import { specializedTracksData } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { images } from '../../../../public/constants'

function SpecializationQuartersBrief({name, image, id}: specializedTracksData) {
  return (
    <div className='w-full hover:scale-95 transition-all'>
        <Link href={`/tracks/${id}`}>
            <div className='bg-[#021327] flex flex-col items-center justify-center rounded-lg p-4'>
                <Image className='w-44 h-44' src={image} alt="web3Icon"/>
                <p className='text-white mt-2 text-center text-xs font-medium'>{name}</p>
            </div>
        </Link>
    </div>
  )
}

export default SpecializationQuartersBrief