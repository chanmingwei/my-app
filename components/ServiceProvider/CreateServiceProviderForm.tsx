import { Stack, Text, Button } from '@chakra-ui/react'
import { useState } from 'react';
import FormInput from '../Input';
import axios from 'axios';
// axios.defaults.withCredentials = true;

const CreateServiceProviderForm = ({ serviceProvidersChange }) => {
  let [formValues, setFormValues] = useState({
    name: "",
    email: ""
  })
  const createServiceProvider = e => {
    axios.post("http://localhost:80/api/v1/service_providers", {
      "name": formValues.name,
      "email": formValues.email,
      "id": 2,
      "password": formValues.name
    }).then((response) => {
      if (response.status == 200) {
        axios.get('http://localhost:80/api/v1/service_providers').then((r) => serviceProvidersChange(r.data))
      }
    })
    e.preventDefault()
  }

  const setValue = (fieldName) => {
    return (newValue) => {
      setFormValues({
        ...formValues,
        [fieldName]: newValue
      })
    }
  }
  const inputs = [{
    fieldName: "name",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        name: newValue
      })
    }
  }, {
    fieldName: "email",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        email: newValue
      })
    }
  }]
  return (
    <form onSubmit={createServiceProvider}>
      <Stack>
        <Text>Create New Service Provider</Text>
        {/* <FormInput typeName="name" value={formValues.name} valueChange={setValue("name")} />
        <FormInput typeName="email" value={formValues.email} valueChange={setValue("email")} /> */}
        {inputs.map((formInput) => {
          return <FormInput key={`form_${formInput.fieldName}`} typeName={formInput.fieldName} value={formValues[formInput.fieldName]} valueChange={formInput.valueChange} />
        })}
      </Stack>
      <Button type='submit'>
        Create
      </Button>
    </form>
  )
}

export default CreateServiceProviderForm