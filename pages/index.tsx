import type { NextPage } from 'next'
import axios from 'axios'
import { Button, Stack, Text, Input, Tbody, Table, Tr, Td } from '@chakra-ui/react'
import CreateServiceProviderForm from '../components/ServiceProvider/CreateServiceProviderForm'
import ServiceProviderTable from '../components/ServiceProvider/ServiceProviderTable'
import Row from '../components/ServiceProvider/Row'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { count } from 'console'

const initialServiceProviders = [
  {
    "id": 1,
    "name": "serviceprovider1",
    "email": "serviceprovider1@test.com",
    "user_id": 2
  },
  {
    "id": 2,
    "name": "serviceprovider2",
    "email": "serviceprovider2@test.com",
    "user_id": 2
  }
]
const Home: NextPage = () => {
  let stateManager = useState([])
  const currentServiceProviders = stateManager[0]
  const setServiceProviders = stateManager[1]
  // console.log(initialServiceProviders)
  useEffect(() => {
    axios.get('http://localhost:80/api/v1/service_providers').then((r) => setServiceProviders(r.data))
  }, [])
  return (
    <>
      <ServiceProviderTable serviceProviders={currentServiceProviders} />
      <CreateServiceProviderForm serviceProvidersChange={setServiceProviders} />
    </>

  )
}

export default Home