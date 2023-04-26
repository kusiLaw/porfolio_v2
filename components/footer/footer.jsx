import React from 'react'
import SocialIcons from '../social/social_icons'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='mb-5 mt-16 w-full p-10 text-lg flex justify-center'>
      <div className='flex flex-col gap-5 w-full items-center '>
        <div className='flex'>
          <p>Nice to meet you. &#129309;</p>
        </div>
        <div className='flex gap-5 text-light_text_header dark:text-dark_text_header'>
         <SocialIcons />
        </div>
        <div className='text-sm italic '>
          <p>
          Developer: 
            <Link href={'https://www.linkedin.com/in/lawrence-addai-kusi/'} target='blank' className='hover:text-light_accent hover:dark:text-dark_accent'>
               {' '} Lawrence Addai Kusi. {' '}
            </Link>
            April 2023
          </p>
        </div>
        <div className='text-sm italic '>
          <p>
          Built With: 
 
             <Link href={'https://nextjs.org/'} target='blank' className='hover:text-light_accent hover:dark:text-dark_accent'>
               {' '} NextJS,
            </Link>
            <Link href={'https://react.dev/'} target='blank' className='hover:text-light_accent hover:dark:text-dark_accent'>
               {' '} React,
            </Link>
            <Link href={'https://tailwindcss.com/'} target='blank' className='hover:text-light_accent hover:dark:text-dark_accent'>
               {' '} TailwindCSS
            </Link>
          </p>
        </div>
        <div className='text-sm italic '>
        <p>
         Source Code : 
          <Link href={'https://github.com/kusiLaw/porfolio_v2'} target='blank' className='hover:text-light_accent hover:dark:text-dark_accent'>
             {' '} Github
          </Link>
        </p>
        
        </div>
      </div>
     
    </footer>
  )
}

export default Footer
