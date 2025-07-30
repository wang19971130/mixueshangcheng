import React from 'react'
import Image from 'next/image'
import aImg from "../../../public/images/b.jpg"

export default function Page() {



  return (
    <div className=' w-auto h-screen   relative' >
        <div className=' text-white absolute inset-0 -z-10' >
          <Image src={aImg} alt="bg" fill  style={{objectFit:'cover'}} />
          <div className='absolute inset-0 bg-gradient-to-r from-gray-700'></div>
        </div>
          <div className='flex w-auto h-full justify-center items-center'>
            <h1 className='text-white text-5xl'>
              曾经沧海难为水,除却巫山不是云.
            </h1>
        </div>
    </div>
  )
}
