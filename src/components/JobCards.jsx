import React from 'react'

function JobCards({jobData}) {
  return (
    <div className='sm:h-[250px]  w-full h-44 bg-yellow-400  justify-between flex flex-col p-5 rounded-md shadow-md'>
      <div className='flex flex-col'>

      <h1 className='text-2xl font-bold'>{jobData.domain}</h1>
      <h1 className='text-base'>{jobData.company}, {jobData.site}</h1>
      <h1 className='font-bold'>{jobData.stipend}</h1>
      </div>

      <button className='bg-emerald-500 p-2 font-semibold rounded-md hover:bg-emerald-600' >
        Apply Now
      </button>
    </div>
  )
}

export default JobCards
