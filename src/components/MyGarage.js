import React from 'react'
import Car from './Car'


  let myMoney = 10000;


const MyGarage = (props) =>{
    console.log('displaying owned cars')

  const myGarage = props.myGarge.map((myGarage, i ) => (
    <Car 
      key={i}
      carId={myGarage.id}
      img={myGarage.img}
      name={myGarage.name}
      make={myGarage.make}
      model={myGarage.model}
      year={myGarage.year}
      price={myGarage.price}
      sellCarFn = {props.sellCarFn}
    />
  ));


  // function OwnedList(){
  //   return(
  //     <section>
  //       ${this.ownedCars}

  //       <button onclick={SellCar} >
  //         Sell Car
  //       </button>
        
  //     </section>
  //   )
  // }


    
  return(
    
    <aside>
      <h3>Your Owned Cars</h3>
      <h5>Your Money ${myMoney}</h5>
      <button onClick = ''>Sell All</button>

      {/* ${OwnedCars()} */}
      <section>
        <h4>Owned Car</h4>
        <div>
            <img src={this.props.img} alt={this.props.name} />
            <ul>
                <li>name: {this.props.name}</li>
                <li>make: {this.props.make}</li>
                <li>model: {this.props.model}</li>
                <li>year: {this.props.year}</li>
                <li>price: {this.props.price}</li>
            </ul>
            <div>
                {/* <input
                    // value={this..nameInput}
                    onChange={e => this.handleInput(e.target.value)} /> */}
                <button onClick={() => this.props.sellCarFn(this.props.carId)}>Sell Car</button>
            </div>
        </div>
      </section>
      
    </aside>
    
  );
}

export default  MyGarage;