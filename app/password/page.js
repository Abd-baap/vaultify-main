"use client"
import Manager from "../components/manager";\
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

import { Button } from "@/components/ui/button";
import {useEffect, useState  } from "react";
import { useUser } from "@clerk/nextjs";
import { Adding, Getting } from "../functions/privatemetadata";;
import Link from 'next/link'
import {  toast } from 'react-toastify';

export default function Password() {
  const [Mastercode, setMastercode] = useState('')
  const [code, setcode] = useState('')
    const User=useUser()
  
    const Addingdata=async() => {
     await Adding(User?.user?.id,Mastercode)
     toast("Mastercode Saved, Dont share it to anyone")


     setcode( Mastercode);  }
    const functi=async() => {
      // const userid=await currentUser()
      let data=await Getting()
     
      if (data&& data.Mastercode) {
        setcode(data.Mastercode);
      }
      
    }
    useEffect(() => {
      functi()
    
      
    }, [])
  return(
    
    <div>
     <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      
    <SignedIn>
    {code&& <Manager/>}
{!code && <div className="flex flex-col w-[100%] justify-center items-center h-[100%] gap-6  shadow-md hover:shadow-xl py-6 text-center"  >
  
  
  <h1 className="font-bold text-2xl">Enter Your Mastercode</h1>
  <p className="font-bold text-xl">Get Set Go with just 4 digit number ,just remember this code and u can access all the passwords</p>
  
  
  <div className="input flex sm:flex-row flex-col gap-2 justify-center items-center">
      <label htmlFor="mastercode font-semibold">Mastercode :</label>
  
      <input type="number" name="mastercode" id="mastercode" className="border-2 p-1 px-4 rounded-xl " placeholder="Enter Your Mastercode" value={Mastercode} onChange={(e)=>setMastercode(e.target.value)} />
      
      </div>
  
  
      {Mastercode.length !==4 && <span className="text-red-500 font-bold">* It should be 4 digit</span>}
  
  
      {Mastercode.length ===4 && <Button className='sm:w-[40%] w-[70%]' onClick={()=>Addingdata()}>Save</Button>}
      
       <div className="tip sm:w-[50%] w-[80%] p-4 text-xl text-blue-700">Tip : Add double verification to all your accounts.</div>
   
        
        </div>}
        </SignedIn>
    </div>
  )
}
