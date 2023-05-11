import Link from "next/link"


const Resume = ({isOpen}) => {
  return (
   <Link href={'https://drive.google.com/file/d/1cUlp3LK7mRJ3TiUL1mKXVWYSnCGjkizi/view?usp=sharing'} className={isOpen ? 'inline-block border-2 border-dotted  mt-5 px-3 py-3  \
     border-light_accent dark:border-dark_accent text-light_accent  dark:text-dark_accent \
   hover:text-white hover:border-bg-light_accent  hover:bg-light_accent  \
    hover:dark:text-white hover:border-bg-dark_accent hover:dark:bg-dark_accent' : 
   
   'hidden xl:inline-block border-dotted border-4 \
   border-light_accent text-light_accent dark:border-dark_accent py-1 px-3 dark:text-dark_accent \
   hover:text-white hover:border-bg-light_accent  hover:bg-light_accent  \
    hover:dark:text-white hover:border-bg-dark_accent hover:dark:bg-dark_accent'} target="_blank">{isOpen ? "Get My Resume" : "Resume"}</Link>
  )
}

export default Resume
