import {
  Input,
  Box,
  Stack,
  Text,
  Button,
  FormLabel,
  HStack,
  Heading,
  Drawer,
  DrawerBody,
  Divider,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react';
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
  const [formValues, changeFormValues] = useState({
    orderDetail: {
      billingAddress: "\n\n\n"
    },
    services: Array()
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  let updateBillingAddress = (billAddress, newAddress, idx) => {
    const billAddressArr = billAddress.split("\n")
    billAddressArr[idx] = newAddress
    return billAddressArr.join("\n")
  }

  const createOrder = e => {
    e.preventDefault()
    axios.post("http://localhost:80/api/v1/orders", formValues).then((response) => {
      if (response.status == 200) {
        console.log("200")
      }
    })

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
            changeFormValues({
              ...formValues,
              services: formValues.services.concat({
                airconNumber: 0,
                serviceType: ""
              })
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
          m="10" type='submit' onClick={onOpen}>
          Move on to Availabilities...
        </Button>
      </Box>
    </form >
  )
}

export default CreateOrderForm