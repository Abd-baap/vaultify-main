import dynamic from 'next/dynamic';
import Head from 'next/head';

import Navbar from "../components/navbar";
const Footer = dynamic(() => import('../components/footer'));
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
<meta name="robots" content="index, follow"/>
        
                <title>BitAegiris- Notes-manager </title>

                {/* Long title (visible in search engines) */}
                <meta property="og:title" content="BitAegiris Notes - Secure & Encrypted Note Storage
" />
                <meta name="description" content="Store and manage your notes securely with BitAegiris Notes. Enjoy advanced encryption and a seamless, private note-taking experience."/>


                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8101795279662262"
                    crossorigin="anonymous"></script>
                <meta name="google-adsense-account" content="ca-pub-8101795279662262"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
            </Head><body className="poppins-regular">
         
        <Navbar/>
        {children}
      <Footer/>
      </body>


        </html>
    );
}
