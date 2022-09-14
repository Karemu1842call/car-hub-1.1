import { useEffect, useState } from "react"
import axios from "axios"
function Customerdata(){
    const [customers, setCustomers] = useState('')
   useEffect(() => {
    axios.get('http://localhost:9292/customers')
    .then(res =>{
      console.log(res)
      setCustomers(res.data)
    }

    )},[],)
    return(
      [customers,setCustomers]
    )
}

export default Customerdata


