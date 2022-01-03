
import { Tr, Td } from '@chakra-ui/react'

const Row = ({ idx, orders }) => {
  return (<Tr>
    <Td key={`id_${idx}`} >{orders.id}</Td>
    {/* <Td key={`service_provider_${idx}`} >{orders.service_provider_id}</Td>
    <Td key={`start_time_${idx}`}>{orders.start_time}</Td>
    <Td key={`end_time_${idx}`}>{orders.end_time}</Td>
    <Td key={`price_${idx}`}>{orders.price}</Td> */}
  </Tr>)
}

export default Row