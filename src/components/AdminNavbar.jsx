
import Link from 'next/link'
import React from 'react'

function AdminNavbar() {
  return (
    <div>
      <div className='w-full h-16 flex justify-center '>
        <div className='bg-orange-500 h-full p-5 justify-between flex items-center sm:w-1/2 w-full'>
            <ul className='flex gap-4 items-center'>
                <Link href='/admin'> 
                <li>Add</li>
                </Link>
                <Link href='/admin/edit'> 
                <li>Edit</li>
                </Link>
                

            </ul>



        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
