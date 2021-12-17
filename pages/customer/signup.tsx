import type { NextPage } from 'next'
import axios from 'axios'
import CreateCustomerForm from '../../components/Customer/CreateCustomerForm'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { count } from 'console'

const Home: NextPage = () => {
  let stateManager = useState([])
  const currentCustomer = stateManager[0]
  const setCustomer = stateManager[1]
  return (
    <>
      <CreateCustomerForm CustomerChange={setCustomer} />
    </>

  )
}

export default Home