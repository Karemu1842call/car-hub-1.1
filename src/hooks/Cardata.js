import { useEffect, useState } from "react"
import Hub from "../components/Hub";
function Cardata(){
    const [cars, setCars] = useState([])
    const [loadingcar, setloadingcar] =useState(false)
  //  useEffect(() => {
  //   fetch()
  //   .then(response =>{
  //     if(response.ok){
  //       return response.json()
  //     }
  //     throw response;
  //   })
  //   .then(data =>{
  //     setcars(data);
      
  //   })
  //   .finally(() =>{
  //     setloadingcar(false)
  //   })
  //  },[],)
  //   return (
  //     [cars,setcars]
  
  //   )

  useEffect(() => {
    fetch("http://localhost:9292/cars")
      .then((r) => r.json())
      .then((data) => setCars(data));
  }, []);
 
// const breakFirstData = cars.map()
const breakFirstData = cars.map((item)=>(
  <Hub  
  key={item.id}
  id={item.id}
  power={item.car_horsepower}
  image={item.car_image}
  year={item.model_year}
  price={item.price}
  type={item.type}

  />


))
  
 

 

  
return (

  

 
<>


{breakFirstData}


</>)
}


export default Cardata