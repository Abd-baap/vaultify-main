

import { ClerkProvider,SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import Manager from '../components/Manager'; // Replace with your actual component

export const metadata = {
  title: "BitAegiris - Password Manager",
  description: "Manage your passwords securely with BitAegiris—a free password manager featuring AES-256 encryption and unlimited storage. Keep your credentials safe and easily accessible.",
  openGraph: {
    title: "BitAegiris Password Manager - Secure, Free & Encrypted Vault",
  },
  robots: "index, follow",
};

export default function PasswordLayout({ children }) {
  return (
    <>
    <ClerkProvider>
    <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      
    <SignedIn>
        
      
      {children}
    </SignedIn>
    </ClerkProvider>
      
    </>
  );
}
