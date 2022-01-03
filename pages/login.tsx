import {
  Stack,
  useDisclosure,
  Flex,


} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Card from '../components/General/Card'
import LoginModal from '../components/General/LoginModal'

const Home: NextPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex display="flex" justifyContent="center">
        <Stack paddingTop='30px' h='900px' direction='row' spacing="300px">
          <Card identifier="Customer Login" onOpen={onOpen} />
          <Card identifier="Service Provider Login" onOpen={onOpen} />
        </Stack>
      </Flex>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Home