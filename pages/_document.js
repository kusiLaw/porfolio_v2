import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className={`flex flex-row justify-center ` }>
      <Head />
      <body className='bg-light_bg dark:bg-dark_bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
