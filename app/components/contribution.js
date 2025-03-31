"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contribution = () => {
  const [Message, setMessage] = useState('')
  const [Name , setName ] = useState('')
  const [GiftCard , setGiftCard ] = useState('')
  const submit=() => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "Message": Message,
  "GiftCard": GiftCard,
  "Name": Name
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://goal-go.vercel.app/api/app/gifts", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  setGiftCard("")
  setName("")
  setMessage("")
  toast("Thankyou For Your Contribution")
  }
  
  return (
    
    <div className='w-[100%] py-3 p-3    flex flex-col justify-center items-center gap-4 my-8 shadow-md hover:shadow-lg text-center'>
       {/* <ToastContainer draggablePercent={60} toastStyle={{backgroundColor:"black",color:"white"}}/> */}
               
      <h1 className="text-2xl font-bold ">Thanks For Visiting</h1>
      <p>Wanna Contribute Us, We Will Be So Thankful From Your Contributions</p>
      <div className="takinginputs w-[100%] flex flex-col justify-center items-center gap-4">
        <div className="flex w-[100%] gap-5 sm:gap-2 justify-center items-center flex-col sm:flex-row"> 
          <div className="flex px-2 text-[14px]   justify-center items-center w-[100%] "><label className=' text-[18px] mx-1' htmlFor="Gift Card">Gift Card:</label>
          <input type="text" onChange={e=>setGiftCard(e.target.value)} value={GiftCard} name="Gift Card" className='w-[80%] sm:w-[40%] border rounded-md p-4 h-10' id="Gift Card" placeholder='Enter Your Amazon Gift Card Code' /></div>
          <div className="flex px-2 text-[14px]  justify-center items-center  w-[100%] "><label className=' text-[18px] mx-1' htmlFor="Name ">Name:</label>
        <input type="text" onChange={e=>setName(e.target.value)} value={Name} name="Name" className='border rounded-md w-[80%] p-4 h-10 sm:w-[40%] ' id="Name" placeholder='Enter Your Name' />
        </div>
                

        </div>

         <div className="messgae flex px-2  justify-center items-center w-[100%]">
        <label className=' text-[18px] mx-1' htmlFor="Message">Message:</label> 
        <input type="text" onChange={e=>setMessage(e.target.value)} value={Message} className='w-[80%] sm:w-[70%] border rounded-md h-10 p-4 text-[14px] 
' name="Message" id="Message" placeholder='Enter Your Message or any suggestion' />
        </div>
        <Button type="button" onClick={submit} className=" w-[70%] sm:w-[50%] text-white font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2">Contribute  Us</Button>
      </div>
    </div>
  )
}

export default Contribution
