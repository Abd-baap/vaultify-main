import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
const Herosection = () => {
  return (
    <div className='md:flex-row flex flex-col-reverse w-[100%] justify-between items-center  p-8 shadow-sm hover:shadow-xl rounded-md gap-6 herosection'>
      <div className="text flex flex-col gap-2 md:gap-1 xl:gap-2  text-center items-center">
        
 <div className='flex'> 
    <span className="text-3xl font-bold block w-[80%] gap-2 items-center"><span className=" w-[100%] h-min text-blue-900 "> One Vault,</span>Peace of Mind.
    </span>      <Image src='/vault.png' width={50} height={15}  alt='Heading vault herosection image' className="h-[50%]"></Image></div>
    <span className=" text-xl font-bold w-[80%]">Simple safe and smart - BitAegiris keeps your credentials under lock and key</span>
   <Link href='/password' className='md:w-[30%] w-[50%]'> <Button className='w-[100%]' >Get Started!</Button>
   </Link>
      </div>
      <div className="image h-[80%]">
        <Image src='/herosection.webp' width={425} height={425} alt='herosection image secure vault' className='rounded-md' ></Image>
      </div>
    </div>
  )
}

export default Herosection
