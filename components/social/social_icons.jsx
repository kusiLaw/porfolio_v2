
import { FaLinkedinIn, FaGithub, FaAngellist } from "react-icons/fa"
import { AiOutlineMail, AiOutlineMedium} from "react-icons/ai"
import Link from "next/link"

const SocialIcons = () => {
  return (
   < >
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
  </>

  )
}

export default SocialIcons
