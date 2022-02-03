import {
  Text,
  Box,
  Stack,
  Button,
  Image,
  FormLabel,
  HStack,
  Heading,
  Divider,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useState } from 'react';
import Rating from '../General/Rating';


const CompletedOrder = ({ details }) => {

  const order = details.order[0]
  const service_provider = details.service_providers[0]
  const services = details.services
  var price = 0
  services.forEach(service => {
    price += service.price
  });
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Stack spacing='5'>
      <HStack>
        <Box m="10" p="5" bg="blue.200" w='70%'>
          <Stack>
            <HStack>
              <FormLabel>Completion TimeSlot:</FormLabel>
              <Text >{order.completed_at}</Text>
            </HStack>
            <HStack>
              <FormLabel>Price:</FormLabel>
              <Text >{price}</Text>
            </HStack>
            <HStack>
              <FormLabel>Review Stars:</FormLabel>

              <Rating
                size={48}
                icon="star"
                scale={5}
                fillColor="gold"
                strokeColor="grey"
              />
            </HStack>

            <HStack>
              <FormLabel>Created On:</FormLabel>
              <Text >{order.created_at}</Text>
            </HStack>

          </Stack>
        </Box>

        <Box m="10" p="5" bg="blue.200" w='20%'>
          <Stack>
            <Image
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov' />
            <HStack>
              <FormLabel>Name:</FormLabel>
              <Text >{service_provider.name}</Text>
            </HStack>
            <HStack>
              <FormLabel>Email:</FormLabel>
              <Text >{service_provider.email}</Text>
            </HStack>

          </Stack>
        </Box>
      </HStack>
      <Accordion m='5'>
        <AccordionItem>

          <AccordionButton>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            {services.map((service, idx) => {
              return (
                <Stack key={`service_${idx}`} direction="column" spacing='5'>
                  <Box m="10" p="5" bg="blue.200">
                    <Heading>Service {idx + 1} </Heading>
                    <HStack>
                      <FormLabel>Number of aircons:</FormLabel>
                      <Text>{service.aircon_number}</Text>
                    </HStack>
                    <HStack>
                      <FormLabel>Service Type:</FormLabel>
                      <Text>{service.service_type}</Text>
                    </HStack>
                  </Box>
                </Stack>
              )
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack >
  )
}

export default CompletedOrder