import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Flex,
  Heading,
  Text,
  Link,
  Box,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import axios from 'axios'

const LoginModal = ({ isOpen, onClose }) => {
  const router = useRouter()
  let [formValues, setFormValues] = useState({
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
  return (
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={loginCustomer}>
            <ModalHeader>Sign in to your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                align={'center'}
                justify={'center'}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        value={formValues.email}
                        onChange={e => setFormValues({
                          ...formValues,
                          email: e.currentTarget.value
                        })} />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        value={formValues.password}
                        onChange={e => setFormValues({
                          ...formValues,
                          password: e.currentTarget.value
                        })} />
                    </FormControl>
                    <Stack spacing={10}>=
                    </Stack>
                  </Stack>
                </Stack>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Center>
  )
}

export default LoginModal;