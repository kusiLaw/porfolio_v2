import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import { Title, SubTile } from '@/components/title/title'
import Project from '@/components/project/project'
import Archive from '@/components/archive/archive'

import { FaLongArrowAltRight} from "react-icons/fa"
import ContactForm from '@/components/form/form'
import Experience from '@/components/experince_list/experience'


import loadData from '@/lib/load_data'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  const {experience = [] ,projects = [],  extra_projects = []} = data
  const [viewAll, setViewAll] = useState(false)

  return (
   <Layout>

      <section id='presentation' className='flex flex-col align-middle min-h-fit max-h-[1080px]	text-lg pt-24
       md:pt-40 pr-1 pl-1 overflow-x-hidden scrollbar-hide lg:h-[730px]  lg:justify-center lg:pt-[70px] '>
         <div className='h-fit	 w-full lg:max-h-[824px] lg:flex lg:flex-col lg:justify-between'>
             <h1 className='leading-normal bg-clip-text bg-name_gradient dark:bg-name_dark_gradient '>
                 <span className='block text-lg text-light_text_color md:mb-3'>Hi, my name is</span>
                 <span className=' block text-name_font text-transparent '>Lawrence Addai Kusi.</span>
             </h1>

             <p className='block text-xl sm:tracking-wider	mt-3 mb-3 text-light_text_header
              dark:text-dark_text_header font-semibold'>
                {'>'} Full-Stack Developer
             </p>

             <p className=' text-light_text_color
             dark:text-dark_text_color leading-relaxed md:w-80 mt-20 phone:mt-6 mb-6 text-base mdx:text-lg mdx:leading-loose'>
                A Developer with a proven track record in web application development. Eager to contribute innovative business solutions to global clients, 
                I bring proficiency in React.js, JavaScript, Next.js, and Python.   I don't just code; I architect solutions that redefine user interactions. My commitment to excellence is complemented by strong communication and collaboration skills, making me not just a developer,
                but a strategic partner ready to spearhead innovation and deliver exceptional results. Let's transform ideas into extraordinary digital realities together.
             </p>

             <div className='mt-12 mb-6 w-full'>
                    <Link href='#contact' className='flex gap-3 content-center w-fit p-3 rounded-lg
                    hover:drop-shadow-2xl hover:scale-105
                    bg-light_accent text-white dark:bg-dark_accent dark:text-white

                     hover:border-bg-light_accent
                     hover:border-bg-dark_accent  transition-all duration-300 text-base' >
                    Contact Me <span className='inline-block m-auto' > <FaLongArrowAltRight/> </span></Link>
             </div>
         </div>
      </section>

      <section id='projects'  className='pt-20 md:pt-28 lg:pt-0 lg:mt-3'>
           <div className='mb-16 pr-2 pl-2 md:mb-20 ' >
               <Title text={'Projects'}/>
           </div>
           <div className='flex flex-col gap-[4rem] lg:gap-[200px] items-center '>

               {projects.map((project, index) =>(
                <Project {...project}  order={index % 2 }  key={project.title}/>
               ))}
           </div>
      </section>

       <section id='extra_projects' className='pt-20 md:pt-28 pr-2 pl-2 '>
           <div className='mb-10'>
               <Title text={'More Projects'}/>
           </div>
           <div className='grid md:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-6 content-start'>
              { viewAll ? extra_projects.map((project) =>(
                <Archive {...project} key={project.title}/> )) :

                extra_projects.slice(0,2).map((project) =>(
                <Archive {...project} key={project.title}/> ))
                }
           </div>
           { !viewAll && <div className='flex justify-end py-6 mr-1 text-light_accent dark:text-dark_accent  '>
              <button className='hover:underline hover:underline-offset-[12px] border-collapse bg-inherit ' onClick={ () =>{
                 setViewAll(true)
              }

              }>View all</button>
           </div>}
       </section>

       <section id='about' className='pt-10 mt-10 md:mt-14 md:pt-14 pr-2 pl-2
       '>
          <div className='py-10'>
             <Title text={'About Me'} />
          </div>
          <div className='flex flex-col gap-3 flex-wrap text-base md:text-lg leading-loose'>
              <div className=''>
                   <p>Hello! My name is Lawrence Addai Kusi. I’m a Full-Stack Software Developer from Ghana.
                       I have a great passion for UI creation, effects, animation, and dynamic user experiences.
                       I{`'`}m interested in working on ambitious projects with positive people and goal-oriented companies.
                   </p>
                   <p>
                        I fully immersed myself in the software development world. Since May 2022, I{`'`}ve been building my technical, leadership,
                        and collaborative skills at
                        <Link href={'https://www.microverse.org/'} target='_blank' className='dark:text-dark_accent text-light_accent inline-block px-2 '>Microverse</Link>
                        through collaboration and pair programming with other students from all over the world.
                   </p>
                   <p>
                       My goal as a Software Developer is to continually improve my programming skills,
                        and create high-quality software to present better solutions for individuals and
                        businesses. I enjoy uncovering new ideas and would use them to advance my employers{`'`} mission to deliver the best tech experiences.
                   </p>
              </div>
              <div className=''>
                  <div className='flex  flex-wrap gap-8'>

                     {experience.map(exp =>(
                      <div className=''  key={exp.cat}>
                          <Experience {...exp}/>
                      </div>
                     ))}

                  </div>
              </div>


          </div>
       </section>

       <section id='contact' className='mt-10 pt-10 md:pt-28' >
           <div className=' flex flex-col bg-inherit  justify-center shadow-md
                          dark:bg-dark_bg_secondary xl:bg-light_grad_form xl:dark:bg-grad_form xl:border-solid xl:border-[0.5px] xl:dark:border-dark_accent'>

             <div className=' flex flex-col gap-5
                            xl:flex-row xl:gap-[0px] xl:bg-transparent
                           '>
               <div className='flex flex-col gap-4 px-3 pt-8 xl:w-[50%]  '>
                   <Title text={'Contact Me'} />
                  <p className='text-lg'> Your feedback is important to Me. </p>
                  <p className='text-base'>If you have an application you are interested in developing, a feature that you need to build, or a project that needs coding. I’d love to help with it.</p>
               </div>
               <div className='form_wrapper  pt-5 px-3 xl:pt-10 xl:w-[50%] xl:pl-10 xl:pr-4   '>
                  <ContactForm />
               </div>
             </div>
           </div>


       </section>


   </Layout>
  )
}


export async function getStaticProps(context) {
 const data = loadData()
 return {
   props: {data}, // will be passed to the page component as props
 }
}
