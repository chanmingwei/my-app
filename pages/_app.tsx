import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import React, { FC, useState } from 'react';
import reducer from '../reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer)
const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default WrappedApp;

