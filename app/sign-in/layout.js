

import { ClerkProvider,SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';


export default function PasswordLayout({ children }) {
  return (
    <>
        <ClerkProvider>
      
      {children}
    </ClerkProvider>
    </>
  );
}
