import Image from 'next/image'
import React from 'react'



import { UserButton } from '@clerk/nextjs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex w-[100%] justify-between items-center border p-2 px-6 navbar'>
      <div className="logo flex ">
        <Image src='/logo.gif' height={35} width={35} loading="lazy" unoptimized="true" alt='logo'></Image>
      <span className="font-bold text-xl text-blue-900 ">Bit<span className=' text-black'>Aegiris</span></span>
      </div>
      <div className="dropdown flex justify-center items-start gap-2 sm:gap-4">
       <DropdownMenu>
      <DropdownMenuTrigger><Image src="/index.png" width={35} height={35}alt='index image'></Image></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><Link href='/'>Home</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem><Link href='/suggestion'>Blog</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
    <DropdownMenuItem><Link href='/notes'>Notes</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
     <DropdownMenuItem><Link href='/password'>Password</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
    
        <DropdownMenuItem><Link href='/about'>About</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
     
        <DropdownMenuItem><Link href='/support'>Support</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar
