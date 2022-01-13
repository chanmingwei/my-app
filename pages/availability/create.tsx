
import TopNavBar from '../../components/General/topnav'
import OrderSummary from "../../components/Order/OrderSummary"
import CreateAvailabilityForm from '../../components/Availability/createAvailabilityForm'
import { useState } from 'react'
import { useStore } from 'react-redux'
import { Button, Box, Stack } from '@chakra-ui/react'
import AvailabilityTable from '../../components/Availability/AvailabilityTable'

const CreateAvailability = () => {
  const store = useStore()
  const orderDetail = store.getState().client
  console.log(store.getState())
  console.log(orderDetail)
  const [formValues, setFormValues] = useState([])
  const estimatedHours = 3
  return (
    <form>
      <TopNavBar bool={true} />
      <Box m="10" p="5" bg="blue.200">
        <OrderSummary formValues={orderDetail} estimatedHours={estimatedHours}></OrderSummary>
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