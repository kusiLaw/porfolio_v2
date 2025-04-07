import React from 'react'
import SlideInOnScroll from '../animation/animation'
const Experience = ({exp, cat}) => {
  return (
   <div className=''>
      <h3 className='text-base text-light_accent dark:text-dark_accent my-2'>{cat}</h3>
      <ul>
       {exp.map((el, index) => (<SlideInOnScroll key={el} yOffset={0.1} delay={(index + 1) * 0.1}
       className='relative pl-5 p-1 hover:scale-105 transition-all duration-500'>
             <span className='before:content-["▹"] before:absolute  before:left-0  
             before:dark:text-dark_accent before:text-light_accent text-base '>{el}</span>
       </SlideInOnScroll>
       ))
     
       }
     </ul>
   </div>
   
  )
}

export default Experience
