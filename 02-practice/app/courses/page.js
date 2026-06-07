import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
        <h6>All Courses</h6>
        <Link className='m-2 text-2xl' href='/courses/cohort1'>cohort 1</Link>
         <Link className='m-2 text-2xl' href='/courses/cohort2'>cohort 2</Link>
          <Link className='m-2 text-2xl' href='/courses/cohort3'>cohort 3</Link>
    </div>
  )
}

export default Page