import { Inter } from 'next/font/google';
import { useState } from 'react';
import Phases from './Phases/Phases';
import Brigade from '../Components/Brigade/Brigade';
import GamePlay from '@/Components/GamePlay/GamePlay';
import Mission from './Mission/Mission';
import KindFighter from './KindFighter/KindFighter';
import Generations from './Generations/Generations';
import Homepage from './Home/Homepage';
import Footer from '@/Components/Footer/Footer';
import Association from './Association/Association';
import NewCutomisable from './Customisable/NewCutomisable';
import MissionTwo from './Mission/MissionTwo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  const onMoboClicks = () => {
    setShowNav(!showNav);
  };
  return (
    <>
    
    
      <Homepage/>
      <Generations/>
      <Phases/>
   
      <NewCutomisable/>
      <Brigade/>
      <Mission/>
      <MissionTwo/>
      <GamePlay/>
      <KindFighter/>
      <Association/>
      <Footer/> 

    </>
  );
}


{/* <div className="absolute text-black flex space-x-2 justify-center items-center top-0 p-2">
<img
  src="./assets/images/clocks.png"
  className=" xl:w-[25px] xl:h-[25px] md:w-[25px] md:h-[25px]"
  alt="phase-1"
/>
<p className="text-[16px] tracking-[-0.48px] font-semibold mix-blend-hard-light leading-[16.96px] ">
  Early Access to <br /> Open Beta
</p>
</div> */}