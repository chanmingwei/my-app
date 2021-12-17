import { Input } from '@chakra-ui/react'

const FormInput = ({ fieldName, typeName, value, valueChange }) => {
  return (
    <Input placeholder={fieldName} type={typeName} value={value} onChange={e => valueChange(e.currentTarget.value)} w="500px" />
  )
}

export default FormInput