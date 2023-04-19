import Head from "next/head";
import Header from "../header/header";
import Aside from "../aside/aside";


export default function Layout({ children }) {
 return (
     <div className="w-full flex flex-col items-center relative text-light_text_color dark:text-dark_text_color">
        
         <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link rel="icon" href="/favicon.ico" />
           <title>Lawrence Kusi Portfolio</title>
           <meta name="description"  content="Lawrence Addai Kusi Portfolio | Modern portfolio website"/>
         </Head>
         <Header />
      
         <main className='w-90 lg:w-80 max-w-screen-2xl '>
           {children}
         </main>
         <Aside />
     </div>

 );
}