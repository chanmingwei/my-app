import type { NextPage } from 'next'
import { Text, Box, Heading, Input } from '@chakra-ui/react'
import TopNavBar from '../../components/General/topnav'
import { useState } from 'react'
import CreateOrderForm from '../../components/Order/CreateOrderForm'
const CreateOrderPage = () => {

  return (
    <>
      <TopNavBar bool={true} />
      <CreateOrderForm></CreateOrderForm>
    </>
  )
}

export default CreateOrderPage