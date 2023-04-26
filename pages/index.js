import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import { Title, SubTile } from '@/components/title/title'
import Project from '@/components/project/project'
import Archive from '@/components/archive/archive'
import InputText from '@/components/input/input'
import TextArea from '@/components/input/textarea'
import { FaLongArrowAltRight} from "react-icons/fa"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


 const exp_list =(exp)=>{
  return (
   <ul>
                {exp.map((el) => (<li key={el} 
                className='relative pl-5 '>
                      <span className='before:content-["▹"] before:absolute  before:left-0  
                      before:dark:text-dark_accent before:text-light_accent'>{el}</span>
                </li>
                ))
                
                }
    </ul>
  )
 }


  return (
   <Layout>
  
      <section id='presentation' className=' flex flex-col align-middle min-h-fit	text-lg pt-24 md:pt-40 pr-1 pl-1 '>
         <div className='h-fit	 w-full	'>
             {/* border-solid border-2 border-red-200 */}
             <h1 className='leading-relaxed bg-clip-text bg-name_gradient dark:bg-name_dark_gradient '>
                 <span className='block text-lg text-light_text_color'>Hi, my name is</span> 
                 <span className=' block text-name_font text-transparent animate-[bgSlide_3s_ease_in_out] '>Lawrence Addai Kusi.</span>
             </h1>

             <p className='block text-2xl sm:tracking-wider	mt-3 mb-3 text-light_text_header 
              dark:text-dark_text_header font-semibold'> 
                {'>'} Full-Stack Developer 
             </p>
             
             <p className=' text-light_text_color    
             dark:text-dark_text_color leading-relaxed md:w-80 mt-20 phone:mt-6 mb-6 text-xl'>
                A developer with a great passion for UI creation, effects, animation, and dynamic user experiences. 
                Devoted to developing customized software to meet organizational needs, 
                highlight their core competencies, and further their success. Look through some of my work and experience! 
                If you like what you see and need help on a project, I am available for hire. 
             </p>
             <div className='mt-16 mb-6 w-full'>
                    <Link href='#' className='flex gap-3 content-center w-fit p-3 rounded-lg border-4 border-dotted text-light_accent 
                    border-light_accent dark:border-dark_accent dark:text-dark_accent  dark:bg-transparent  
                    hover:text-white hover:border-bg-light_accent  hover:bg-light_accent  
                    hover:dark:text-white hover:border-bg-dark_accent hover:dark:bg-dark_accent' >
                    Contact Me <span className='inline-block m-auto' > <FaLongArrowAltRight/> </span></Link>
             </div>
         </div>
      </section>

      <section  id='projects' className='mt-20 md:mt-28'>
           <div className='mb-10 pr-2 pl-2 '>
               <Title text={'Projects'}/>
           </div>
           <div className='flex flex-col gap-[5rem] lg:gap-[110px] items-center '>
           
               <Project 
                   img={'/web.png'}
                   text={'If you like what you see and need help \
                   on a project, I am available for hire kkhjhkjkj \
                   .If you like what you see and need help \
                   on a project, I am available for hire kkhjhkjkj '}
                   title ={'Free Web Course'}
                   tech_stack = {['NextJS', "React", "Tailwind"]}
                   source ={'#'}
                   live = {'#'}
                   type ={'Web'}
                   year = {'2023'}
                   order = {0}
                />

     
             
              <Project 
                 img={'/lak.png'}
                 text={'If you like what you see and need help \
                 on a project, I am available for hire kkhjhkjkj \
                 .If you like what you see and need help \
                 on a project, I am availabs  d dd \
                 le for hire kkhjhkjkj '}   
                 title ={'Portfolio'}
                 tech_stack = {['NextJS', "React", "Tailwind", "Rails"]}
                 source ={'#'}
                 live = {'#'}
                 type ={'Web'}
                 year = {'2023'}
                 order = {1}
              />
 
              
           </div>
       </section>
       
       <section id='extra_projects' className='mt-20 md:mb-28 pr-2 pl-2 '>
           <div className='mb-10'>
               <Title text={'More Projects'}/>
           </div>
           <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 content-start'>
              <Archive 
              title={'To do list'}
              main_tech = {'Html'}
              other_techs = {['Tailwind', 'boostrap', 'Css']}
               text={'If you like what you see and need help \
                 on a project, I am available for hire kkhjhkjkj \
                 .If you like what you see and need help \
                 on a project, I am availabs dddd dddd ddddddd ddddddd dddd dddddddd ddd dddddddd dddddd dddd dddd ddddd ddddd dd dd dd dd dd \
                 le for hire kkhjhkjkj '} 
              />
                <Archive 
              title={'To do list'}
              main_tech = {'React'}
              other_techs = {['Tailwind', 'boostrap', 'Css']}
               text={'If you like what you see and need help \
                 on a project, I am available for hire kkhjhkjkj \
                 .If you like what you see and need help \
                 on a project, I am availabs dddd dddd ddddddd ddddddd dddd dddddddd ddd dddddddd dddddd dddd dddd ddddd ddddd dd dd dd dd dd \
                 le for hire kkhjhkjkj '} 
              />
                <Archive 
              title={'To do list'}
              main_tech = {'Python'}
              other_techs = {['Tailwind', 'boostrap', 'Css']}
               text={'If you like what you see and need help \
                 on a project, I am available for hire kkhjhkjkj \
                 .If you like what you see and need help \
                 on a project, I am availabs dddd dddd ddddddd ddddddd dddd dddddddd ddd dddddddd dddddd dddd dddd ddddd ddddd dd dd dd dd dd \
                 le for hire kkhjhkjkj '} 
              />
           </div>
       </section>


       <section id='about' className='mt-20 md:mt-28 pr-2 pl-2'>
          <div className='py-10'>
             <Title text={'About Me'} />
          </div>
          <div className='flex flex-col gap-3 flex-wrap '>
              <div className=''>
                   <p>Hello! My name is Lawrence Addai Kusi. I’m a Full-Stack Software Developer from Ghana. 
                       I have a great passion for UI creation, effects, animation, and dynamic user experiences. 
                       I'm interested in working on ambitious projects with positive people and goal-oriented companies. 
                   </p>
                   <p>
                        I fully immersed myself in the software development world. Since May 2022, I've been building my technical, leadership, 
                        and collaborative skills at 
                        <Link href={'https://www.microverse.org/'} className='dark:text-dark_accent text-light_accent inline-block px-2 '>Microverse</Link> 
                        through collaboration and pair programming with other students from all over the world. 
                   </p>
                   <p>
                       My goal as a Software Developer is to continually improve my programming skills,
                        and create high-quality software to present better solutions for individuals and 
                        businesses. I enjoy uncovering new ideas and would use them to advance my employers' mission to deliver the best tech experiences. 
                   </p>
              </div>
              <div className=''>
                  <div className='flex flex-row gap-2 phone:justify-between sm:justify-start sm:gap-16
                  bg-(url("../../public/pattern-quotes.svg")] bg-left bg-auto'>
                  {exp_list(['Javascript (ES6+)','Next.js 13','React', 'python', 'Ruby', 'Ruby on Rails'])}
                  {exp_list(['Communication','Pair-programming', 'Remote Work', 'Problem-Solving'])}
                  
                  </div>
              </div>
              
             

              
             
          </div>
       </section>


       <section id='contact'  className='mt-20 md:mt-28 flex flex-col bg-inherit  justify-center shadow-md 
                          dark:bg-dark_bg_secondary xl:bg-light_grad_form xl:dark:bg-grad_form xl:border-solid xl:border-[0.5px] xl:dark:border-dark_accent'>  
           <div className=' flex flex-col gap-5  
                          xl:flex-row xl:gap-[0px] xl:bg-transparent
                         '>
             <div className='flex flex-col gap-4 px-3 pt-8 xl:w-[50%]  '>
                 <Title text={'Contact Me'} />
                <p> Your feedback is important to Me. </p>
                <p>If you have an application you are interested in developing, a feature that you need to build, or a project that needs coding. I’d love to help with it.</p> 
             </div>
             <div className='form_wrapper  pt-5 px-3 xl:pt-10 xl:w-[50%] xl:pl-10 xl:pr-4   '>
                <form onSubmit={''} className='flex flex-col justify-center  gap-6'>
                     <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-4 xl:flex-col 
                                     xl:gap-6 '>
                        <div className='form_name lg:w-full'>
                           <InputText  label='Name' name='name'/>
                        </div>
                         <div className='form_email lg:w-full'>
                            <InputText  label='Email' name='email'/>
                         </div>
                     </div>
          
                   <div className='form_text' >
                        <TextArea label="Message" name="message" maxLength='500'/>
                   </div>
                   <div className='flex justify-end pb-5' >
                        <input type='submit'  value={'Submit'} className='p-2 px-8 rounded-lg border-2 text-light_accent 
                    border-light_accent dark:border-dark_accent  dark:text-dark_accent 
                     dark:bg-transparent 
                     hover:text-white hover:border-bg-light_accent  hover:bg-light_accent  hover:shadow-md
                   hover:dark:text-white hover:border-bg-dark_accent hover:dark:bg-dark_accent ' />
                   </div>
                   
                </form>
             </div>
           </div>
       </section>
        
 
   </Layout>
  )
}
