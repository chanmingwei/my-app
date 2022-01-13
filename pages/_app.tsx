import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import React, { FC, useState } from 'react';
import { wrapper } from '../components/store';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default wrapper.withRedux(WrappedApp);

