
import { Tr, Td } from '@chakra-ui/react'

const Row = ({ idx, service_providers }) => {
  return (<Tr>
    <Td key={`id_${idx}`} >{service_providers.id}</Td>
    <Td key={`user_id_${idx}`} >{service_providers.user_id}</Td>
    <Td key={`name_${idx}`} >{service_providers.name}</Td>
    <Td key={`email_${idx}`} >{service_providers.email}</Td>
  </Tr>)
}

export default Row