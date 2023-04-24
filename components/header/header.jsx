import React, { useState, useEffect }  from 'react'
import Link from 'next/link';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md"
import { Turn as Hamburger } from 'hamburger-react'
import {Mode, updateMode} from '@/utilities/darkmode';
import Nav from './nav';

const Header = () => {
  const [darkMode, setDarkMode] = useState('')
  const [isOpen, setOpen] = useState(false)

  const handel_darkMode = () =>{
      // let toggle  = mode === 'light' ? 'dark' : 'light'
      console.log(isOpen)
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
    <div className=' fixed z-50 w-100 flex left-0 top-0 right-0 pt-3 pb-3 pl-3 pr-3 sm:pl-5 sm:pr-5 lg:pl-10 lg:pr-10
            bg-light_bg dark:bg-dark_bg
    '>
       <div className='flex w-screen justify-between '>
             <div className='flex justify-center items-center  text-xl md:text-2xl font-medium  '>
               <Link href={'/'}>
                  <span className='text-light_accent  dark:text-dark_accent italic'>L</span>
                  <span className='text-light_accent dark:text-dark_accent'>a</span>
                  <span className=''>k</span>
                  <span className=''>y</span>
                  <span className=' '>.</span>
               </Link>
             </div>

          
          <div className='flex items-center gap-4	 '> 
            <div className='hidden md:block'>
               <Nav desktop={true}  />
            </div>
            
            <div>
             <Link href={''} className='hidden xl:inline-block border-dotted border-4 
             border-light_accent dark:border-dark_accent pt-1 pr-3 pl-3 pb-1 dark:text-dark_accent
             hover:text-white hover:border-bg-light_accent  hover:bg-light_accent  
              hover:dark:text-white hover:border-bg-dark_accent hover:dark:bg-dark_accent'>Resume</Link>
            </div>
            
            <div className='text-2xl -rotate-45'>{
             darkMode === true ? 
           <BsFillBrightnessHighFill onClick={handel_darkMode} /> : 

           <MdNightlight onClick={handel_darkMode} />} 
            </div>
            <div className='text-lg md:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
             
           </div>
           
       </div>
    </div>
  )
}

export default Header