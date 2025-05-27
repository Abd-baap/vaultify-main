"use client"
import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'; // For App Router
// import { useRouter } from 'next/router'; // For Pages Router (older)
export default function Home() {
  const { user } = useUser()

  if (!user) return <SignIn />
router.push('/password')
  return <div>Redirecting to manager please wait!</div>
}
