import dynamic from 'next/dynamic';
import Navbar from "../components/navbar";

const Footer = dynamic(() => import('../components/footer'));

export const metadata = {
  title: "BitAegiris - About",
  description: "Learn about BitAegiris and our mission to keep your passwords secure and accessible with advanced encryption.",
  openGraph: {
    title: "About BitAegiris - Secure & Free Password Manager",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <>
      
      {children}
      
    </>
  );
}
