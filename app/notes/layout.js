
import { ClerkProvider,SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
export const metadata = {
  title: "BitAegiris - Notes Manager",
  description: "Store and manage your notes securely with BitAegiris Notes. Enjoy advanced encryption and a seamless, private note-taking experience.",
  openGraph: {
    title: "BitAegiris Notes - Secure & Encrypted Note Storage",
  },
  robots: "index, follow",
};

export default function NotesLayout({ children }) {
  return (
    <>
      
    <ClerkProvider>
      
      {children}
    </ClerkProvider>
      
    </>
  );
}
