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
import DataContext from '../context';
import { useState, useContext } from 'react';
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
  const router = useRouter()
  const value = useContext(DataContext)
  let temp_services = value.formValues.services
  let updateBillingAddress = (billingAddress, newAddress, idx) => {
    const billingAddressArr = billingAddress.split("\n")
    billingAddressArr[idx] = newAddress
    return billingAddressArr.join("\n")
  }

  const createOrder = e => {
    e.preventDefault()
    router.push("http://localhost:3000/availability/create")

  }
  return (
    <form onSubmit={createOrder}>
      <Stack m="10" direction={"column"} spacing="10">
        <Box p="5" bg="blue.200" pos='sticky' w='full'>
          <Heading>Order Details</Heading>
          {value.formValues.orderDetail.billingAddress.split("\n").map((address, idx) => {
            return (
              <HStack key={`billAddress_${idx}`}>
                <FormLabel>Billing Address Line {idx + 1}:</FormLabel>
                <Input onChange={e => {
                  value.changeFormValues({
                    ...value.formValues,
                    orderDetail: {
                      billingAddress: updateBillingAddress(value.formValues.orderDetail.billingAddress, e.currentTarget.value, idx)
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
              serviceType: ""
            })
            value.changeFormValues({
              ...value.formValues,
              services: temp_services
            });
          }}>Add New Service</Button>
        <Divider />
        <Stack overflowY={'scroll'} maxH="350" spacing="10" padding="5">
          {value.formValues.services.map((service, idx) => {
            return (<CreateDetailForm key={`service_${idx}`} idx={idx} val={value.formValues} changeVal={value.changeFormValues} />)
          })}
        </Stack>
      </Stack>
      <Box pos='fixed' bottom='0' right='0'>
        <Button
          display={'flex'}
          m="10" type='submit' onClick={createOrder}>
          Move on to Availabilities...
        </Button>
      </Box>
    </form >
  )
}

export default CreateOrderForm