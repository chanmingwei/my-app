
import { Tbody, Table } from '@chakra-ui/react'
import Row from './Row'

const ServiceProviderTable = ({ serviceProviders }) => {
  return (
    <Table variant="simple">
      <Tbody key={`body`}>
        {
          serviceProviders.map((service_providers, idx) => {
            return (
              <Row key={`row_${idx}`} idx={idx} service_providers={service_providers} />
            )
          }
          )
        }
      </Tbody>
    </Table>
  )
}

export default ServiceProviderTable