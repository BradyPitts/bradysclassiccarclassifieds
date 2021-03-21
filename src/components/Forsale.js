import React from 'react'
import Car from './Car'


  // const carsForSale = [List]
const ForSale = (props) =>{
  console.log('displaying carsList')
  // console.log(props.carList)
  // console.log(props)

  const saleList = props.carsList.map((carsList, i ) => (
    <Car 
      key={i}
      img={carsList.img}
      name={carsList.name}
      make={carsList.make}
      model={carsList.model}
      year={carsList.year}
      price={carsList.price}
      buyCarFn = {props.buyCarFn}
    />
  ));
   
    return(

      <div>
        <article>
          <h2>Cars For Sale!</h2>
          {saleList} 
        </article>
      </div>

      // <article>
      //   <h2>Cars For Sale!</h2>

      //   {/* <saleList /> */}

      //   <section>
      //     <img src ={car.img} />
      //     <ul>
      //     {/* <li>${this.car.year}</li>
      //     <li>${this.car.make}</li>
      //     <li>${this.car.model}</li>
      //     <li>${this.car.price}</li> */}
      //     </ul>
      //     <button onClick = {axios.post('/api/myGarage/', {})}>Buy Car</button>
          
      //   </section>
      // </article>
    )
    

}
export default ForSale;

 
// return(

//   ForSale()

  // <article>
  //   <h2>Cars For Sale!</h2>

  //   <section>
  //     {/* <img src ={mappedCars.car.img} /> */}
  //     <p></p>
  //     <button onClick = "buyCar">Buy Car</button>
  //     <div>
        
  //     </div>
  //   </section>
  // </article>

// )

