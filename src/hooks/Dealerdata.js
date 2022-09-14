import { useEffect, useState } from "react"
import axios from "axios"
function Dealerdata(){
    const [dealer, setdealer] = useState('')
   useEffect(() => {
    axios.get('http://localhost:9292/dealer')
    .then(res =>{
      console.log(res)
      setdealer(res.data)
    }

    )},[],)
    return(
      [dealer,setdealer]
    )
}

export default Dealerdata;