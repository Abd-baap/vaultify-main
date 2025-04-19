import dynamic from 'next/dynamic';
import Herosection from './components/herosection'; // Load immediately
import Features from './components/features'; // Server Component
import Usage from './components/usage'; // Server Component

const Contribution = dynamic(() => import('./components/contribution'));
export default function Home() {
  
  return (
    <div className="w-full p-0 m-0 ">
      <Herosection />
      <div className="ehat is aws256 gap-4 flex flex-col justify-center items-center my-8  p-8 shadow-sm hover:shadow-xl w-[100%] text-xl">
    <span className="font-bold text-2xl text-center "Why Password Security Is Important</span>
    <span className="w-[100%]" >In today’s digital world, passwords are often the first and only line of defense protecting your personal information, financial data, and online identity. Weak or reused passwords can make it easy for attackers to gain unauthorized access to your accounts, leading to data breaches, identity theft, and financial loss. Implementing strong password security — such as using complex, unique passwords and secure encryption methods — helps ensure that even if your data is exposed, it remains protected. Password security isn’t just a tech issue; it’s a critical part of staying safe online.
</span>
</div>
     <div className='w-[100%] h-[100%] flex flex-col text-center justify-center items-center my-8 p-8 center'>
        <h1 className="text-2xl font-bold text-center font-bold">What we do to your password</h1>
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
      <Features/>
        <Usage/>
      <Contribution/>
      </div>
   
  )
}
