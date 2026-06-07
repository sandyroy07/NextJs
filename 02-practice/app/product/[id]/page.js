'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
    const params = useParams();
  
  return (
    <div>
        <h6 className = 'capitalize'>
          {params.id}&apos;s collection
        </h6>
    </div>
  )
}

export default Page