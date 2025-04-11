import { Button } from "@/components/ui/button"
import Link from "next/link"
import Contribution from "../components/contribution"

const page = () => {
    const offers=[
        {
        message:"Encrypted Password Storage: Your passwords are securely stored using industry-leading encryption (AES-256).  "
    },
        {
        message:"Cross-Platform Syncing: Access your vault from any device—mobile, desktop, or browser.   "
    },
        {
        message:"Secure Notes & 2FA Storage: Store sensitive notes and authentication codes securely."
    },
        {
        message:"Dark Web Monitoring: Get alerts if your credentials are compromised in a data breach. "
    },
]
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
        <div className="heading text-4xl font-bold p-16 h-[30%] w-[100%] flex flex-col gap-4 text-white text-center justify-center items-center bg-blue-700"> <span>About Vaultify</span><span className="text-2xl">Protect Your Digital World With Vaultify</span></div>
        <div className="card p-4 m-8 text-center justify-center items-center flex sm:w-[50%] xl:w-[20%] w-[80%] font-bold gap-0 text-white bg-blue-700 rounded-md text-xl shadow-sm hover:shadow-2xl shadow-blue-500">In an age where cyber threats are growing, password security is more critical than ever. BitAegiris was founded to provide a  secure, convenient, and intelligent  way to manage your passwords—without the fear of forgetting them or falling victim to hacks.  
</div>
      <div className="text w-[100%] justify-center p-4 px-8 items-start flex flex-col gap-8">
        <div className="offers gap-2 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">        
            <span className="text-2xl font-bold text-blue-700">What BitAegiris Offers</span>
        <div className="offers">
            <ul className="gap-2">
                {offers.map((item) => {
                    return <li key={item.message} className=" list-disc text-xl">{item.message}</li>
                  
                }
                )}
            </ul>
        </div>
        </div>
                      <div className='w-[100%] h-[100%] flex flex-col text-center  my-8 p-8 items-center'>
        <h1 className="text-2xl font-bold text-blue-700 font-bold">What we do to your password</h1>
        <ol className="flex flex-col list-decimal pl-5 w-[100%] my-8 p-4 items-center gap-6">
          <div className="masterdoe flex flex-col justify-center items-center w-[100%] gap-4 ">
            <span className='text-xl text-left flex justify-start'>We hashed your mastercode using this code:</span>
            <pre className='bg-zinc-900 shadow-xl text-white p-4 rounded-md leading-relaxed overflow-x-hidden overflow-y-auto whitespace-pre-wrap gap-2 w-[80%]'>   <code>const hashedCode = await bcrypt.hash(code, 10);
            </code></pre>
          </div>
          <div className="submit function flex justify-center items-center flex-col w-[100%] gap-4 ">
            <span className='text-xl'>We customize your password before hashing using this code:</span>
            <pre className='bg-zinc-900 shadow-xl text-white p-4 rounded-md leading-relaxed overflow-x-hidden overflow-y-auto whitespace-pre-wrap gap-2 w-[80%]'> <code>const raw = JSON.stringify(
              ...newPassword,
              password: form.mastercode + 'V@u|t!y' + form.password,
              user: User?.user?.id
              );

            </code></pre>
          </div>
          <div className="hasing flex justify-center items-center flex-col w-[100%] gap-4 ">
            <span className='text-xl'>We encrypt your password  using this code:</span>
            <pre className='bg-zinc-900 shadow-xl text-white p-4 rounded-md leading-relaxed overflow-x-hidden overflow-y-auto whitespace-pre-wrap gap-2 w-[80%]'> <code> const secretSalt = process.env.SECRET_SALT; // Extra security layer
<br/>// we cant disclose key and iv for security reason but they are formed using the mastercode
<br/>
              const cipher = crypto.createCipheriv(algorithm, key, iv);<br/>
              let encrypted = cipher.update(body.password, "utf8", "hex");<br/>
              encrypted += cipher.final("hex");<br/>


            </code></pre>
          </div>
          <div className="decrypting flex justify-center items-center flex-col w-[100%] gap-4 ">
            <span className='text-xl'>When you enter correct mastercode we decrypt it and displays it using this code:</span>
            <pre className='bg-zinc-900 shadow-xl text-white p-4 rounded-md leading-relaxed overflow-x-hidden overflow-y-auto whitespace-pre-wrap gap-2 w-[80%]'> <code>
              //We are sorry we cant disclose key and iv for security reason but they are formed using the mastercode<br/>
                    const decipher = crypto.createDecipheriv(algorithm, storedKey, providedIv);<br/>
    
                    let decrypted = decipher.update(element.password, "hex", "utf8");<br/>
                    decrypted += decipher.final("utf8");<br/>
    
                    return  ...element, password: decrypted ;

            </code></pre>
          </div>
        </ol>
      </div>
    
<div className="projects gap-4 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">
    <span className="head text-2xl font-bold text-blue-700">Beyond BitAegiris: Our Digital Ecosystem</span>
    <div className="project flex text-xl">
        <Link href="http://goal-go.vercel.app"><span className="font-bold text-blue-700">GoalGo</span>
        <span> – A platform designed to help people achieve their dreams and goals through planning, motivation, and resources. <br></br>By combining security (BitAegiris) and personal growth (Goalgo), we aim to create a safe and productive digital experience for everyone. 
        </span></Link>
    </div>
</div>
<div className="commitment gap-4 flex flex-col my-8  p-8 shadow-sm hover:shadow-xl w-[100%] text-xl">
    <span className="font-bold text-2xl text-blue-700">Our Commitment to Privacy & Security</span>
    <span >At BitAegiris, your privacy is our top priority. We never  sell or share your master password or even a single piece of information, and your data remains fully encrypted, even from us. We are committed to transparent security practices to keep your information safe.  

</span>
</div>
                    <div className="ehat is aws256 gap-4 flex flex-col my-8  p-8 shadow-sm hover:shadow-xl w-[100%] text-xl">
    <span className="font-bold text-2xl text-blue-700">What is aes-256</span>
    <span >AES-256 is a strong encryption algorithm used to securely encrypt and decrypt data. It works by using a 256-bit key to scramble data, making it unreadable without the correct key. It’s commonly used in password managers, secure communications, and data storage.
</span>
</div>
                    <div className="commitment gap-4 flex flex-col my-8  p-8 shadow-sm hover:shadow-xl w-[100%] text-xl">
    <span className="font-bold text-2xl text-blue-700">How we use aes-256</span>
    <span >Vaultiy uses AES-256 encryption to securely store and protect user passwords. When a user saves a password, Vaultiy combines it with their master code and encrypts it using AES-256 before storing it in the database. This ensures that even if the database is compromised, the encrypted data remains unreadable without the correct decryption key. When users need to retrieve their passwords, Vaultiy decrypts the stored data only after verifying their master code. This implementation provides end-to-end security, ensuring that sensitive information remains protected from unauthorized access.
</span>
</div>
      </div>
      <Contribution/>
      <span className="text-2xl my-8 font-bold text-blue-900 p-8">
      Join us in taking control of your digital security—because your passwords deserve the best protection.</span>
      <Button className="sm:w-[45%] w-[70%]"><Link href='/password'> Get Started!</Link></Button>
    </div>
  )
}

export default page
