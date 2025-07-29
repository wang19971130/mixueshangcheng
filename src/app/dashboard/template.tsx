"use client"
import React, { useState } from 'react'

export default function DashboardTemplate({
    children
}: {
    children: React.ReactNode
}) {

    const [count, setCount] = useState(0)

    return (
        <div className='border-2 h-100 border-dashed border-black  w-4/5 mx-auto '>
            <div> DashboardTemplate{count} </div>
            <button className='bg-black w-20 cursor-pointer h-10 text-white rounded-md mr-2.5 '
                onClick={() => setCount(count + 2)}
            >+2</button>
            <button className='bg-amber-500 cursor-pointer  h-10 w-20 rounded-md '
                onClick={() => setCount(count - 2)}
            >-2</button>
           
            {children}
        </div>
    )
}
// layout 会保存路由的状态
// template 不会保存路由的状态