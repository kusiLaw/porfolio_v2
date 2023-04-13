import React, { useState, useEffect }  from 'react'
import Link from 'next/link';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md"
import {Mode, updateMode} from '@/utilities/darkmode';
import Nav from './nav';

const Header = () => {
  const [darkMode, setDarkMode] = useState('')

  const handel_darkMode = () =>{
      // let toggle  = mode === 'light' ? 'dark' : 'light'
      // setMode(toggle)
      localStorage.setItem('mode', !darkMode);
      setDarkMode(!darkMode)
  }

  useEffect(()=>{
   // setMode(localStorage.getItem('mode') || 'light');
   if(darkMode === ''){
    setDarkMode(localStorage.getItem('mode' || false))
   }else{
    localStorage.getItem(!darkMode)
    window.document.documentElement.classList.toggle('dark')
   }

  },[darkMode])



  return (
    <div className='absolute w-100 flex left-0 top-0 right-0 pt-2 pb-2 pl-10 pr-10
    '>
       <div className='flex w-screen justify-between   '>
          <div className='flex justify-center items-center'>lk</div>

          
          <div className='flex items-center gap-4	 '> 
            <div><Nav desktop={true}  /></div>
            
            <div>
             <Link href={''} className=' border-dotted border-4 border-light_accent_dark pt-1 pr-3 pl-3 pb-1'>Resume</Link>
            </div>
            
            <div className='text-2xl -rotate-45'>{
             darkMode === true ? 
           <BsFillBrightnessHighFill onClick={handel_darkMode} /> : 

           <MdNightlight onClick={handel_darkMode} />} 
             </div>

            
 
           </div>

       </div>
    </div>
  )
}

export default Header