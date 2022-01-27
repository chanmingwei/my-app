import { Box, FormLabel, Heading, Stack, Text } from "@chakra-ui/react"
const OrderSummary = ({ formValues, estimatedHours }) => {
  return (
    <Stack direction='row' justifyContent={'space-between'}>
      <Stack direction='column'>
        {
          formValues.orderDetail.billingAddress.split("\n").map((t, idx) => {
            return (
              <Stack key={`billingAddress_line${idx + 1}`} direction='row'>
                <FormLabel>Billing Address Line {idx + 1}:</FormLabel>
                <Text>{t}</Text>
              </Stack>
            )
          })
        }
      </Stack>
      <Stack direction='column' textAlign={'center'}>
        <Heading>Estimated Time</Heading>
        <Heading> {estimatedHours} hrs</Heading>
      </Stack>

    </Stack>
  )
}

export default OrderSummary