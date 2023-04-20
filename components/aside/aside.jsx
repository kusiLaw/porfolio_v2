
import SocialIcons from "../social/social_icons"

const Aside = () => {
  return (
    <aside className='fixed left-5 h-screen phone:hidden lg:block '>
      <div className='flex flex-col   
                        h-full justify-center text-2xl text-dark_text_header'>
      <div className = 'flex flex-col gap-5  '>
        <SocialIcons/>
      </div>
       

      </div>
    </aside>
  )
}

export default Aside
