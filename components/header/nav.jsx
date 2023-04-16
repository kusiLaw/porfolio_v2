import Link from 'next/link';

const Nav = ({desktop}) =>{
 return (
     <nav className="flex sm:justify-center space-x-2
   ">
      {[
        ['Home', '/'],
        ['About', '#about'],
        ['Project', '#projects'],
        ['Contact', '#contact'],
      ].map(([title, url], index) => (
        <Link key={index} href={url}  className="
             rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-light_accent_dark">
                <span className='md:hidden lg:inline-block
                 mr-3  text-light_accent_dark dark:text-dark_accent italic'> 0{index + 1}.</span> 
                <span className='dark:text-dark_text_header text-xl '>{title}</span>
        </Link>
      ))}
     </nav>
 )
}


export default Nav
