
import { FaLinkedinIn, FaGithub, FaAngellist } from "react-icons/fa"
import { AiOutlineMail, AiOutlineMedium} from "react-icons/ai"

import Link from "next/link"

const Aside = () => {
  return (
    <aside className='fixed left-5 h-screen '>
      <div className='flex flex-col   
      h-full justify-center text-2xl text-dark_text_header'>

         <div className = 'flex flex-col gap-5  ' >
             <Link href="https://github.com/kusiLaw" target="blank" className="hover:dark:text-dark_accent">
                <FaGithub  className="hover:dark:text-dark_accent"/>
             </Link>
             <Link href="https://www.linkedin.com/in/lawrence-addai-kusi/" target="blank"  className="hover:dark:text-dark_accent">
                <FaLinkedinIn className="hover:dark:text-dark_accent"/>
             </Link>
             <Link href="https://wellfound.com/u/lawrence-kusi-addai" target="blank">
                <FaAngellist className="hover:dark:text-dark_accent"/>
             </Link>
             <Link href="https://medium.com/@lawcubegsm/" target="blank">
                <AiOutlineMedium className="hover:dark:text-dark_accent"/>
             </Link>
             <Link href="mailto:lawrence.kusi.addai@gmail.com" >
                <AiOutlineMail className="hover:dark:text-dark_accent"/>
             </Link>
         </div>

      </div>
    </aside>
  )
}

export default Aside
