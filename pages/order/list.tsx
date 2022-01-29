import type { NextPage } from 'next'
import { Text, Box, Heading, Input } from '@chakra-ui/react'
import TopNavBar from '../../components/General/topnav'
import { useState, useEffect } from 'react'
import FilterOrder from '../../components/Order/FilterOrder'
import axios from 'axios'
import OrderTable from '../../components/Order/OrderTable'
import { orderStatus, orderType } from '../../config'
const CreateOrderPage = () => {

  const [listOfOrders, setListOfOrders] = useState([])
  const [filteredOrder, setFilteredOrders] = useState([])

  const filterOrder = (order, filters) => {
    return ((filters.serviceType === order.type) && (filters.status === order.status))
  }
  const setTableValuesOnFilter = (currListOfOrders, filters) => {
    const convertedListOfOrders = currListOfOrders.map((order) => {
      var type = orderType[order.type]
      var status = orderStatus[order.status]
      return {
        ...order,
        status: status,
        type: type
      }
    })
    let newFilteredOrders = null
    if (!(filters === null)) {
      newFilteredOrders = convertedListOfOrders.filter(order =>
        filterOrder(order, filters)
      )
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