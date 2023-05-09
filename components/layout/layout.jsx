import Head from "next/head";
import Header from "../header/header";
import Aside from "../aside/aside";
import Footer from "../footer/footer";


export default function Layout({ children }) {
 return (
     <div className="w-full flex flex-col items-center relative 
                     text-light_text_color dark:text-dark_text_color" >
        
         <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link rel="icon" href="/favicon.ico" />
           <title>Lawrence Kusi Portfolio</title>
           <meta name="description"  content="Lawrence Addai Kusi Portfolio | Modern portfolio website"/>
         </Head>
         {/* <div className="relative"> */}
           <Header />
         {/* </div> */}
         
         <Aside />
         <main className='w-90 lg:w-[85%] xl:w-[80%] 2xl:w-[75%] 2xl:text-md max-w-screen-2xl '>
           {children}
         </main>
         <Footer />
     </div>

 );
}