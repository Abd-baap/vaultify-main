import dynamic from 'next/dynamic';
import Navbar from "../components/navbar";

const Footer = dynamic(() => import('../components/footer'));

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
      
      {children}
      
    </>
  );
}
