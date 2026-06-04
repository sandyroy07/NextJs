"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [num,setNum] = useState(0)
  return (
    <div>
      <h1> value of Num is {num}</h1>
      <button onClick= {()=>{
        setNum(num + 10)
      }} >Increase</button>

    </div>
  )
}

export default page