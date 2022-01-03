import {
  Box,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Button
} from "@chakra-ui/react"
import { useState } from "react"

const CreateDetailForm = ({ idx, val, changeVal }) => {

  let temp_services = val.services

  let removeService = (idx) => {
    temp_services.splice(idx, 1)
    changeVal({
      ...val,
      services: temp_services
    })

  }
  return (<Box p='10' bg='blue.300' >
    < Stack direction="row" justifyContent={'space-between'}>
      <Stack direction="column">
        <Heading>Service {idx + 1}</Heading>
        <FormLabel>Number of aircons:</FormLabel>
        <Input type="number" onChange={e => {
          let num = parseInt(e.currentTarget.value)
          let price = (temp_services[idx].serviceType == "Chemical Wash") ? 2 : 1
          temp_services[idx].airconNumber = isNaN(num) ? 0 : num
          changeVal({
            ...val,
            services: temp_services
          })
        }} value={temp_services[idx].airconNumber}></Input>
        <FormLabel>Service Type:</FormLabel>
        <Select value={temp_services[idx].serviceType} onChange={e => {
          let num = temp_services[idx].airconNumber
          temp_services[idx].serviceType = e.currentTarget.value
          changeVal({
            ...val,
            services: temp_services
          })
        }}>
          <option value="Regular Cleaning">Regular Cleaning</option>
          <option value="Chemical Wash">Chemical Wash</option>
        </Select>
        <Button onClick={() => {
          removeService(idx)
        }}>Remove</Button>
      </Stack>
      <Box textAlign={"center"}>
        <Stack spacing='10'>
          <Heading>Estimated Price</Heading>
          <Heading>{temp_services[idx].airconNumber * ((temp_services[idx].serviceType == "Chemical Wash") ? 2 : 1)}</Heading>
        </Stack>
      </Box>
    </Stack >
  </Box >)
}

export default CreateDetailForm