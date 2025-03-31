import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from 'next/head';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>

                <title>BitAegiris- tips </title>

                {/* Long title (visible in search engines) */}
                <meta property="og:title" content="BitAegiris tips for enhancing your account security
" />
                <meta name="description" content=
"Stay safe online with our essential security tips! Learn how to protect your accounts, secure passwords, enable 2FA, avoid phishing scams, and enhance privacy. Keep your data safe today!"/>


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
