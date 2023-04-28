import React from 'react'
import Link from 'next/link';
import { FiFolder } from "react-icons/fi"
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md"
import { SiRubyonrails, SiDjango , SiRuby} from "react-icons/si"
import { TbBrandPython, TbBrandNextjs } from "react-icons/tb"
import {FaReact} from "react-icons/fa"
import {DiJavascript1} from "react-icons/di"
import { SubTile } from '../title/title';


const Archive = ({text, title, main_tech, live = "", source ="", other_techs = []}) => {
  
 const iconLibrary = {
    'JavaScript': () => (<DiJavascript1 />),
    'Python' : () => (<TbBrandPython />),
    'Ruby' : () => (<SiRuby />),
    'React' : () => (<FaReact />),
    'Django' : () => (<SiDjango />),
    'Rails' : () => (<SiRubyonrails />),
    'NextJS' : () => (<TbBrandNextjs />),
    'Html' : () => (<AiFillHtml5 />),
  }


  return (
    <div className='p-4 pt-8 shadow-md bg-light_accent_divider dark:bg-dark_bg_secondary'>
      <div className='flex justify-between items-center mb-8'>
          <div className='text-4xl text-light_accent dark:text-dark_accent'>{iconLibrary[main_tech]? iconLibrary[main_tech](): <FiFolder/>}</div>
          <div className='flex gap-3 text-2xl'>
             <dev className=' hover:dark:text-dark_accent hover:scale-110 duration-200'> 
                  <Link href={source} className=''>
                       <AiFillGithub />
                  </Link>
              </dev>
             <dev className=' hover:dark:text-dark_accent hover:scale-110 duration-200'>   
                   <Link href={live} className=''>
                      <MdOpenInNew />
                   </Link>
              </dev>
          </div>
      </div>

      <div className='capitalize mt-2 mb-2 '><SubTile text={title}/></div>

      <div className='mb-2'>{text}</div>
      <div className='flex gap-2 flex-wrap mt-2 mb-2 text-sm pt-2 text-light_accent dark:text-dark_accent'>
         {other_techs.map((el)=>(
          <span key={el}>{el}</span>)
         )}


      </div>
    </div>
  )
}

export default Archive
