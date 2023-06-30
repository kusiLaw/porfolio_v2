import Image from "next/image"
import { SubTile } from "../title/title"
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md"
import Link from "next/link";

const Project = ({img,text, live, title, source,year, type, order = 1, tech_stack = []}) => {
  return (
// border-solid border-2 border-red-200 
    <div className='flex flex-col min-w-[320px] w-full '>
        <div className={ order === 0 ? 'flex flex-col relative mdx:flex-row mdx:w-full' : 
                                       'flex flex-col relative mdx:flex-row-reverse mdx:w-full '}>

           <div className= {`relative w-100 h-[15rem] mdx:h-[17rem] lg:h-[20rem] xl:h-[22rem] overflow-hidden  drop-shadow-lg mdx:drop-shadow-2xl mdx:w-3/6 mdx:hover:scale-105 
               mdx:hover:shadow-xl ease-in-out duration-500 	`} >
                <Link href={live}  target="_blank">

                 <Image src={img} 
                 alt={title}
                 placeholder="blur" 
                 blurDataURL={img}
                 fill
                 style={{ objectFit: "100%"}}
                  />
                
                 <div className=" dark:absolute dark:bg-dark_hover_shallow_sm   mdx:dark:bg-dark_hover_shallow dark:hover:bg-transparent
                      dark:top-0  bottom-0   right-0 left-0 transition-all duration-500 "></div>
                 </Link>
           </div>
         
           {/* // bg-white bg-grad_light_project  dark:bg-dark_bg_secondary */}
            <div className=' pt-6 mdx:pt-0 pb-2 mdx:pb-0  
                              
                              bg-grad_light_project
                              mdx:bg-grad_project_inherit

                              dark:bg-grad_project
                              mdx:dark:bg-grad_project_inherit

                              h-fit shadow-md -mt-24 mdx:mt-0 z-30

                             mdx:flex-col mdx:justify-between	  mdx:relative mdx:top-0 mdx:h-80 mdx:w-3/6 
                             mdx:bg-transparent mdx:dark:bg-transparent mdx:shadow-none
                      
                             '>
                <div className={ order === 0 ? "p-2 mdx:flex mdx:justify-end ": "p-2  mdx:flex mdx:justify-start "}>
                    <SubTile text={title }/>
                </div>

                <div className= { order === 0 ? "text-light_accent dark:text-dark_accent flex justify-end pr-2 py-1  uppercase text-xs gap-4 italic  ":
                                                "text-light_accent dark:text-dark_accent flex justify-end mdx:justify-start py-1 pr-2 mdx:pl-2 uppercase text-xs gap-4 italic" }>
                   {type} {" - "}  {year}
                </div>
                <div className={ order === 0 ? "p-2 mdx:p-4 mdx:dark:bg-dark_bg_secondary flex-col flex-wrap   hover:border-light_accent hover:dark:border-dark_accent duration-500 \
                mdx:border mdx:border-3 mdx:border-light_text_header mdx:bg-light_accent_divider  mdx:-ml-28 mdx:shadow-sm  mdx:z-10 mdx:m-1  mdx:rounded-md text-lg lg:text-xl" :
                "p-2 mdx:p-4 mdx:dark:bg-dark_bg_secondary flex-col flex-wrap   hover:border-light_accent hover:dark:border-dark_accent transition-all duration-500\
                 mdx:border mdx:border-3 mdx:border-light_text_header mdx:bg-light_accent_divider  mdx:-mr-28 mdx:shadow-sm  mdx:z-10 mdx:m-1 mdx:rounded-md text-lg lg:text-xl"
                }>
                   {text}
                </div>

                <div className={ order === 0 ? "flex p-2 gap-3 mdx:justify-end " : "flex p-2 gap-3 mdx:justify-start " }>
                  {tech_stack.map((stack) =>(
                    <span key={stack} className="inline-block text-light_accent 
                    dark:text-dark_accent text-sm flex-grow-0">
                    {stack}
                    </span>
                  ))}
                </div>

                <div className= { order === 0 ? "flex justify-end  self-end text-2xl gap-4 p-3 mdx:p-2 font-bold " :
                                                "flex justify-end  self-end text-2xl gap-4 p-3 mdx:p-2 mdx:justify-start font-bold"} >
                    <Link href={source} className="hover:dark:text-dark_accent hover:scale-110 duration-200" target="_blank">
                       <AiFillGithub />
                    </Link>
                   <Link href={live} className="hover:dark:text-dark_accent hover:scale-110 duration-200" target="_blank">
                      <MdOpenInNew />
                   </Link>
                </div>
            </div>
            {/* <div className="h-60  mdx:hidden"></div> */}
        </div>   
    </div>
  )
}

export default Project