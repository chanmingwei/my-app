
import { Tbody, Table } from '@chakra-ui/react'
import Row from './Row'

const OrderTable = ({ orders }) => {
  return (
    <Table variant="simple">
      <Tbody key={`body`}>
        {
          orders.map((order, idx) => {
            return (
              <Row key={`row_${idx}`} idx={idx} orders={order} />
            )
          }
          )
        }
      </Tbody>
    </Table>
  )
}

export default OrderTable