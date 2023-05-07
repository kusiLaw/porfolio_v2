import { Html, Head, Main, NextScript } from 'next/document'
import { Mode } from '@/utilities/darkmode'


export default function Document() {
 
  return (
    <Html lang="en" >
      <Head />
      <body className='bg-light_bg dark:bg-dark_bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
