import formValidation from '@/utilities/validation'
import { useState } from 'react'
import axios from 'axios'
import InputText from '../input/input'
import TextArea from '../input/textarea'


const ContactForm = () => {

 const [errorMsg, setErrorMgs] = useState('')
 const [success, setSuccess] = useState(false)

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

   if(!formValidation.name(name.value)){
    setErrorMgs('Invalid name format')
    return
   }

 
   if(!formValidation.email(email.value)){
    setErrorMgs('Invalid email address')
    return
   }
  

   const formData = new FormData(e.target);
   const formJson = Object.fromEntries(formData.entries());
 

   formSpare(formJson).then( () => {
    name.value = ''
    email.value = ''
    setSuccess(true)
    setErrorMgs('Thank you for contacting me. You will hear from me in less than 12 hours.')
   
    })
    .catch( () => {
     e.target.elements.name.value = ''
     email.value = ''
     setErrorMgs('Error ocurred, please try again')
    
    });

    setTimeout(() => {
     setErrorMgs('')
     setSuccess(false)
   }, "5000");

}

  return (
    <>
      <form onSubmit={handleForm} action="" method="post" className='flex flex-col justify-center  gap-6'>
                     <div className='flex flex-col gap-6 md:flex-row md:justify-between md:gap-4 xl:flex-col 
                                     xl:gap-6 '>
                        <div className='form_name md:w-full'>
                           <InputText  label='Name' name='name'/>
                        </div>
                         <div className='form_email md:w-full'>
                            <InputText  label='Email' name='email' type='email'/>
                         </div>
                     </div>
          
                   <div className='form_text' >
                        <TextArea label="Message" name="message" maxLength='500'/>
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
                   hover:dark:text-white hover:border-bg-dark_accent hover:dark:bg-dark_accent ' />
                   </div>
                   
                </form>
    </>
  )
}

export default ContactForm
