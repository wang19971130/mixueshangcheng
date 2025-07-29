import React from 'react'
import Link from 'next/link'
export default function Page() {

  type aType = {
    index:number,
    name:string
  }

  const a:aType[] = [
    {
    index:1,
    name:'哈喽word'
    },
    {
    index:11,
    name:'哈喽word'
    },
    {
    index:12,
    name:'哈喽word'
    },
    {
    index:13,
    name:'哈喽word'
    },
  ]


  return (
    <div className=' w-auto h-screen bg-amber-100 flex items-center justify-between ' >
     <Link href='/tailwinddemo'>tailwinddemo</Link>
     {
      a.map(({name,index}:aType)=>
      {
        return <div key={index} className=' overflow-hidden p-4 mt-4 w-1/8 shadow  border-2  rounded-lg'>
      
          {
            name
          }
     </div>
      })
     }
     
    </div>
  )
}
