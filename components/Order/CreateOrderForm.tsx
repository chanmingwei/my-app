import { Stack, Text, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Session } from 'inspector';
import { Router, useRouter } from 'next/dist/client/router';
import FormInput from '../Input'; import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import moment from "moment";
axios.defaults.withCredentials = true;

const CreateOrderForm = ({ OrderChange }) => {
  const router = useRouter()
  let [formValues, setFormValues] = useState({
    availabilityStartTime: "",
    availabilityEndTime: ""
  })
  const createOrder = e => {
    e.preventDefault()
    axios.post("http://localhost:80/api/v1/orders", {
      "start_time": moment(formValues.availabilityStartTime).toISOString(),
      "end_time": moment(formValues.availabilityEndTime).toISOString(),
    })
  }

  const setValue = (fieldName) => {
    return (newValue) => {
      setFormValues({
        ...formValues,
        [fieldName]: newValue
      })
    }
  }
  const inputs = [{
    fieldName: "availabilityStartTime",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        availabilityStartTime: newValue
      })
    }
  }, {
    fieldName: "availabilityEndTime",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        availabilityEndTime: newValue
      })
    }
  }]
  return (
    <form onSubmit={createOrder}>
      <Stack>
        <Text>Create Orders</Text>
        {inputs.map((formInput) => {
          return <DateTimePicker key={`form_${formInput.fieldName}`} value={formValues[formInput.fieldName]} onChange={formInput.valueChange} />
        })}
      </Stack>
      <Button type='submit'>
        Create Order
      </Button>
    </form>
  )
}

export default CreateOrderForm