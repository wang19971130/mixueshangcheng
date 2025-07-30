"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import React from 'react'

const LinkData =[
    {
        path:'/performance',
        name:'performance',
    },
    {
        path:'/reliability',
        name:'reliability',
    },
    {
        path:'/scale',
        name:'scale',
    }
]

export default function Header() {

const pathname = usePathname()

  return (
    <div className=" absolute w-full z-10 ">
          <div className="flex justify-between items-center p-8 text-white container mx-auto">
          <Link className="text-3xl font-bold" href="/"> Home</Link>
          <div className="text-xl space-x-4">
            {
                LinkData.map((item)=>(
                <Link key={item.path} className={`${pathname === item.path ? ' text-blue-700' : ''}`}  href={item.path}>{item.name}</Link>
                ))
            }
          </div>
        </div>
        </div>
  )
}
