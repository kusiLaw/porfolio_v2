import styles  from './input.module.css'
import { useState } from 'react';

const InputText = ({ 
 type = "text", name ='name', 
 required= true, label='text', 
 min = '1', max = '45'
 }) => {

  const [value, setValue] = useState('');

  return (

     <div className='relative text-light_text_color dark:text-dark_text_color'>
       <input type={type}  required={required} name={name} id={name} minLength={min} maxLength={max} 
          
              value={value} onChange={e => setValue(e.target.value.replace(/\s+/g, ' ')) 
              }
       className='text_input w-full py-2 px-1 text-inherit border-0  valid:border-green-500 invalid:border-red-500
        dark:bg-dark_text_header dark:text-dark_bg bg-light_accent_divider 
        focus:border-2 focus:border-light_accent dark:focus:border-dark_accent' />
       <label htmlFor={name} className='text_input_label absolute top-0 left-0 py-2 px-2 text-sm pointer-events-none ease-linear duration-[0.5] '>{label}</label>
    </div>

  )
}


export default InputText



 