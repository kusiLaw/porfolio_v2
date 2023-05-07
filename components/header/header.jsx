import React, { useState, useEffect }  from 'react'
import Link from 'next/link';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md"
import { Turn as Hamburger } from 'hamburger-react'
import {Mode, updateMode} from '@/utilities/darkmode';
import Nav from './nav';
import SocialIcons from '../social/social_icons';
import Resume from '../resume/resume';

const Header = () => {
  const [darkMode, setDarkMode] = useState()
  const [isOpen, setOpen] = useState(false)

  const handel_darkMode = () =>{
      // localStorage.setItem('darkMode', !darkMode);
      setDarkMode(!darkMode)
  }

  useEffect(()=>{
    setDarkMode(localStorage.getItem('darkMode') === 'true')
    // console.log('run fisrt ')
  },[])


  useEffect(()=>{
   // let g = localStorage.getItem('darkMode') === 'true'
   console.log(darkMode, 'second')

   if(darkMode){
      localStorage.setItem('darkMode', true);
      window.document.documentElement.classList.add('dark')
   }else if(darkMode === false){
      localStorage.setItem('darkMode', false);
      window.document.documentElement.classList.remove('dark')
   }
   // else{
   //  console.log(darkMode, "first call")
   //   setDarkMode(localStorage.getItem('darkMode') === 'true')
   //   // console.log(localStorage.getItem('darkMode') || "no there fsl")
 
   // }

  },[darkMode])



  return (
    <div className=' fixed  z-50 w-100 flex left-0 top-0 right-0 pt-3 pb-3 pl-3 pr-3 sm:pl-5 sm:pr-5 lg:pl-10 lg:pr-10
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
            <div className={ isOpen ? 'block bg-light_bg dark:bg-dark_bg' : 'hidden  md:block'}>
               <Nav  isOpen = {isOpen} setOpen={setOpen} />
               
            </div>
            
            <div>
             <Resume />
            </div>
            
            <div className='text-2xl -rotate-45 transition-all duration-300'>{
               darkMode === true ? 
               <BsFillBrightnessHighFill onClick={handel_darkMode}  /> : 

               <MdNightlight onClick={handel_darkMode} />} 
            </div>
            
            <div className={isOpen ? 'block' : 'text-lg md:hidden'}>
                 <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
             
           </div>
           
       </div>
    </div>
  )
}

export default Header