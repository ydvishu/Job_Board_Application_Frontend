import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='w-full h-16 flex justify-center '>
        <div className='bg-orange-400 h-full p-5 justify-between flex items-center sm:w-1/2 w-full'>
            <ul className='flex gap-4 items-center'>
                <Link href='/'> 
                <li>Home</li>
                </Link>
                <li>Jobs</li>
                <li>Contact</li>

            </ul>

            <Link href='/admin' >
            Admin 
            </Link>


        </div>
      </div>
    </div>
  )
}

export default Navbar
