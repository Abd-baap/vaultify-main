

import { ClerkProvider,SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import Manager from '../components/manager'; // Replace with your actual component


export default function PasswordLayout({ children }) {
  return (
    <>
    <ClerkProvider>

      
      {children}
    </ClerkProvider>
    </>
  );
}
