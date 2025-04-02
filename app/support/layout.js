import dynamic from 'next/dynamic';
import Navbar from "../components/navbar";

const Footer = dynamic(() => import('../components/footer'));

export const metadata = {
  title: "BitAegiris - Support",
  description: "Get help with BitAegiris. Find answers, troubleshoot issues, and contact support for secure password management.",
  openGraph: {
    title: "BitAegiris Support - Help, Troubleshooting, & Customer Care",
  },
  robots: "index, follow",
};

export default function SupportLayout({ children }) {
  return (
    <>
      
      {children}
      
    </>
  );
}
