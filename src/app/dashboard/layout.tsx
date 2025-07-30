"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function DashboardLayout({
    children,}:{
    children:React.ReactNode
}) {
    const [count,setCount] = useState(0)
    const pathname = usePathname()

  return (
    <div className='  border-2 border-dashed border-black p-4 w-4/5 mx-auto mt-10'>
    <div className=' w-auto text-center'>
         <div className='flex items-center justify-center m-4 gap-4 font-bold text-lg   '>
         <Link className={pathname==='/dashboard/about'?'text-purple-500':'' }   href="/dashboard/about" >
           about
         </Link>
         <Link className={pathname==='/dashboard/settings'?'text-purple-500':'' } href="/dashboard/settings">
         settings
         </Link>
     </div>
     <div >DashboardLayout {count}</div>
     <button className=' rounded-md  w-20 mr-10 bg-black text-white p-2 my-4' onClick={()=>setCount(count+1)}>+1</button>
     <button className=' rounded-md  w-20 mr-10  bg-green-500 text-white p-2 my-4' onClick={()=>setCount(count-1)}>-1</button>
    </div>
      {children}
    </div>
  )
}
