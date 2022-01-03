import OrderTable from "../../components/Order/OrderTable";
import CreateOrderForm from "../../components/Order/CreateOrderForm";
import type { NextPage } from 'next'
import axios from 'axios'
import { Button, Stack, Text, Input, Tbody, Table, Tr, Td } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { count } from 'console'

const Home: NextPage = () => {
  let stateManager = useState([])
  const currentOrders = stateManager[0]
  const setOrders = stateManager[1]
  // console.log(initialServiceProviders)
  useEffect(() => {
    axios.get('http://localhost:80/api/v1/orders').then((r) => setOrders(r.data))
  }, [])
  return (
    <>
      <OrderTable orders={currentOrders} />
      <CreateOrderForm OrderChange={setOrders} />
    </>

  )
}

export default Home