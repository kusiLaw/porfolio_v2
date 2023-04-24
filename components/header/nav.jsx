import Link from 'next/link';

const Nav = ({desktop}) =>{
 return (
     <nav className="flex space-x-2
   ">
      {[
        ['Home', '/'],
        ['About', '#about'],
        ['Project', '#projects'],
        ['Contact', '#contact'],
      ].map(([title, url], index) => (
        <Link key={index} href={url}  className="
              px-3 py-2 font-medium ">
                <span className='md:hidden xl:inline-block
                 mr-3  text-light_accent_dark dark:text-dark_accent italic'> 0{index + 1}.</span> 
                <span className='dark:text-dark_text_header text-xl  
                                  hover:border-b-light_accent'>{title}</span>
        </Link>
      ))}
     </nav>
 )
}


export default Nav


// hover:border-dotted hover:border-offset-2 hover:border-b-[3px]