
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

  const workerAbuse = (estimatedHours) => {
    return parseInt(dateTimeRange.startTime.split(":")[0]) + ((dateTimeRange.startTime[-2] == "A") ? 0 : 12) + estimatedHours > 22
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
              <option value='08:00 AM'> 08:00 AM </option>
              <option value='09:00 AM'> 09:00 AM </option>
              <option value='10:00 AM'> 10:00 AM </option>
              <option value='11:00 AM'> 11:00 AM </option>
              <option value='12:00 PM'> 12:00 PM </option>
              <option value='01:00 PM'> 01:00 PM </option>
              <option value='02:00 PM'> 02:00 PM </option>
              <option value='03:00 PM'> 03:00 PM </option>
              <option value='04:00 PM'> 04:00 PM </option>
              <option value='05:00 PM'> 05:00 PM </option>
              <option value='06:00 PM'> 06:00 PM </option>
              <option value='07:00 PM'> 07:00 PM </option>
              <option value='08:00 PM'> 08:00 PM </option>
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