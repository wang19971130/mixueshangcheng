"use client"
import { useState } from 'react'
import meinvImg from '../../../public/images/meinv.png'
import React from 'react'
import Image from "next/image"

export default function Page() {



    const [countArray] = useState([1,2,3,4,5,6,7,8,9,10])


  return (
    <div className='w-auto h-auto p-10  grid 
                grid-cols-1 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4
                gap-2'>

        {
            countArray.map((i)=>{
                return   <div key={i} className='c h-100 shadow  rounded-lg '>
            <div className='w-full h-5/12 text-white font-bold rounded-t-lg flex items-center justify-center bg-gradient-to-r from-blue-500  to-purple-600 ' >
             <Image className='w-full h-full object-cover' src={meinvImg} alt="" />
            </div>
          <div className='w-auto h-7/12 px-5 '>
           <div className='w-auto text-xs flex font- justify-between pt-4  '>
            <div className='text-blue-700 px-2.5 py-1 bg-blue-200 rounded-lg'>推荐</div>
            <div className='text-gray-600'>2小时前</div>
           </div>
          <div className='text-2xl w-auto py-2  font-bold'>Tailwind CSS 入门教程</div>
          <div className='w-auto text-gray-600 h-3/8 text-base'>功能类优先的 CSS 框架，让你无需编写传统 CSS 就能快速构建美观的界面。</div>
        <div className='w-auto text-sm flex items-center justify-between'>
            <div className='flex items-center '>
                <span className='inline-block bg-green-600  w-8 h-8 mr-2  border rounded-4xl '></span>
                <span>技术达人</span>
            </div>
            <div className='flex items-center text-blue-600 '>
                <span>阅读更多 </span>
                <span className='text-xl'>{` >`}</span>
            </div>
        </div>
      </div>
      </div>
            })
        }

    
      
    </div>
  )
}
