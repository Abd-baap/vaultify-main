import dynamic from 'next/dynamic';
import Navbar from "../components/navbar";

const Footer = dynamic(() => import('../components/footer'));

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
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
