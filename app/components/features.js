"use client"
import React, { useState } from 'react'

import './features.css'
import { Button } from '@/components/ui/button'
const Features = () => {
  const [features, setFeatures] = useState([{
    "id": 1,
    logo:"&#x1F6E1",
    "name": "🛡Secure Password Storage",
    "description": "Encrypt and store passwords securely."
  },
  {
    "id": 12,
    
    logo:"&#x1F510;",
    "name": "🔐End-to-End Encryption",
    "description": "Ensure only users can access their data with strong encryption."
  }
,
  {
    "id": 4,
    
    logo:"&#x1F504;",
    "name": "🔁Multi-Device Syncing",
    "description": "Sync passwords across multiple devices seamlessly."
  },
  {
       "id": 51,
       
       logo:"&#x1F522;",
       "name": "🔢Quick Access with 4-Digit Code",
       "description": "Users can view all stored passwords with a single 4-digit code."
     }])
    const showmorefeatures=() => {
      const allfeatures=[{
        "id": 1,
        logo:"&#x1F6E1",
        "name": "🛡Secure Password Storage",
        "description": "Encrypt and store passwords securely."
      },
      {
        "id": 12,
        
        logo:"&#x1F510;",
        "name": "🔐End-to-End Encryption",
        "description": "Ensure only users can access their data with strong encryption."
      }
    ,
      {
        "id": 4,
        
        logo:"&#x1F504;",
        "name": "🔁Multi-Device Syncing",
        "description": "Sync passwords across multiple devices seamlessly."
      },
      {
        "id": 24,
        
        logo:"&#x1F4BB; &#x1F4F1;",
        "name": "💻📱Cross-Platform Support",
        "description": "Works on Windows, macOS, Linux, and mobile devices."
      },
      {
        "id": 21,
        
        logo:"&#x1F5A5;",
        "name": "💻Intuitive Dashboard",
        "description": "User-friendly interface for easy navigation and management."
      }
    ,
      {
        "id": 31,
        
        logo:"&#x2601; &#x1F512;",
        "name": "☁🔒Encrypted Cloud Backup",
        "description": "Automatic backup of stored credentials with encryption."
      },
      {
        "id": 40,
        
        logo:"&#x1F4C2;",
        "name": "📁Multiple Backup Locations",
        "description": "Store backups in different locations for redundancy."
      },
    
 {
      "id": 51,
      
      logo:"&#x1F522;",
      "name": "🔢Quick Access with 4-Digit Code",
      "description": "Users can view all stored passwords with a single 4-digit code."
    }]
    const somefeatures=[{
      "id": 1,
      logo:"&#x1F6E1",
      "name": "🛡Secure Password Storage",
      "description": "Encrypt and store passwords securely."
    },
    {
      "id": 12,
      
      logo:"&#x1F510;",
      "name": "🔐End-to-End Encryption",
      "description": "Ensure only users can access their data with strong encryption."
    }
  ,
    {
      "id": 4,
      
      logo:"&#x1F504;",
      "name": "🔁Multi-Device Syncing",
      "description": "Sync passwords across multiple devices seamlessly."
    },
    {
         "id": 51,
         
         logo:"&#x1F522;",
         "name": "🔢Quick Access with 4-Digit Code",
         "description": "Users can view all stored passwords with a single 4-digit code."
       }]
        
      if(features.length===8){
        setFeatures(somefeatures)
        console.log("wai setting few passwords")
       
      }
      else{
        console.log("setting all passwords")
        setFeatures(allfeatures)
        }
    }
    
  return (
    <div className='w-[100%] justify-center items-center text-center  p-8 shadow-sm hover:shadow-xl rounded-md  my-8 border'>
      <h1 className="text-3xl font-bold ">Why Us?</h1>
      <div className="features w-[100%] justify-center items-center sm:flex-row p-4   flex-col py-4 "> {features.map((item) => {
        return <div  key={item.id} className='feature-card h-40  border text-blue-900 shadow-sm p-4 sm:w-[30%] w-[70%]'> 
        <div className="card    ">
            <div className="front text-xl font-bold">{item.name}</div>
            <div className="back font-bold">{item.description}</div>
        </div>
        </div>
      }
      )}
      <div className="w-[100%]"onClick={()=>showmorefeatures()}>
      <Button className='w-[70%] sm:w-[50%]' onClick={()=>showmorefeatures()}>{features.length===8?"Less":'More'}</Button>
      </div>
       </div>

    </div>
  )
}

export default Features
