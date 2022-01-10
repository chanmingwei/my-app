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
import styles from './availability_table.module.css'

const AvailabilityTable = ({ formValues }) => {
  console.log(formValues)
  return (<Table variant='unstyled'>
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Start Time</Th>
        <Th>End Time</Th>
      </Tr>
    </Thead>
    <Tbody>
      {formValues.map((val, idx) => {
        return (
          <Tr key={`availability_${idx}`}>
            <Td>{`${val.date.year}-${val.date.month}-${val.date.day}`}</Td>
            <Td>{val.startTime}</Td>
            <Td>{val.endTime}</Td>
          </Tr>
        )
      })}

      <Tr className={styles.fill} />
    </Tbody>
  </Table>

  )
}

export default AvailabilityTable