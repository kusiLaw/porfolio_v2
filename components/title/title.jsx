import React from 'react'

const Title = ({text}) => {
  return (
    <div className='flex w-full text-2xl font-black md:text-3xl lg:text-[2rem]
         text-light_text_header dark:text-dark_text_header'>
         <h2 className="inline-block after:inline-block after:content-[''] after:bg-light_accent after:h-1">
         {text}
         </h2>
    </div>
  )
}


const SubTile = ({text}) => {
 return (
   <div className=''>
        <h3 className='text-lg 
        font-bold md:text-2xl text-light_text_header dark:text-dark_text_header'>
        {text}
        </h3>
   </div>
 )
}

export {Title, SubTile}