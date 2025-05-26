import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='footer my-8 w-screen flex flex-col gap-6 p-2 bottom-0 py-3 border rounded-md justify-center items-center text-center bg-blue-50 '>
      <h1  className="text-xl font-bold">Secure all your passwords with BitAegiris</h1>
      <p>If you want to let us know what we didn't know</p>
      <div className="flex sm:flex-row flex-col gap-2 sm:justify-around w-[100%] items-center">   <div className="flex contacts  flex-col justify-center items-center">
       <h1 className='font-bold'>Contacts</h1>
       <span><Link rel="nofollow" href='https://www.youtube.com/@DesiEdilances'>Youtube</Link></span>
       <span><Link rel="nofollow" href='https://www.instagram.com/desi_edilances'>Instagram</Link></span>
       <span>Gmail ID : abhigya.abd@gmail.com</span>
      </div>
      <div className='Pages flex flex-col justify-center items-center'>
        <h1 className=' font-bold'>Pages</h1>
        <span><Link href='/'>Home</Link></span>
        <span><Link href='/about'>About Us</Link></span>
        <span><Link href='/support'>Support Us</Link></span>
        <span><Link rel="nofollow" href='/password'>Manage Passwords</Link></span>
      </div>
      </div>
      
   
 <p className='flex gap-1'>&copy;  2025 Secure all your passwords. All Rights Reserved</p>
    </div>
  )
}

export default Footer
