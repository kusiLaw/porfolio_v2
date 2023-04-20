import React from 'react'
import SocialIcons from '../social/social_icons'

const Footer = () => {
  return (
    <footer className='w-full p-10 text-lg flex justify-center'>
      <div className='flex flex-col gap-5 w-full items-center '>
        <div className='flex'>
          <p>Nice to meet you</p>
        </div>
        <div className='flex gap-5'>
         <SocialIcons />
        </div>
        <div className='text-sm italic '>
          <p>
          Developer: Lawrence Addai Kusi. April 2023
          </p>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer
