"use client"
import React from 'react'
import Image from "next/image"
import photoImg from "../../../public/images/changtui.png"
export default function Page() {
  return (
    <div className='w-auto h-10/12 text-green-500 bg-pink-300 flex items-center justify-center
       '>
        About Content 111
       <div className=' w-20 h-30 bg-amber-100'>
         <Image className='w-full h-full object-cover' src={photoImg} alt="" />
       </div>
        
        </div>
  )
}
 