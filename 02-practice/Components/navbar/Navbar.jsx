import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className = 'bg-pink-500  flex item-center justify-between px-6 text-2xl h-20 w-full'> 
    <h2>Sandy</h2>
    <div className = 'flex gap-10'>
        <Link href='/' >Home </Link>
        <Link href='/about' >about </Link>
           <Link href='/contact' >contact </Link>
           <Link href ='/product'>product </Link>
           <Link href='/courses'>courses</Link>
    </div>
    
    </div>
  )
}

export default Navbar