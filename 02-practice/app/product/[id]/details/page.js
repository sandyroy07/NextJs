'use client'


import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {

  const {id} = useParams()

  return (
    <div>
      <h6 className='capitalize'>{ id}'s product details</h6>
    </div>
  )
}

export default Page