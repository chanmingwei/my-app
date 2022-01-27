import {
  Input,
  Box,
  Stack,
  Button,
  FormLabel,
  HStack,
  Heading,
  Divider,
  useDisclosure
} from '@chakra-ui/react'
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Router, useRouter } from 'next/dist/client/router';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import moment from "moment";
import CreateDetailForm from './CreateDetailForm';
axios.defaults.withCredentials = true;


const CreateOrderForm = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [formValues, changeFormValues] = useState({
    orderDetail: {
      billingAddress: "\n\n\n"
    },
    services: Array()
  })
  let temp_services = formValues.services
  let updateBillingAddress = (billingAddress, newAddress, idx) => {
    const billingAddressArr = billingAddress.split("\n")
    billingAddressArr[idx] = newAddress
    return billingAddressArr.join("\n")
  }

  const createOrder = e => {
    e.preventDefault()
    dispatch({ type: "CREATE ORDER", payload: formValues })
    router.push("http://localhost:3000/availability/create")

  }
  return (
    <form onSubmit={createOrder}>
      <Stack m="10" direction={"column"} spacing="10">
        <Box p="5" bg="blue.200" pos='sticky' w='full'>
          <Heading>Order Details</Heading>
          {formValues.orderDetail.billingAddress.split("\n").map((address, idx) => {
            return (
              <HStack key={`billAddress_${idx}`}>
                <FormLabel>Billing Address Line {idx + 1}:</FormLabel>
                <Input onChange={e => {
                  changeFormValues({
                    ...formValues,
                    orderDetail: {
                      billingAddress: updateBillingAddress(formValues.orderDetail.billingAddress, e.currentTarget.value, idx)
                    }
                  });
                }}></Input>
              </HStack>
            )
          })
          }

        </Box>
        <Button
          display={'flex'}
          alignSelf={'end'}
          onClick={() => {
            temp_services.unshift({
              airconNumber: 0,
              serviceType: "Regular Cleaning"
            })
            changeFormValues({
              ...formValues,
              services: temp_services
            });
          }}>Add New Service</Button>
        <Divider />
        <Stack overflowY={'scroll'} maxH="350" spacing="10" padding="5">
          {formValues.services.map((service, idx) => {
            return (<CreateDetailForm key={`service_${idx}`} idx={idx} val={formValues} changeVal={changeFormValues} />)
          })}
        </Stack>
      </Stack>
      <Box pos='fixed' bottom='0' right='0'>
        <Button
          display={'flex'}
          m="10" type='submit'>
          Move on to Availabilities...
        </Button>
      </Box>
    </form >
  )
}

export default CreateOrderForm