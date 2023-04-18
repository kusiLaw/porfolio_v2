import styles  from './input.module.css'



const TextArea = ({ 
 name ='name', 
required= true, label='text', 
col = "2", row = '5', maxLength = "250"
}) => {
 return (

    <div className='relative  w-full text-light_text_color dark:text-dark_text_color'>
      <textarea   required={required} name={name} id={name} rows={row} cols={col} maxLength={maxLength} 
      className='w-full py-2 px-2 text-inherit dark:bg-dark_text_header dark:text-dark_bg border-0	
      bg-dark_bg focus:border-0 focus:border-light_accent dark:focus:border-dark_accent' />
      <label htmlFor={name} className=' absolute top-0 left-0 py-2 px-2 text-sm 
      pointer-events-none ease-linear duration-[0.5]
      dark:text-dark_text_color
       '>{label}</label>
   </div>

 )
}

export default TextArea