import type { NextPage } from 'next'
import { Text, Box, Heading, Input } from '@chakra-ui/react'
import TopNavBar from '../../components/General/topnav'
import { useState, useEffect } from 'react'
import FilterOrder from '../../components/Order/FilterOrder'
import axios from 'axios'
import OrderTable from '../../components/Order/OrderTable'
const CreateOrderPage = () => {

  const [listOfOrders, setListOfOrders] = useState([])
  const [filteredOrder, setFilteredOrders] = useState([])

  const filterOrder = (order, filters) => {

    if (filters.serviceType == "Regular Cleaning only" && order.type == "Regular Cleaning") {
      return order
    } else if (filters.serviceType == "Chemical Wash only" && order.type != "Chemical Wash") {
      return null
    } else if (filters.serviceType == "Multi" && (order.type != "Multi")) {
      return null
    }

    if (filters.status == "Completed" && order.status != "Completed") {
      return null
    } else if (filters.status == "Chemical Wash only" && order.status != "Pending") {
      return null
    }

    return null

  }
  const setTableValuesOnFilter = (currListOfOrders, filters) => {
    const convertedListOfOrders = currListOfOrders.map((order) => {
      var type = ""
      var status = ""
      if (order.type == 0) {
        type = "Multi"
      } else if (order.type == 1) {
        type = "Regular Cleaning"
      } else if (order.type == 2) {
        type = "Chemical Wash"
      }
      if (order.status == 0) {
        status = "Pending"
      } else if (order.status == 1) {
        status = "Completed"
      }
      console.log({
        ...order,
        status: status,
        type: type
      })
      return {
        ...order,
        status: status,
        type: type
      }
    })
    let newFilteredOrders = null
    if (!(filters === null)) {
      newFilteredOrders = convertedListOfOrders.map(order => {
        return filterOrder(order, filters)

      })
    } else {
      newFilteredOrders = convertedListOfOrders
    }

    setFilteredOrders(newFilteredOrders)
  }
  useEffect(() => {
    axios.get('http://localhost:80/api/v1/orders').then(r => {
      setListOfOrders(r.data)
      setTableValuesOnFilter(r.data, null)
    }
    )
  }, [])

  return (
    <>
      <TopNavBar bool={true} />
      <Box m="10" p="5" bg="blue.200">
        <FilterOrder listOfOrders={listOfOrders} filterAction={setTableValuesOnFilter}></FilterOrder>
      </Box>
      <OrderTable formValues={filteredOrder}></OrderTable>
      <></>
    </>
  )
}

export default CreateOrderPage