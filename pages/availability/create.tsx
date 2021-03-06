
import TopNavBar from '../../components/General/topnav'
import OrderSummary from "../../components/Order/OrderSummary"
import CreateAvailabilityForm from '../../components/Availability/createAvailabilityForm'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Box, Stack } from '@chakra-ui/react'
import AvailabilityTable from '../../components/Availability/AvailabilityTable'
import { Router } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const CreateAvailability = () => {
  const order = useSelector(state => state.order)
  const [formValues, setFormValues] = useState([])
  const [estimatedHours, setEstimatedHours] = useState(0)
  useEffect(() => {
    axios.post('http://localhost:80/api/v1/orders/estimate', {
      services: order.services
    }).then(r => {
      setEstimatedHours(parseInt(r.data))
    }
    )
  })
  const createOrder = e => {
    e.preventDefault()
    const availabilities = formValues.map((availability) => {
      var date = availability.date
      var currTime = (availability.startTime.slice(-2) == "AM") ? parseInt(availability.startTime.split(":")[0]) : parseInt(availability.startTime.split(":")[0]) + 12
      return {
        startTime: (new Date(Date.parse(`${date.year}-${String(date.month).padStart(2, "0")}-${date.day}T${currTime}:00:00`))).toISOString(),
        endTime: (new Date(Date.parse(`${date.year}-${String(date.month).padStart(2, "0")}-${date.day}T${(currTime + estimatedHours)}:00:00`))).toISOString()
      }
    })
    axios.post("http://localhost:80/api/v1/orders", { ...order, availabilities: availabilities })
  }
  return (
    <form onSubmit={createOrder}>
      <TopNavBar bool={true} />
      <Box m="10" p="5" bg="blue.200">
        <OrderSummary formValues={order} estimatedHours={estimatedHours}></OrderSummary>
      </Box>
      <Stack direction="row">
        <CreateAvailabilityForm formValues={formValues} setFormValues={setFormValues} estimatedHours={estimatedHours} />
        <AvailabilityTable formValues={formValues} />
      </Stack>
      <Box pos='fixed' bottom='0' right='0'>
        <Button
          display={'flex'}
          m="10" type='submit'>
          Make My Order!
        </Button>
      </Box>
    </form >

  )
}

export default CreateAvailability