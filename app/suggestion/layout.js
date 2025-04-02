import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "BitAegiris - Tips for Enhancing Your Account Security",
  description: "Stay safe online with our essential security tips! Learn how to protect your accounts, secure passwords, enable 2FA, avoid phishing scams, and enhance privacy. Keep your data safe today!",
  openGraph: {
    title: "BitAegiris Tips for Enhancing Your Account Security",
  },
  robots: "index, follow",
};

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
