"use client"
import React from 'react'

export default function TailwindDemoLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <div>TailwindDemoLayout</div>
      {children}
    </div>
  )
}
