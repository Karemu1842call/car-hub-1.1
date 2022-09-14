import React from 'react'
import { Card } from 'react-bootstrap'

export default function Hub({id,power,image,type,year,price}) {
    console.log(id)
    console.log(year)
    return (
      <Card>
      <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={image} alt="picha" />
  <div class="card-body">
    <h5 class="card-title">Car</h5>
    <ul>
      <li>Car type: {type}</li>
      <li>model year: {year}</li>
      <li>Horsepower:{power}</li>
      <li>${price}</li>
    </ul>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</Card>
  )
}
