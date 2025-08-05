import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import { Title, SubTile } from '@/components/title/title'
import Project from '@/components/project/project'
import Archive from '@/components/archive/archive'

import { FaLongArrowAltRight} from "react-icons/fa"
import ContactForm from '@/components/form/form'
import Experience from '@/components/experince_list/experience'
import SlideInOnScroll from '@/components/animation/animation'


import loadData from '@/lib/load_data'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  const {experience = [] ,projects = [],  extra_projects = []} = data
  const [viewAll, setViewAll] = useState(false)

  return (
   <Layout>
      <SlideInOnScroll delay={0} >
        <section id='presentation' className='flex flex-col align-middle min-h-fit lg:h-[100vh] max-h-[1080px]	text-lg pt-24
        md:pt-40 pr-1 pl-1 overflow-x-hidden scrollbar-hide lgh-[730px]  lg:justify-center lg:pt-[70px] '>
            <div className='h-fit	 w-full lg:max-h-[824px] lg:flex lg:flex-col lg:justify-between'>
                <h1 className='leading-normal bg-clip-text bg-name_gradient dark:bg-name_dark_gradient '>
                    <span className='block text-lg text-light_text_color dark:text-gray-400 md:mb-3'>Hi, my name is</span>
                    <span className=' block text-name_font text-transparent '>Lawrence Addai Kusi.</span>
                </h1>

                <p className='block text-base sm:tracking-wider	mt-3 mb-3 text-light_text_header
                dark:text-gray-400 '>
                    {'>'} Full-Stack Developer | DevOps | Cloud Engineer
                </p>

                <p className=' text-light_text_color
                dark:text-gray-300 leading-relaxed md:w-80 mt-20 phone:mt-6 mb-6 text-base mdx:text-lg mdx:leading-loose dark:hover:text-gray-300
                transition-all duration-500'>
                          I&apos;m a <strong>Full Stack Developer</strong>  with a passion for building robust, scalable web applications.
                          My expertise spans across <strong> Next.js, React, and Django, </strong> complemented by strong skills in <strong>REST APIs </strong>and cloud deployment on AWS.
                          As an <strong> AWS  Certified Solutions Architect - Associate, </strong> I specialize in creating high-performance, user-centric experiences and
                          streamlining development workflows through <strong> CI/CD  pipelines</strong>. Explore my projects to see how I bring innovative solutions to life.


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
      </SlideInOnScroll>
      <section id='projects'  className='pt-20 md:pt-28 lg:pt-0 lg:mt-3'>
           <div className='mb-16 pr-2 pl-2 md:mb-20 ' >
               <Title text={'Projects'}/>
           </div>
           <div className='flex flex-col gap-[4rem] mdx:gap-[200px] items-center '>

              {projects.map((project, index) => (
                <div key={project.title} className='w-full'>
                    <SlideInOnScroll duration={1} className='flex flex-col min-w-[320px] w-full'>
                        <Project {...project}  order={index % 2 }  />
 
                    </SlideInOnScroll>
                </div>
               ))}
           </div>
      </section>
     <section id='extra_projects' className='pt-20 md:pt-28 pr-2 pl-2 '>
        <div className='mb-10'>
            <Title text={'More Projects'}/>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-6 content-start'>
                {viewAll ? extra_projects.map((project, index) => (
                <SlideInOnScroll duration={1} delay={(index + 1) * 0.1} className='flex flex-col min-w-[320px] w-full h-full' key={project.title}>

                        <Archive {...project} key={project.title} />
                </SlideInOnScroll>
            )) :

                    extra_projects.slice(0, 2).map((project, index) => (
                    <SlideInOnScroll duration={1} delay={(index + 1) * 0.1} className='flex flex-col min-w-[320px] h-full w-full' key={project.title}>

                            <Archive {...project} key={project.title} />
                    </SlideInOnScroll>
                    ))
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
          <div className='flex flex-col gap-3 flex-wrap text-base md:text-lg leading-loose dark:text-gray-300'>
                  <div className=''>
                                              {/* <Link href={'https://www.microverse.org/'} target='_blank' className='dark:text-dark_accent text-light_accent inline-block px-2 '>Microverse</Link> */}

                    <p>As a Full Stack Developer with a proven track record, I specialize in building responsive, scalable web applications.
                        My journey began as a Junior Python Developer at I.T HouseGH, where I focused on writing modular code and optimizing database performance.
                        I then transitioned to a Front End Developer role at Hot Platform, leading the design and development of a company payment platform and
                        significantly improving accessibility and user engagement. Currently, as a Freelance Full Stack Developer at WebSP,
                        I provide end-to-end web development services, excelling in creating high-performance, SEO-optimized applications and managing
                        the full project lifecycle from consultation to deployment and optimization. </p>

                    <p className='my-3'>My academic foundation includes a BSc. in Information Technology Education from the University of Education.
                        I&apos;ve continuously advanced my skills through professional development, including the AWS Cloud Practitioner Training Program,
                        where I gained hands-on experience with core AWS services, Infrastructure as Code (Terraform, CloudFormation), and CI/CD pipelines.
                        My expertise in cloud architecture is further solidified by my AWS Certified Solutions Architect - Associate certification.
                        Additionally, I completed a Full Stack Web Developer Course at Microverse, mastering various frameworks and collaborative development practices,
                        and a Python Specialization from the University of Michigan, focusing on data manipulation and web services. </p>

                    <p className='my-3'>My technical proficiency spans JavaScript, Python, and TypeScript. I am highly skilled in frameworks like Next.js, React, and Django,
                        and adept with databases such as MySQL and PostgreSQL. For cloud and DevOps, I leverage AWS (ECS, CloudFormation, EC2, S3, RDS, VPC, IAM, Lambda, DynamoDB),
                        Docker, Kubernetes, Terraform, Jenkins, and GitHub Actions, ensuring efficient deployment and optimized performance through robust CI/CD pipelines. </p>
              </div>
              <div className=''>
                  <div className='grid grid-cols-2 md:grid-cols2 md:grid-cols-4 gap-6 md:gap-3 max-w-[1000px]'>

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
           <SlideInOnScroll className=' flex flex-col bg-inherit  justify-center shadow-md
                          dark:bg-dark_bg_secondary xl:bg-light_grad_form xl:dark:bg-grad_form xl:border-solid xl:border-[0.5px] xl:dark:border-dark_accent'>

             <div className=' flex flex-col gap-5
                            xl:flex-row xl:gap-[0px] xl:bg-transparent dark:text-gray-300
                           '>
               <div className='flex flex-col gap-4 px-3 pt-8 xl:w-[50%]  '>
                   <Title text={'Contact Me'} />
                  <p className='text-base'> Your feedback is important to Me. </p>
                  <p className='text-base'>If you have an application you are interested in developing, a feature that you need to build, or a project that needs coding. I’d love to help with it.</p>
               </div>
               <div className='form_wrapper  pt-5 px-3 xl:pt-10 xl:w-[50%] xl:pl-10 xl:pr-4   '>
                  <ContactForm />
               </div>
             </div>
           </SlideInOnScroll>


       </section>


   </Layout>
  )
}


export async function getStaticProps(context) {
 const data = loadData('data/data.json')
 return {
   props: {data}, // will be passed to the page component as props
 }
}
