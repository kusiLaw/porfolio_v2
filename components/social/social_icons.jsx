
import { FaLinkedinIn, FaGithub, FaAngellist } from "react-icons/fa"
import { AiOutlineMail, AiOutlineMedium} from "react-icons/ai"
import Link from "next/link"

const SocialIcons = () => {
  return (
   < >
   <Link href="https://github.com/kusiLaw" target="blank" className="hover:dark:text-dark_accent  hover:scale-110 duration-300">
      <FaGithub  className="hover:dark:text-dark_accent hover:text-light_accent_dark"/>
   </Link>
   <Link href="https://www.linkedin.com/in/lawrence-addai-kusi/" target="blank"  className="hover:dark:text-dark_accent hover:scale-110 duration-300">
      <FaLinkedinIn className="hover:dark:text-dark_accent hover:text-light_accent_dark" />
   </Link>
   <Link href="https://wellfound.com/u/lawrence-kusi-addai" target="blank" className="hover:dark:text-dark_accent hover:scale-110 duration-300">
      <FaAngellist className="hover:dark:text-dark_accent hover:text-light_accent_dark"/>
   </Link>
   <Link href="https://medium.com/@lawcubegsm/" target="blank" className="hover:dark:text-dark_accent hover:scale-110 duration-300">
      <AiOutlineMedium className="hover:dark:text-dark_accent hover:text-light_accent_dark"/>
   </Link>
   <Link href="mailto:lawrence.kusi.addai@gmail.com"  className="hover:dark:text-dark_accent hover:scale-110 duration-300" >
      <AiOutlineMail className="hover:dark:text-dark_accent hover:text-light_accent_dark"/>
   </Link>
  </>

  )
}

export default SocialIcons
