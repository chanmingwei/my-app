
import { Box, Select, Stack, Center, Button, FormErrorMessage, FormControl } from '@chakra-ui/react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import styles from "./responsive-calendar.module.css"
import { useState } from 'react';

const CreateAvailabilityForm = ({ formValues, setFormValues, estimatedHours }) => {
  const today = utils().getToday()

  const getNextMonth = (currDate) => {
    var tempDate = JSON.parse(JSON.stringify(currDate))
    if (currDate.day == 31 && currDate.month != 7) {
      tempDate.day = 30
    } else if (currDate.month == 2 && currDate.day == 28) {
      tempDate.day = 31
    } else if (currDate.month == 12 && currDate.day == 31) {
      tempDate.year = tempDate.year + 1
    }
    tempDate.month = (tempDate.month == 12) ? 1 : tempDate.month + 1
    return tempDate
  }



  const [dateTimeRange, setDateTimeRange] = useState({
    date: today,
    startTime: "00:00AM"
  })

  const timeRange = [
    "08:00AM", "09:00AM", "10:00AM", "11:00AM",
    "12:00PM", "01:00PM", "02:00PM", "03:00PM",
    "04:00PM", "05:00PM", "06:00PM", "07:00PM",
    "08:00PM", "09:00PM", "10:00PM", "11:00PM"
  ]

  const workerAbuse = (startTime, estimatedHours) => {
    return parseInt(startTime.split(":")[0]) + ((startTime[5] == "A") ? 0 : 12) + estimatedHours > 22
  }
  return (
    <Box m="20" maxW="40%">
      <Center>
        <Stack direction="column">
          <Calendar minimumDate={today} maximumDate={getNextMonth(today)} value={dateTimeRange.date} onChange={(e) => {
            setDateTimeRange({
              ...dateTimeRange,
              date: e
            })
          }
          }
            calendarClassName={styles.responsive_calendar} />
          <FormControl>
            <Select placeholder='Start Time' onChange={(e) => {
              setDateTimeRange({
                ...dateTimeRange,
                startTime: e.currentTarget.value
              })
            }}>
              {timeRange.map(time => {
                if (!workerAbuse(time, estimatedHours)) {
                  return <option value={time}>{time}</option>
                }
              })}
            </Select>
            <FormErrorMessage>Please do not abuse our cleaners!</FormErrorMessage>
          </FormControl>
          <Button onClick={() => {
            if (formValues.indexOf(dateTimeRange) == -1) {
              setFormValues(formValues.concat(dateTimeRange))
            }
          }

          }>Register Availability</Button>
        </Stack>
      </Center>
    </Box>
  )
}

export default CreateAvailabilityForm