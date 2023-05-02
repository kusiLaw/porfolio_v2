import React from 'react'

const Experience = ({exp, cat}) => {
  return (
   <div className=''>
      <h3 className='text-lg text-light_accent dark:text-dark_accent my-2'>{cat}</h3>
      <ul>
       {exp.map((el) => (<li key={el} 
       className='relative pl-5 '>
             <span className='before:content-["▹"] before:absolute  before:left-0  
             before:dark:text-dark_accent before:text-light_accent'>{el}</span>
       </li>
       ))
     
       }
     </ul>
   </div>
   
  )
}

export default Experience
