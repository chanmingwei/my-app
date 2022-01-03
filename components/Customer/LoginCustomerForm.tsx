import { Stack, Text, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Router, useRouter } from 'next/dist/client/router';
import FormInput from '../Input';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
axios.defaults.withCredentials = true;

const LoginCustomerForm = ({ CustomerChange }) => {
  const router = useRouter()
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: ""
  })
  let config = {
    "headers": {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    }
  }
  const loginCustomer = e => {
    e.preventDefault()
    axios.post("http://localhost:80/login/customer",
      {
        "email": formValues.email,
        "password": formValues.password
      },
      config
    ).then((response) => {
      if (response.status == 200) {
        router.push("http://localhost:3000/customer/dashboard")
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
    fieldName: "email",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        email: newValue
      })
    }
  }, {
    fieldName: "password",
    valueChange: (newValue) => {
      setFormValues({
        ...formValues,
        password: newValue
      })
    }
  }]
  return (
    <form onSubmit={loginCustomer}>
      <Stack>
        <Text>Login</Text>
        {/* <FormInput typeName="name" value={formValues.name} valueChange={setValue("name")} />
        <FormInput typeName="email" value={formValues.email} valueChange={setValue("email")} /> */}
        {inputs.map((formInput) => {
          return <FormInput key={`form_${formInput.fieldName}`} typeName={formInput.fieldName} value={formValues[formInput.fieldName]} valueChange={formInput.valueChange} />
        })}
      </Stack>
      <Button type='submit'>
        Login
      </Button>
    </form>
  )
}

export default LoginCustomerForm