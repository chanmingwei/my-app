import type { NextPage } from 'next'
import axios from 'axios'
import LoginCustomerForm from '../../components/Customer/LoginCustomerForm'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { count } from 'console'

const Home: NextPage = () => {
  let stateManager = useState([])
  const currentCustomer = stateManager[0]
  const setCustomer = stateManager[1]
  // console.log(initialServiceProviders)
  return (
    <>
      <LoginCustomerForm CustomerChange={setCustomer} />
    </>

  )
}

export default Home