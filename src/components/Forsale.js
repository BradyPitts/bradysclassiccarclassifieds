import React from 'react'
import Car from './Car'
// import List from './CarsList.js'

  // const carsForSale = [List]
const ForSale = props => {
  const mappedCars = props.carsList.map((carsList, i) => (
      <Car 
          key={i}
          carsList={carsList}
          nameFn={props.nameFn}
          releaseFn={props.releaseFn}/>
  ))
  
        
    return(
  //     <div>
  //     <h1>Pokedex</h1>
  //     <div className='poke-flex'>
  //         {mappedPokemon}
  //     </div>
  // </div>
      <article>
        <h2>Cars For Sale!</h2>
  
        <section>
          {/* <img src ={mappedCars.car.img} /> */}
          <p></p>
          <button onClick = "buyCar">Buy Car</button>
          <div>
            
          </div>
        </section>
      </article>
      
    )
  
}
export default ForSale;