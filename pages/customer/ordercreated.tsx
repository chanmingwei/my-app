import styles from "../../components/Order/OrderCreated.module.css"

const OrderCreated: NextPage = () => {
  // console.log(initialServiceProviders)

  // useEffect(() => {
  //   axios.get('http://localhost:80/api/v1/orders').then((r) => setOrders(r.data))
  // }, [])
  setTimeout(() => {
    window.location.href = 'http://localhost:3000/customer/order';
  }, 5000)
  return (
    <>
      <div className={styles.div}> Your Order has been created!</div>
    </>

  )
}

export default OrderCreated