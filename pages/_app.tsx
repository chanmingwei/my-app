import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
 export async function getStaticProps() {
    const res = await fetch(`http://localhost:80/api/v1/service_providers`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
  


export default MyApp
