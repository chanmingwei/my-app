import { Box, Stack, Button } from '@chakra-ui/react'
const TopNavBar = ({ bool }) => {
  if (!bool) {
    return (
      <Box bg='gray.200'>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'http://localhost:3000/login'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Box >
    )
  } else {
    return (
      <Box bg='gray.200'>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'http://localhost:3000/login'}>
            Logout
          </Button>
        </Stack>
      </Box >
    )
  }
}
export default TopNavBar