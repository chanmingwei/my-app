import {
    Input,
    Box,
    Stack,
    Button,
    FormLabel,
    HStack,
    Heading,
    Divider,
    useDisclosure,
    FormControl,
    Select
} from '@chakra-ui/react'
import { orderStatus, orderType } from '../../config';
import DatePicker, { utils } from 'react-modern-calendar-datepicker';
import { useState, useContext } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import OrderCreated from '../../pages/customer/ordercreated';


const FilterOrder = ({ listOfOrders, filterAction }) => {
    const today = utils().getToday()
    const [serviceType, setServiceType] = useState("Regular Cleaning");
    const [creationStartDate, setCreationStartDate] = useState(today);
    const [creationEndDate, setCreationEndDate] = useState(today);
    const [completionStartDate, setCompletionStartDate] = useState(today);
    const [completionEndDate, setCompletionEndDate] = useState(today);
    const [status, setStatus] = useState("Pending");
    return (
        <Stack spacing='5'>
            <HStack>
                <FormLabel w='full'>Type of Service:</FormLabel>
                <Select value={serviceType} onChange={(e) => {
                    setServiceType(e.currentTarget.value)
                }}>
                    <option value={orderType[orderType.Multi]}>Multi</option>
                    <option value={orderType[orderType['Regular Cleaning']]}>Regular Cleaning only</option>
                    <option value={orderType[orderType['Chemical Wash']]}>Chemical Wash only</option>
                </Select>
            </HStack>
            <HStack>
                <FormLabel w='50%'>Order was created between</FormLabel>
                <FormLabel>Starting From:</FormLabel>
                <DatePicker value={creationStartDate} onChange={(e) => {
                    setCreationStartDate(e)
                }}></DatePicker>
                <FormLabel>Until:</FormLabel>
                <DatePicker value={creationEndDate} onChange={(e) => {
                    setCreationEndDate(e)
                }}></DatePicker>
            </HStack>

            <HStack>
                <FormLabel w='50%'>Order was completed between</FormLabel>
                <FormLabel>Starting From:</FormLabel>
                <DatePicker value={completionStartDate} onChange={(e) => {
                    setCompletionStartDate(e)
                }}></DatePicker>
                <FormLabel>Until:</FormLabel>
                <DatePicker value={completionEndDate} onChange={(e) => {
                    setCompletionEndDate(e)
                }}></DatePicker>
            </HStack>
            <HStack>
                <FormLabel w='full'>Status:</FormLabel>
                <Select value={status} onChange={(e) => {
                    setStatus(e.currentTarget.value)
                }}>
                    <option value={orderStatus.Completed}>Completed</option>
                    <option value={orderStatus.Pending}>Pending</option>
                </Select>
            </HStack>
            <Button onClick={() => {
                filterAction(listOfOrders, {
                    serviceType: serviceType,
                    creationStartDate: creationStartDate,
                    creationEndDate: creationEndDate,
                    completionStartDate: completionStartDate,
                    completionEndDate: completionEndDate,
                    status: status
                })
            }}>Filter</Button>
        </Stack >
    )
}

export default FilterOrder