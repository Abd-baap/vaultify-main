import dynamic from 'next/dynamic';
import Herosection from './components/herosection'; // Load immediately
import Features from './components/features'; // Server Component
import Usage from './components/usage'; // Server Component

const Contribution = dynamic(() => import('./components/contribution'));
export default function Home() {
  
  return (
    <div className="w-full p-0 m-0 ">
      <Herosection />
      
      <Features/>
        <Usage/>
      <Contribution/>
      </div>
   
  )
}
