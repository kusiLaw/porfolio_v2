import Head from "next/head";


export default function Layout({ children }) {
 return (
   <div className='max-w-screen-lg '>
     <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" />
       <title>Lawrence Kusi Portfolio</title>
       <meta name="description"  content="Lawrence Addai Kusi Portfolio | Modern portfolio website"/>
     </Head>
    
     <main>
     
     {children}

     </main>

   </div>
 );
}