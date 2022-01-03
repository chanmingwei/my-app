import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import LoginModal from './LoginModal';

const Card = ({ identifier, onOpen }) => {
  return (
    <Box
      display="flex"
      flexDirection="column-reverse"
      maxW={'500px'}
      h='full'
      w={'full'}
      bgImage='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}>

      <Box p={6} >
        <Button
          w={'full'}
          mt={8}
          onClick={onOpen}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}>
          {identifier}
        </Button>
      </Box>
    </Box>
  );
}

export default Card;