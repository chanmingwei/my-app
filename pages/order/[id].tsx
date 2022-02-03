import {
  Input,
  Box,
  Stack,
  Button,
  FormLabel,
  HStack,
  Heading,
  Divider,
  useDisclosure
} from '@chakra-ui/react'
import { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, useRouter } from 'next/dist/client/router';
import PendingOrder from '../../components/Order/PendingOrder';
import axios from 'axios';
import { OrderStatus } from '../../config';
import CompletedOrder from '../../components/Order/CompletedOrder'
axios.defaults.withCredentials = true;

// const Post = () => {
//   const router = useRouter()
//   const { pid } = router.query

//   return <p>Post: {pid}</p>
// }

// export default Post

const ViewOrder = () => {
  const router = useRouter()
  const { id } = router.query
  const [details, setDetails] = useState({
    order: [{
      status: 0
    }],
    services: [],
    availabilities: [],
  })

  useEffect(() => {

    if (!router.isReady) return;
    axios.get(`http://localhost:80/api/v1/orders/${id}`).then(r => {
      console.log(id)
      setDetails(r.data)
    }
    )
  }, [id])
  if (OrderStatus[details.order[0].status] === OrderStatus[OrderStatus.Completed]) {
    return (
      <CompletedOrder details={details} />
    )
  } else {
    return (
      <PendingOrder details={details} />

    )
  }
}

export default ViewOrder