import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import { Title } from '@/components/title/title'
import Project from '@/components/project/project'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout>
  
      <section className='flex flex-col align-middle min-h-screen	 text-lg pt-24 md:pt-40'>
         <div className='h-fit	 pb-6 w-full	'>
         {/* border-solid border-2 border-red-200 */}
             <h1 className='leading-relaxed bg-clip-text'>
                 <span className='block text-lg text-light_text_color'>Hi, my name is</span> 
                 <span className=' block text-name_font text-transparent '>Lawrence Addai Kusi.</span>
             </h1>

             <p className='block text-2xl sm:tracking-wider	mt-3 mb-3 text-light_text_header dark:text-dark_text_header font-semibold'> 
                {'>'} Full-Stack Developer 
             </p>
             
             <p className=' text-light_text_color
             dark:text-dark_text_color leading-relaxed md:w-80 mt-20 phone:mt-6 mb-6 text-xl'>
                A developer with a great passion for UI creation, effects, animation, and dynamic user experiences. 
                Devoted to developing customized software to meet organizational needs, 
                highlight their core competencies, and further their success. Look through some of my work and experience! 
                If you like what you see and need help on a project, I am available for hire. 
             </p>
             <div className='mt-16 mb-5'>
                    <Link href='#' className='p-3 rounded-lg border-2 text-white bg-btn-active 
                    border-light_accent dark:border-dark_accent shadow-md shadow-light_accent' >
                    Check Out My Works</Link>
             </div>
         </div>
      </section>

      <section className=' '>
           <div className='mb-10'>
               <Title text={'Projects'}/>
           </div>
           <div className=''>
             <Project 
                 img={'/me.png'}
                 text={'If you like what you see and need help \
                 on a project, I am available for hire kkhjhkjkj \
                 .If you like what you see and need help \
                 on a project, I am available for hire kkhjhkjkj '}
                 title ={'Portfolio'}
                 tech_stack = {['NextJS', "React", "Tailwind"]}
                 source ={'#'}
                 live = {'#'}
                 type ={'Web'}
                 year = {'2023'}
              />
           </div>
      </section>
    
   </Layout>
  )
}
