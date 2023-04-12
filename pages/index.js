import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout>
      <section className='md:h-screen flex flex-col align-middle pt-20 '>
         <h1 className='dark:text-dark_context_color text-light_context_color'>
             <span className='block text-lg text-light_text_color'>Hi, my name is</span> 
             Lawrence Addai Kusi.
             <span className='block'> {'>'} Full-Stack Developer </span>
         </h1>

         <p className=' text-light_text_color
         dark:text-dark_text_color'>
            A developer with a great passion for UI creation, effects, animation, and dynamic user experiences. 
            Devoted to developing customized software to meet organizational needs, 
            highlight their core competencies, and further their success. Look through some of my work and experience! 
            If you like what you see and need help on a project, I am available for hire. 
         </p>


      </section>

      <section>
       dadadasdasdasdasdasasdasdas
      </section>
     
   </Layout>
  )
}
