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
    'JavaScript': () => (<><DiJavascript1 /></>),
    'Python' : () => (<><TbBrandPython /></>),
    'Ruby' : () => (<><SiRuby /></>),
    'React' : () => (<><FaReact /></>),
    'Django' : () => (<><SiDjango /></>),
    'Rails' : () => (<><SiRubyonrails /></>),
    'NextJS' : () => (<><TbBrandNextjs /></>),
    'Html' : () => (<><AiFillHtml5 /></>),
  }


  return (
    <div className='p-4 pt-8  dark:bg-dark_bg_secondary'>
      <div className='flex justify-between items-center mb-8'>
          <div className='text-4xl dark:text-dark_accent'>{iconLibrary[main_tech]? iconLibrary[main_tech](): <FiFolder/>}</div>
          <div className='flex gap-3 text-2xl'>
             <dev className=' hover:dark:text-dark_accent'> 
                  <Link href={source}>
                       <AiFillGithub />
                  </Link>
              </dev>
             <dev className=' hover:dark:text-dark_accent'>   
                   <Link href={live}>
                      <MdOpenInNew />
                   </Link>
              </dev>
          </div>
      </div>

      <div className='capitalize mt-2 mb-2 '><SubTile text={title}/></div>
      <div id="tooltip-light" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

      <div className='mb-2'>{text}</div>
      <div className='flex gap-2 flex-wrap mt-2 mb-2 text-sm pt-2 dark:text-dark_accent'>
         {other_techs.map((el)=>(
          <span>{el}</span>)
         )}

      </div>
    </div>
  )
}

export default Archive
