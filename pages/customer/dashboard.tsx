import {
  Container,
  Center,
  Heading,
  Box,
  Text,
  Stack
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import axios from 'axios'
import TopNavBar from '../../components/General/topnav'
import { useRouter } from 'next/dist/client/router'
const CustomerDashBoard: NextPage = () => {
  const router = useRouter()
  let routetoCreateOrder = () => {
    router.push("http://localhost:3000/order/create")
  }
  let routetoViewOrder = () => {

  }
  return (
    <>
      <TopNavBar bool={true} />
      <Box m="10">
        <Heading marginBottom="5">Actions you want to take</Heading>
        <Stack direction={"row"} spacing="20">

          <Box
            display="flex"
            boxSize={"sm"}
            bgImage='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            onClick={routetoCreateOrder}
            justifyContent={"center"}
          >
            <Center>
              <Box p={6}>
                <Text fontSize="30px">Create Order</Text>
              </Box>
            </Center>
          </Box>
          <Box
            display="flex"
            boxSize={"sm"}
            bgImage='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            onClick={routetoViewOrder}
            justifyContent={"center"}
          >
            <Center>
              <Box p={6}>
                <Text fontSize="30px">View Order</Text>
              </Box>
            </Center>
          </Box>
        </Stack>
        <Box>

        </Box>
      </Box>
    </>

  )
}

export default CustomerDashBoard