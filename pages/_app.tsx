import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
import DataContext from '../components/context';

function MyApp({ Component, pageProps }: AppProps) {
  const [formValues, changeFormValues] = useState({
    orderDetail: {
      billingAddress: "\n\n\n"
    },
    services: Array()
  })
  return (
    <DataContext.Provider value={{
      formValues: formValues,
      changeFormValues: changeFormValues,
    }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DataContext.Provider>
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
