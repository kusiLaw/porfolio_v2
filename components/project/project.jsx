import Image from "next/image"
import { SubTile } from "../title/title"
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md"
import Link from "next/link";

const Project = ({img,text, live, title, source,year, type, tech_stack = []}) => {
  return (
    <div className='flex flex-col min-w-[320px] w-full '>
        <div className='flex flex-col relative 
                        lg:flex-row lg:w-full
                         '>
           <div className='relative w-100 h-64 overflow-hidden shadow-md
           lg:w-3/5	lg:shadow-none
            '>
           {/* // after:inline-block after:content-["ddsds"] after:h-48 after:overflow-hidden after:clear-left */}

              <Image src={img} 
              placeholder="blur" 
              blurDataURL={img}
              fill
              style={{ objectFit: "100%"}}
               />
           </div>

            <div className="dark:absolute dark:bg-dark_hover_shallow dark:hover:bg-transparent
             dark:top-0  -bottom-40 right-0 left-0"></div>
             
            <div className=' pt-6 lg:pt-0 pb-2 lg:pb-0  bg-white dark:bg-dark_bg_secondary absolute 
                             right-0 left-0 top-40 h-fit shadow-md 

                             lg:flex-col lg:justify-between	  lg:relative lg:top-0 lg:h-80 lg:w-2/5 lg:dark:bg-transparent
                             lg:bg-transparent lg:shadow-none
                      
                             '>
                <div className="p-2 lg:flex lg:justify-end ">
                    <SubTile text={title }/>
                </div>

                <div className="text-light_accent dark:text-dark_accent flex justify-end pr-2 uppercase text-xs gap-4 ">
                   {type} {" "}  {year}
                </div>
                <div className="p-2 lg:p-4 lg:dark:bg-dark_bg_secondary flex-col flex-wrap
                lg:bg-light_accent_divider  lg:-ml-40 lg:shadow-md  lg:z-10 lg:m-1">
                   {text}
                </div>

                <div className="flex p-2 gap-3 lg:justify-end ">
                  {tech_stack.map((stack) =>(
                    <span key={stack} className="inline-block text-light_accent 
                    dark:text-dark_accent text-sm flex-grow-0">
                    {stack}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end  self-end text-2xl gap-4 p-3 lg:p-2 font-bold " >
                    <Link href={source}>
                       <AiFillGithub />
                    </Link>
                   <Link href={live}>
                      <MdOpenInNew />
                   </Link>
                </div>
            </div>
            <div className="h-60"></div>
        </div>   
    </div>
  )
}

export default Project