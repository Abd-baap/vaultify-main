import dynamic from 'next/dynamic';
import Head from 'next/head';

import Navbar from "./components/navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ClerkProvider } from "@clerk/nextjs";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Footer = dynamic(() => import('./components/footer'));
export const metadata = {
  title: "BitAegiris - Home ",
  description: "BitAegiris is a powerful password manager offering free, unlimited password and note storage with AES-256 encryption. Your data is secured using a master code, which Vaultiy encrypts before storage for maximum protection. Unlike traditional managers, Vaultiy customizes each password with your encrypted master code before saving it in MongoDB, ensuring top-tier security. Vaultiy’s zero-knowledge encryption means only you can decrypt your data—keeping it safe from breaches. Easily store, manage, and access passwords with end-to-end security. Whether you need a password vault, secure note keeper, or encrypted storage solution, Vaultiy offers a seamless, privacy-first experience. Simplify login management, eliminate weak passwords, and stay secure effortlessly. Take control of your digital security with Vaultiy today!",
  robots: 'index, follow', 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        
        <Analytics/>
        <head>
    <meta name="robots" content="index, follow"/>
    <meta name="google-site-verification" content="MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
       </head>
      <body className="poppins-regular">
          <ToastContainer  draggablePercent={60} toastStyle={{backgroundColor:"cadetblue",color:"white"}}/>
        <Navbar/>
        {children}
      <Footer/>
      </body>


      </ClerkProvider>
    </html>
  );
}
