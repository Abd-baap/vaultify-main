"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import { v4 as uuidv4 } from 'uuid';
import React, { useState,useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { ToastContainer,toast } from 'react-toastify';
const Notes = () => {
  const User=useUser()
const [form, setform] = useState({
    text:"",
    image:"",
    list:""
})
const [show, setShow] = useState(false)
const functi=async() => {
  let a= await fetch('https://bitaegiris.vercel.app/api/getnotes')
 
  let b =await a.json()
  // let c= b.body
  // console.log('c', c)
  if(b.body){
  setShow(true)
 await setform({
    text:b.body[0].note,
    image:b.body[0].image,
    list:b.body[0].list
  })}
}

    const save=() => {
        setform({...form,id:uuidv4()})
      setShow(true)
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
       note:form.text,
       image:form.image,
       list:form.list,
          user: User?.user?.id,
          id:form.id
      }
      );

      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
      };

      fetch("https://bitaegiris.vercel.app/api/postnotes", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
toast('note added successfully')
    }
    useEffect(() => {
      functi()
    
    }, [])
    
    const deleteform =async() => {
      setform({text:"",
        image:"",
        list:""})
      
        setShow(false)
          const response = await fetch("https://bitaegiris.vercel.app/api/deletenotes", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id:User?.user?.id })
          });
          const result = await response.json();
          toast(result.message||"Password Deleted Sucessfully")
    
    }
    
  return (
    <div className='w-[100%] p-8 h-[100%] my-8 flex justify-center items-center flex-col gap-8'>
      <h1 className="text-3xl font-bold">Start saving your secret notes for free </h1>
{!show &&<div className='w-[100%] h-[100%] my-8 flex justify-center items-center flex-col gap-4'>     <h1 className="text-xl font-bold">Enter Your Note:</h1>
      <div className="flex flex-col notes justify-center items-center w-[100%] gap-4">
        <div className="text sm:w-[70%] w-[90%] justify-center items-center text-center flex gap-2">
            <label className='font-bold' htmlFor="text">Text:</label>
            <textarea name="text" id="text" className='w-[80%] border rounded-xl p-2  ' rows={5} placeholder='Enter Description about your note' onChange={(e)=>setform({...form,[e.target.name]:e.target.value})}></textarea>
        </div> 
        <div className="flex w-[100%] xl:flex-row flex-col gap-4 justify-center items-center">
        <div className="image flex gap-2 justify-center items-center text-center w-[90%] sm:w-[30%]">
            <label className='font-bold' htmlFor="image">Image:</label>
            <input type="text" name="image" onChange={(e)=>setform({...form,[e.target.name]:e.target.value})} id="image"className='w-[80%] border rounded-xl p-2 '  placeholder='Enter Image Description' />
        </div>
        <div className="image flex gap-2 justify-center items-center text-center w-[90%] sm:w-[30%]">
            <label className='font-bold' htmlFor="list">List:</label>
            <input type="text" name="list" id="list" onChange={(e)=>setform({...form,[e.target.name]:e.target.value})} className='w-[80%] border rounded-xl p-2 ' placeholder='Enter a list item' />
        </div>
        </div>
        <Button className='w-[50%]' onClick={()=>save()}>Save</Button>
        
 
      </div>
      </div>  }
      {show? <div className="output w-[80%] gap-4 shadow-xl shadow-blue-100 bg-blue-50 rounded-xl flex flex-col justify-center items-center p-4">
        {form.text && <div className="w-[80%] flex gap-2"><span className="font-bold">Text:</span>{form.text}</div> }
        {form.image  && <div className="w-[80%] flex gap-2"><span className="font-bold">Image:</span>{form.image}</div> }
        {form.list  && <div className="w-[80%] flex gap-2"><span className="font-bold">List:</span><input type="checkbox" name="checkbox" id="checkbox" />{form.list}</div> }
        <div className="w-[100%] flex justify-end items-center"><button onClick={()=>deleteform()}><Image src='/delete.png' width={35} height={35} alt='delete'></Image></button></div>
      </div>: <span className="text-xl">Add a Note To See</span> }
    </div>
  )
}

export default Notes
