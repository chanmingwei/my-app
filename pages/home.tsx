import type { NextPage } from 'next'
import TopNavBar from '../components/General/topnav'
import { Text, Box, Heading } from '@chakra-ui/react'
import Carousel from '../components/General/FeatureCarousel'
import { extendTheme } from '@chakra-ui/react'
import GridBlurredBackdrop from '../components/General/Testimonials'

const Home: NextPage = () => {
  return (
    <>
      <TopNavBar bool={false} />
      <Text padding="50px" fontSize='6xl' textAlign='center' font='Times'>Service Linker</Text>
      <Carousel />
      <Box
        position={'relative'}
        height={'400px'}
        width={'full'}
        bgColor='blue.300'
        textColor='white'
      >
        <Heading paddingTop='50px' paddingLeft='10%' fontSize='5xl'>Description</Heading>
        <Text paddingTop='50px' paddingLeft='10%' paddingRight='20%'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
      </Box>
      <GridBlurredBackdrop />
    </>


  )
}

export default Home