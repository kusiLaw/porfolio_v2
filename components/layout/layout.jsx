import Head from "next/head";


export default function Layout({ children }) {
 return (
     <div className=" bg-yellow-50 text-light_text_color">
          {/* <div > */}
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
              <title>Lawrence Kusi Portfolio</title>
              <meta name="description"  content="Lawrence Addai Kusi Portfolio | Modern portfolio website"/>
            </Head>
           
            <main className='max-w-screen-xl bg-red-50'>
            
            {children}

            </main>

          {/* </div> */}
     </div>

 );
}