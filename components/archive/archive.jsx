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


const Archive = ({text, title, main_tech, type="", year="", live = "", source ="", tech_stacks = []}) => {
  console.log(main_tech)
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
    <div className='flex flex-col p-4 pt-8  shadow-md rounded-md bg-light_accent_divider dark:bg-dark_bg_secondary border border-1 border-light_text_header \
     hover:scale-[1.02] duration-300'>
      <div className='flex justify-between items-center mb-6'>
          <div className='text-4xl text-light_accent dark:text-dark_accent'>{iconLibrary[main_tech]? iconLibrary[main_tech](): <FiFolder/>}</div>
          <div className='flex gap-3 text-2xl'>
             <dev className=' hover:dark:text-dark_accent hover:scale-110 duration-200'> 
                  <Link href={source} className='' target='blank'>
                       <AiFillGithub />
                  </Link>
              </dev>
             <dev className=' hover:dark:text-dark_accent hover:scale-110 duration-200'>   
                   <Link href={live} className=''  target='blank'>
                      <MdOpenInNew />
                   </Link>
              </dev>
          </div>
      </div>

      <div className='capitalize mt-2 mb-2 '><SubTile text={title}/></div>
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
