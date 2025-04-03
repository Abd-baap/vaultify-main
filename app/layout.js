import dynamic from 'next/dynamic';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Navbar from "./components/navbar";

const Footer = dynamic(() => import('./components/footer'));

export const metadata = {
  title: "BitAegiris - Home",
  description: "BitAegiris is a powerful password manager offering free, unlimited password and note storage with AES-256 encryption. Your data is secured using a master code, which BitAegiris encrypts before storage for maximum protection. Unlike traditional managers, BitAegiris customizes each password with your encrypted master code before saving it in MongoDB, ensuring top-tier security. BitAegiris’ zero-knowledge encryption means only you can decrypt your data—keeping it safe from breaches. Easily store, manage, and access passwords with end-to-end security. Whether you need a password vault, secure note keeper, or encrypted storage solution, BitAegiris offers a seamless, privacy-first experience. Simplify login management, eliminate weak passwords, and stay secure effortlessly. Take control of your digital security with BitAegiris today!",
  robots: 'index, follow',
  verification: {
    google: "MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew",
  },
  adsense: {
    account: "ca-pub-6836466532865002"
  },
  icons: {
    icon: "/favicon.ico",
  },
  links: {
    preconnect: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com"
    ],
    stylesheets: [
      "https://fonts.googleapis.com/css2?family=Poppins&display=swap"
    ],
  },
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836466532865002",
      async: true,
      crossorigin: "anonymous"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <Analytics />
        <body className="poppins-regular">
          <ToastContainer draggablePercent={60} toastStyle={{ backgroundColor: "cadetblue", color: "white" }} />
          <Navbar />
          {children}
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
