import React from 'react'
import Notes from '../components/notes'
import { ClerkProvider,SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';


const page = () => {
  return (
    <div>
     <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      
    <SignedIn>
      <Notes/>
    </SignedIn>
    </div>
  )
}

export default page
