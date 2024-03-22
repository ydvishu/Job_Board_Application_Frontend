import Link from 'next/link'
import React from 'react'

const deleteJob = async (jobID) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/jobs/${jobID}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log(`successfully deleted job `);
      } else {
        console.error(`Failed to delete`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

function JobCards({jobData, setRefresh}) {

    const deleteJobSubmit = ()=>{

        deleteJob(jobData._id).then(()=>{
            setRefresh(prev => prev+1)
        })

    }
  return (
    <div className='sm:h-[250px]  w-full h-44 bg-sky-400  justify-between flex flex-col p-5 rounded-md shadow-md'>
      <div className='flex flex-col'>

      <h1 className='text-2xl font-bold'>{jobData.domain}</h1>
      <h1 className='text-base'>{jobData.company}, {jobData.site}</h1>
      <h1 className='font-bold'>{jobData.stipend}</h1>
      </div>

        <div className='flex gap-2 justify-start'>

       <Link href={`/admin/edit/${jobData._id}`}>
      <button className='bg-red-400 p-2 font-semibold rounded-md hover:bg-red-500' >
        Edit
      </button>
       </Link> 

        
      <button className='bg-red-400 p-2 font-semibold rounded-md hover:bg-red-500'onClick={deleteJobSubmit} >
        Delete
      </button>
        </div>
    </div>
  )
}

export default JobCards
