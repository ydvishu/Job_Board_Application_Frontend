'use client'
import React, { useState } from 'react'



function Page() {

    const [domain, setDomain] = useState('');
    const [company, setCompany] = useState('');
    const [stipend, setStipend] = useState('');
    const [site, setSite] = useState('');
    const [displayMoodle, setDisplayMoodle] = useState(0)


    const postData = async (data) => {
        try {
      
          const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/jobs`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (response.ok) {
            console.log('POST request successful');
  
            setDisplayMoodle(1)
              setTimeout(() => {
                setDisplayMoodle(0)
              }, 3000)
          } else {
            console.error('POST request failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const submitAddCourse = ()=>{
        const jobDataToAdd = {
            company,
            domain,
            stipend,
            site,
        }
        

        postData(jobDataToAdd).then(
        ()=>{
            setCompany("")
            setDomain("")
            setSite("")
            setStipend("")
        }
        )


    }


  return (


    <div>

<div className='flex flex-col items-center'>
        <div className='p-6 flex flex-col w-full items-center '>

        {displayMoodle ===1? <div className=' h-9 bg-pink-400 flex items-center text-gray-800 text-lg font-bold my-4 p-2'><h1 className='mx-auto'>Job Data Added</h1></div> : <div></div>}
          <h1 className='text-3xl mb-10 font-bold'>Add a Job</h1>
      {/* Inputs for each variable */}
      <h1 className='font-bold'>Domain:</h1>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className='border-[1px] rounded-md border-black/50 p-2 sm:w-1/2 w-full mb-5'
      />
    
      <h1 className='font-bold'>Company:</h1>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className='border-[1px] rounded-md border-black/50 p-2  w-full sm:w-1/2 mb-5 '

      />
      <h1 className='font-bold'>Stipend:</h1>
      <input
        type="text"
        value={stipend}
        onChange={(e) => setStipend(e.target.value)}
        className='border-[1px] rounded-md border-black/50 p-2  w-full sm:w-1/2 mb-5 '

      />
      <h1 className='font-bold'>Site:</h1>
      <input
        type="text"
        value={site}
        onChange={(e) => setSite(e.target.value)}
        className='border-[1px] border-black/50 p-2 sm:w-1/2 mb-5  w-full'

      />

        <button className='bg-emerald-500 p-2 font-semibold rounded-md  hover:bg-emerald-600 w-36'
        onClick={submitAddCourse} >
                Submit
            </button>
    
    </div>
        
    </div>

      
    </div>
  )
}

export default Page
