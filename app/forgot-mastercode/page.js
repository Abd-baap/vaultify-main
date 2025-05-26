"use client"


import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
const page = () => {
    const user=useUser()
    const router=useRouter()
    const deleteall=async() => {
       
      const response = await fetch("https://bitaegiris.vercel.app/api/deleteall", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id:user?.user?.id })
    });
    const result = await response.json();
    console.log('result', result)
router.push('/password');
    }
    
  return (

          <div className='w-screen h-screen gap-[5%]  shadow-xl shadow-blue-100 flex flex-col items-center  text-center p-8 my-8'>
      <h1 className="text-2xl font-bold">
        Forgot Your Mastercode Dont Worry , Click On Confrm Button . By clicking on confirm button your all passwords and notes will be deleted and u can set new mastercode
      </h1>
      <div className="flex sm:w-[50%] xl:w-[30%] w-[80%] justify-between items-center">
      <Button className='w-[30%] bg-blue-800 text-white' onClick={()=>deleteall()}>Confirm</Button>
      <Link className='w-[30%] text-white' href='/manager'><Button className='w-[100%] bg-blue-800 text-white'>Cancel</Button></Link>
      </div>
    </div>
  )
}

export default page
