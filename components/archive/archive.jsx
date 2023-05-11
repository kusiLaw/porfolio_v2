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


const Archive = ({text, title, main_tech, type="", year="", live = "", source ="", tech_stacks = []} ) => {
  
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
    <div className='flex flex-col p-4 pt-8  shadow-md rounded-md bg-light_accent_divider dark:bg-dark_bg_secondary border-[0.2px]  border-light_text_header \
      hover:border-light_accent hover:dark:border-dark_accent  hover:scale-[1.02] duration-500'>
      <div className='flex justify-between items-center mb-6'>
          <div className='text-4xl text-light_accent dark:text-dark_accent'>{iconLibrary[main_tech]? iconLibrary[main_tech](): <FiFolder/>}</div>
          <div className='flex gap-3 text-2xl'>
             <dev className=' hover:dark:text-dark_accent hover:scale-110 duration-200'> 
                  <Link href={source} className='' target='_blank'>
                       <AiFillGithub />
                  </Link>
              </dev>
             <dev className=' hover:dark:text-dark_accent hover:scale-110 duration-200'>   
                 { live.length > 0 &&  <Link href={live} className=''  target='_blank'>
                      <MdOpenInNew />
                   </Link>
                 }
              </dev>
          </div>
      </div>
      
      <div className='capitalize mt-2 mb-2 '><SubTile text={title}/></div>
         <div className=   "text-light_accent dark:text-dark_accent flex justify-end pr-2 py-1  uppercase text-xs gap-4 italic">
                      {type} {" - "}  {year}
         </div>
        <div className='mb-2'>{text}</div>
        <div className='flex justify-self-end gap-2 flex-wrap mt-2 mb-2 text-sm pt-2 text-light_accent dark:text-dark_accent'>
           {tech_stacks.map((el)=>(
            <span key={el}>{el}</span>)
           )}


        </div>
    </div>
  )
}

export default Archive
