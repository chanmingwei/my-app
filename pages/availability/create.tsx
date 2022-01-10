
import TopNavBar from '../../components/General/topnav'
import OrderSummary from "../../components/Order/OrderSummary"
import CreateAvailabilityForm from '../../components/Availability/createAvailabilityForm'
import { useState } from 'react'
import { Button, Box, Stack } from '@chakra-ui/react'
import AvailabilityTable from '../../components/Availability/AvailabilityTable'
import { useContext } from "react"
import DataContext from '../../components/context'

const CreateAvailability = () => {
  const value = useContext(DataContext)
  console.log(value)
  const [formValues, setFormValues] = useState([])
  const estimatedHours = 3
  const createOrder = e => {
    e.preventDefault()
    axios.post("http://localhost:80/api/v1/orders", formValues).then((response) => {
      if (response.status == 200) {
        console.log("200")
      }
    })

  }
  return (
    <form>
      <TopNavBar bool={true} />
      <Box m="10" p="5" bg="blue.200">
        <OrderSummary formValues={value.formValues} estimatedHours={estimatedHours}></OrderSummary>
        <Button type='submit'>Submit Order</Button>
      </Box>
      <Stack direction="row">
        <CreateAvailabilityForm formValues={formValues} setFormValues={setFormValues} estimatedHours={estimatedHours} />
        <AvailabilityTable formValues={formValues} />
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

export default CreateAvailability