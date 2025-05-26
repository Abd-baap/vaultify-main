import Link from 'next/link'
import React from 'react'
import Contribution from '../components/contribution'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
        <div className="heading text-4xl font-bold p-16 h-[30%] w-[100%]  flex-col  flex gap-4 text-white text-center justify-center items-center bg-blue-700"> <span>BitAegiris Support Center</span><span className="text-2xl">Protect Your Digital World with BitAegiris</span></div>
        <div className="card p-4 m-8 text-center justify-center items-center sm:w-[50%] xl:w-[20%] w-[80%] font-bold   gap-0 text-white bg-blue-700 rounded-md text-xl shadow-sm hover:shadow-2xl shadow-blue-500">
    At BitAegiris, we are committed to providing you with the best password management experience while ensuring top-tier security. If you ever need assistance, have questions, or run into issues, our support team is available 24/7 to help.</div>
        <div className="text w-[100%] justify-center p-4 px-8 items-start  flex-col  flex gap-8">
        <div className="how can we help u flex-col  flex gap-4 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">        
            <span className="text-2xl font-bold text-blue-700">How Your Data Stays Secure</span>
      <ul className=' flex gap-2 flex-col'>
        <li className="text-xl">✅ We use two of the most trusted online databases: <ul className="list-disc">
            <li>Mongodb</li>
            <li>Clerk</li>
            </ul></li>
            <li className="text-xl">
    ✅ Before saving your data, we customize it using the master code you enter.  </li>
            <li className="text-xl">✅ 
    We use AES-256 encryption, which secures your data before storing it and decrypts it when you need access.</li>
            <li className="text-xl">
            ✅ We use zero-knowledge architecture, meaning no one, not even our team, can see your passwords. </li>
           
      </ul>
    </div>
        <div className='w-[100%] h-[100%] flex flex-col text-center  my-8 p-8 -center'>
        <h1 className="text-2xl font-bold text-blue-700">What we do to your password</h1>
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
    
    <div className="is it avalble on mulyiple device flex-col  flex gap-4 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">        
            <span className="text-2xl font-bold text-blue-700">
      Can I Use BitAegiris on Multiple Devices?</span>
            <ul className=" flex gap-2 flex-col">
                <li className="text-xl"> 
Yes! BitAegiris is designed to sync your passwords securely across:<ol className=' flex gap-2  flex-col'>
<li>- 💻 Desktop (Windows, macOS, Linux)  
    </li>
<li>- 📱 Mobile (iOS & Android)  
    </li>
<li>- 🌍 Web Browser Extensions (Chrome, Firefox, Edge, Brave)</li> </ol> </li>
<li className='text-xl'>Your data is always encrypted and accessible from anywhere.  
</li>
            </ul>
      
    </div>
    
    <div className="how touse flex-col  flex gap-4 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">        
            <span className="text-2xl font-bold text-blue-700">How to Use BitAegiris</span>
            <ul className=" flex gap-2 flex-col">
                <li className="text-xl flex">Step 1 :   Sign In to BitAegiris .</li>
                <li className="text-xl flex">Step 2 :  Click on 'Get Started' or go to 'Manager'.  .</li>
                <li className="text-xl flex">Step 3 :     Create and remember a master code. </li>
                <li className="text-xl flex">Step 4 :   Select what you want to save: Notes or Passwords. </li>
                <li className="text-xl flex">Step 5 :   You're ready! Start saving your credentials securely in BitAegiris. </li>
            </ul>
      
    </div>
    <div className="how to see password flex-col  flex gap-4 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">        
            <span className="text-2xl font-bold text-blue-700">How to see your notes or password</span>
            <ul className=" flex gap-2 flex-col">
                <li className="text-xl flex">
                      Enter your master code in the input field and click the button.   </li>
            </ul>
          
    </div>
     
    </div>
    <Contribution/>
        <span className="text-2xl my-8 font-bold text-blue-900 p-8">
            Join us in taking control of your digital security—because your passwords deserve the best protection.</span>
            <Button className="sm:w-[45%] w-[70%]"><Link rel="nofollow" href='/password'> Get Started!</Link></Button>
    
    </div>
  )
}

export default page 
