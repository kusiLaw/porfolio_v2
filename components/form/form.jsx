import { useState } from 'react'
import axios from 'axios'


const ContactForm = () => {

 const [errorMsg, setErrorMgs] = useState('')
 const [success, setSuccess] = useState(false)
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [massage, setMassage] = useState('');

 const  formSpare = async (body) =>{
    return await axios.post('https://formspree.io/f/xaykwwqa',body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )

 }

const handleForm = (e) =>{
   e.preventDefault();

   let {name, email} = e.target.elements
   setErrorMgs('')
   setSuccess(false)

 
   const formData = new FormData(e.target);
   const formJson = Object.fromEntries(formData.entries());
 

   formSpare(formJson).then( () => {
    name.value = ''
    setName('')
    setEmail('')
    setMassage('')
    setSuccess(true)
    setErrorMgs('Thank you for contacting me. You will hear from me in less than 12 hours.')
   
    })
    .catch( () => {
     setErrorMgs('Error ocurred, please try again')
    });

    setTimeout(() => {
     setErrorMgs('')
     setSuccess(false)
   }, "8000");

}

  return (
    <>
      <form onSubmit={handleForm} action="" method="post" className='flex flex-col justify-center  gap-4'>
                     <div className='flex flex-col gap-4 md:flex-row md:justify-between md:gap-4 xl:flex-col 
                                     xl:gap-4 '>
                        <div className='form_name md:w-full'>
                           <div className='relative text-light_text_color dark:text-dark_text_color'>
                                    <label htmlFor='name' className=' py-4   pointer-events-none'>Name *</label>
                                    <input type='text'  required name='name' id='name' minLength='2' maxLength='45'  placeholder='Full Name'
                                       pattern='[A-Za-z\s*]+{1,45}' title='Invalid name format'
                                           value={name} onChange={e => setName(e.target.value.replace(/\s+/g, ' ')) 
                                           }
                                    className='w-full py-2 px-1 rounded-sm text-inherit border-collapse valid:border-2 valid:border-light_accent valid:dark:border-dark_accent 
                                     dark:bg-dark_text_header dark:text-dark_bg bg-light_accent_divider 
                                     focus:outline focus:outline-light_accent dark:focus:outline-dark_accent'
                                      />
                           </div>
                        </div>
                         <div className='form_email md:w-full'>
                           <div className='relative text-light_text_color dark:text-dark_text_color'>
                                      <label htmlFor='email' className=' py-4  pointer-events-none'>Email *</label>
                                      <input type='email'  required name='email' id='email' minLength='5' maxLength='65'  placeholder='Email Address'
                                         pattern='\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' title='Invalid Email format'
                                             value={email} onChange={e => setEmail(e.target.value.replace(/\s+/g, ' ')) }
                                      className='w-full py-2 px-1 rounded-sm text-inherit border-collapse valid:border-2  valid:border-light_accent valid:dark:border-dark_accent 
                                       dark:bg-dark_text_header dark:text-dark_bg bg-light_accent_divider 
                                       focus:outline focus:outline-light_accent dark:focus:outline-dark_accent' />
                             </div>
                         </div>
                     </div>
          
                   <div className='form_text' >
                     <div className='relative  w-full text-light_text_color dark:text-dark_text_color'>
                         <label htmlFor={name} className='py-2 pointer-events-none  
                         dark:text-dark_text_color
                          '>Text *</label>
                         <textarea   required  name='massage' id='massage' rows='4' cols='10' minLength='5' maxLength='256' 
                                    placeholder='Text'
                                   pattern='\w+\s*' title='Invalid format'
                                   value={massage} onChange={e => setMassage(e.target.value) }
                         className='w-full py-2 px-2 text-inherit dark:bg-dark_text_header dark:text-dark_bg  resize-none 	border-collapse valid:border-2  valid:border-light_accent valid:dark:border-dark_accent
                         bg-light_accent_divider focus:outline focus:outline-light_accent dark:focus:outline-dark_accent' />
                         
                      </div>
                   </div>
                   <div className='flex justify-between pb-5 gap-3' >
                      {
                      <dev className={success ? 'flex wrap text-sm text-green-500 italic ' :
                      'flex wrap text-sm text-red-500 italic '
                      }>{errorMsg}</dev> 
                      }
                     <input type='submit'  value={'Submit'} className='p-2 h-fit px-8 rounded-lg border-2 text-light_accent 
                    border-light_accent dark:border-dark_accent  dark:text-dark_accent 
                     dark:bg-transparent 
                     hover:text-white hover:border-bg-light_accent  hover:bg-light_accent  hover:shadow-md
                   hover:dark:text-white hover:border-bg-dark_accent hover:dark:bg-dark_accent transition-all duration-300' />
                   </div>
                   
                </form>
    </>
  )
}

export default ContactForm
