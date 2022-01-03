import { Input } from '@chakra-ui/react'
import styles from "./login.module.css"
const LoginChoice = ({ choices }) => {
  return (
    <div className={styles.div}>
      {
        choices.map(choice => {
          return (<a href={choice.url}>{choice.name}</a>)
        })
      }
    </div>
  )
}

export default LoginChoice