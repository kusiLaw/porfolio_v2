import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className={` dark` }>
      <Head />
      <body className='bg-light_bg dark:bg-dark_bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
