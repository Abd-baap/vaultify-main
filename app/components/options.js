import Link from 'next/link'
import React from 'react'
import '../globals.css'
const Choice = () => {
  return (
    <div className='flex w-[80%] my-8 justify-evenly items-center flex-col text-center'>
        <h1 className="text-3xl font-bold w-[100%]">What You Want To Save?</h1>
        <div className="flex xl:flex-row flex-col my-8 justify-between gap-4 w-[80%] items-center">
                 <Link href='/notes'><div className=" text-white bg-blue-800 option flex text-2xl rounded-xl font-bold w-48 h-48 justify-center items-center">Notes</div> </Link>
      <Link href='/password'><div className=" text-white bg-blue-800 text-2xl option rounded-xl font-bold flex w-48 h-48 justify-center items-center">Password</div> </Link>
      </div>
      <span className='text-blue-700'>
        <Link href='/forgot-mastercode'>Forgot Mastercode?</Link>
    
        <div className="tip text-xl sm:w-[50%] w-[80%] flex justify-center items-center"><Link className='text-blue-700 underline w-[100%]' href='/suggestion'>Want to get some personalized tips for enhancing security?</Link></div>
      
      </span>
 
    </div>
  )
}

export default Choice
