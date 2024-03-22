'use client'
import JobCards from "@/components/JobCards";
import Image from "next/image";
import { useEffect, useState } from "react";


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

export default function Home() {

  const [allJobData, setAllJobData] = useState()
  // const allJobData = getJobData()
  
  useEffect(()=>{
    getJobData()
    .then((res)=>{
        setAllJobData(res)
    })
  },[])


  return (
    <>

    <div className="w-full flex  justify-center flex-col items-center">
      <div className="w-full sm:w-1/2 h-52 bg-red-400 flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white">Find Your Dream Job !!</h1>
        </div>
      <div className="sm:w-[900px] w-full grid sm:grid-cols-3 gap-3 p-2">

    {allJobData?allJobData.data.map((jobData)=>{
      return (
        <div key={jobData._id}>
        <JobCards jobData={jobData}/>
        </div>
      )}
    ):<></>}
    
    </div>
    </div>
    

    </>
  );
}
