import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'

const OrderTable = ({ formValues }) => {
  return (<Table variant='unstyled'>
    <Thead>
      <Tr>
        <Th>Order Id</Th>
        <Th>Type</Th>
        <Th>Created On</Th>
        <Th>Completed On</Th>
        <Th>Status </Th>
      </Tr>
    </Thead>
    <Tbody>
      {formValues.map((val, idx) => {
        return (
          <Tr key={`order_${idx}`}>
            <Td>{val.id}</Td>
            <Td>{val.type}</Td>
            <Td>{val.created_at}</Td>
            <Td>{val.completed_at}</Td>
            <Td>{val.status}</Td>
          </Tr>
        )
      })}

      <Tr />
    </Tbody>
  </Table>

  )
}

export default OrderTable