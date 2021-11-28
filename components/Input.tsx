import { Input } from '@chakra-ui/react'

const FormInput = ({ typeName, value, valueChange }) => {
  return (
    <Input placeholder={typeName} type={typeName} value={value} onChange={e => valueChange(e.currentTarget.value)} w="500px" />
  )
}

export default FormInput