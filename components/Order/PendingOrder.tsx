import {
    Text,
    Box,
    Stack,
    Button,
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


const PendingOrder = (details) => {

    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <Stack spacing='5'>
            <HStack>
                <Box m="10" p="5" bg="blue.200" w='70%'>
                    <Stack>
                        <HStack>
                            <FormLabel>Completion TimeSlot:</FormLabel>
                            <Text ></Text>
                        </HStack>
                        <HStack>
                            <FormLabel>Price:</FormLabel>
                            <Text ></Text>
                        </HStack>
                        <HStack>
                            <FormLabel>Review Stars:</FormLabel>

                        </HStack>

                        <HStack>
                            <FormLabel>Created On:</FormLabel>
                            <Text ></Text>
                        </HStack>

                    </Stack>
                </Box>

                <Box m="10" p="5" bg="blue.200" w='20%'>
                    <Stack>
                        <HStack>
                            <FormLabel>Name:</FormLabel>
                            <Text ></Text>
                        </HStack>
                        <HStack>
                            <FormLabel>Email:</FormLabel>
                            <Text ></Text>
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

                        <Stack direction="column" spacing='5'>
                            <Box m="10" p="5" bg="blue.200">
                                <Heading>Service </Heading>
                                <FormLabel>Number of aircons:</FormLabel>
                                <Text></Text>
                                <FormLabel>Service Type:</FormLabel>
                                <Text></Text>
                            </Box>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack >
    )
}

export default PendingOrder