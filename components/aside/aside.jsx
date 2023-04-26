
import SocialIcons from "../social/social_icons"

const Aside = () => {
  return (
    <aside className='hidden lg:block fixed left-5 h-screen  '>
      <div className='flex flex-col   
                        h-full justify-center text-2xl text-light_text_header dark:text-dark_text_header'>
      <div className = 'flex flex-col gap-5  '>
        <SocialIcons/>
      </div>
       
      
      </div>
    </aside>
  )
}

export default Aside
