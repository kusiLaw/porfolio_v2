import Link from 'next/link';
import SocialIcons from '../social/social_icons';
import Resume from '../resume/resume';

const Nav = ({isOpen, setOpen}) =>{
 return (
     <nav className={isOpen ? "absolute bg-inherit z-30 top-14 h-screen right-0 left-0 flex flex-col \
      items-center   px-5 pt-5 divide-y divide-light_accent dark:divide-dark_accent": 
     "flex space-x-2 md:block  transition-all duration-500 animate-delay-500 animate-duration-[5000] animate-fade-left"}>



       {/* flex pt-10 pb-10 items-center w-full justify-evenly text-2xl */}

      {[
        ['Home', '/'],
        ['About', '#about'],
        ['Project', '#projects'],
        ['Contact', '#contact'],
      ].map(([title, url], index) => (
        <Link key={index} href={url}  className={isOpen ? "w-full py-4 flex items-center hover:bg-light_accent_divider hover:dark:bg-dark_bg_secondary   transition-all duration-500 " :
        "px-3 py-2 font-medium hover:animate-shake hover:animate-once" } onClick={()=>{ isOpen && setOpen(false)}}>
                <span className='md:hidden xl:inline-block mr-3  text-light_accent_dark dark:text-dark_accent italic animate-Skew '> 0{index + 1}.</span> 
                <span className='dark:text-dark_text_header text-xl  
                                  hover:border-b-light_accent  hover:scale-[1.02] hover:animate-wiggle hover:animate-once'>{title}</span>
        </Link>
      ))}

      {isOpen && <div className='flex pt-5 pb-5 items-center w-full justify-end gap-4 text-2xl '>
                 <SocialIcons />
       </div>}

      {isOpen && <div className='flex justify-end self-end  w-fit'>
             <Resume isOpen />
      </div>}
      
     </nav>
 )
}


export default Nav


// hover:border-dotted hover:border-offset-2 hover:border-b-[3px]