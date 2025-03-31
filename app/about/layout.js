import dynamic from 'next/dynamic';
import Head from 'next/head';

import Navbar from "../components/navbar";
const Footer = dynamic(() => import('../components/footer'));
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
<meta name="robots" content="index, follow"/>
        
                <title>BitAegiris- About </title>

                {/* Long title (visible in search engines) */}
                <meta property="og:title" content="About BitAegiris - Secure & Free Password Manager" />
                <meta name="description" content="Learn about BitAegiris and our mission to keep your passwords secure and accessible with advanced encryption." />


                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8101795279662262"
                    crossorigin="anonymous"></script>
                <meta name="google-adsense-account" content="ca-pub-8101795279662262"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
            </Head>
            <body className="poppins-regular">
        
        <Navbar/>
        {children}
      <Footer/>
      </body>

        </html>
    );
}
