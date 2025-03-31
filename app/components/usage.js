import React from 'react'

const Usage = () => {
  return (
    <div className='w-[100%] justify-center items-center text-center flex flex-col   shadow-sm hover:shadow-xl rounded-xl  my-8 border'>
      <h1 className="text-2xl font-bold">How to Use?</h1>
      <div className="steps w-[100%] flex flex-col items-center justify-around gap-8 py-8">
        <div className="step1 w-[80%] sm:w-[50%] font-bold p-8 justify-center items-center border py-8 gap-4 rounded-xl flex shadow-sm hover:shadow-lg  ">
          <span className="p-2 bg-blue-700 rounded-[100%] border  font-bold text-white ">1</span>
 <span className=' text-xl  h-[100%]'>Sign-in or Log-in into BitAegiris</span>
        </div>
        <div className="step2 w-[80%] sm:w-[50%] font-bold justify-center items-center border py-8 gap-4 rounded-xl flex shadow-sm hover:shadow-lg p-8 ">
 <span className=' text-xl  h-[100%]'>Create a mastercode</span>
          <span className="p-2 bg-blue-700 rounded-[100%] border  font-bold text-white ">2</span>
        </div>
        <div className="step3 w-[80%] sm:w-[50%] font-bold justify-center items-center border
         p-8 gap-4 rounded-xl flex shadow-sm hover:shadow-lg  ">
          <span className="p-2 bg-blue-700 rounded-[100%] border  font-bold text-white ">3</span>
 <span className=' text-xl  h-[100%]'>You are get set go save passwords now.</span>
        </div>
      </div>
    </div>
  )
}

export default Usage
