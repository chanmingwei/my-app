import { Stack, Text, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Router, useRouter } from 'next/dist/client/router';
import FormInput from '../Input';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
axios.defaults.withCredentials = true;

const CreateCustomerForm = ({ CustomerChange }) => {
  const router = useRouter()
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: ""
  })
  const createCustomer = e => {
    e.preventDefault()
    axios.post("http://localhost:80/api/v1/customers", {
      "name": formValues.name,
      "email": formValues.email,
      "password": formValues.password
    }).then((response) => {
      if (response.status == 200) {
        router.push("http://localhost:3000/customer/login")
      }
    })
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
    typeName: "name",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        name: newValue
      })
    }
  }, {
    fieldName: "email",
    typeName: "email",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        email: newValue
      })
    }
  }, {
    fieldName: "password",
    typeName: "password",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        password: newValue
      })
    }
  }]
  return (
    <form onSubmit={createCustomer}>
      <Stack>
        <Text>Customer Sign Up</Text>
        {/* <FormInput typeName="name" value={formValues.name} valueChange={setValue("name")} />
        <FormInput typeName="email" value={formValues.email} valueChange={setValue("email")} /> */}
        {inputs.map((formInput) => {
          return <FormInput key={`form_${formInput.fieldName}`} typeName={formInput.typeName} value={formValues[formInput.fieldName]} valueChange={formInput.valueChange} />
        })}
      </Stack>
      <Button type='submit'>
        Sign up
      </Button>
    </form>
  )
}

export default CreateCustomerForm