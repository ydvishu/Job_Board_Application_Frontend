'use client'
import JobCardEdit from '@/components/JobCardEdit'
import React, { useEffect, useState } from 'react'

// function to get the data of all the jobs that is available on the backend
async function getJobData() {

    try {

        // getting job data from the backend
        console.log("Inside the fetch request")
        const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/jobs`)


        console.log("Fetch req result", result)
        if (!result.ok) {
            // if for some reason we dont recieve the response then we will throw an error to the nearest catch block
            throw new Error('Failed to fetch data')
        }

        return result.json()

    } catch (error) {
        console.log(error)
    }

}

function Edit() {

    const [allJobData, setAllJobData] = useState()
    const [refresh, setRefresh] = useState(1)


    useEffect(() => {
        getJobData()
            .then((res) => {
                setAllJobData(res)
            })
    }, [refresh])

    return (
        <div className='w-full flex  justify-center flex-col items-center'>
            <div className="sm:w-[900px] w-full grid sm:grid-cols-3 gap-3 p-2">


                {allJobData ? allJobData.data.map((jobData) => {
                    return (
                        <div key={jobData._id}>

                        <JobCardEdit jobData={jobData} setRefresh={setRefresh} />
                        </div>

                    )
                }) : <></>}
            </div>


        </div>
    )
}

export default Edit
