import React, { Component } from 'react';


class OwnedCar extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: this.props,
        // };
console.log('list passed to car')
// console.log(props.buyCar)

    }
    render() {
        return (
            <div>
                <section>
                    <img src={this.props.img} alt={this.props.name} />
                    <ul>
                        <li>name: {this.props.name}</li>
                        <li>make: {this.props.make}</li>
                        <li>model: {this.props.model}</li>
                        <li>year: {this.props.year}</li>
                        {/* <li>price: {this.props.price}</li> */}
                    </ul>
                    <div>
                        {/* <input
                            // value={this..nameInput}
                            onChange={e => this.handleInput(e.target.value)} /> */}
                            <button onClick={() => this.props.reNameCarFn(this.props.carId, this.props.name)}>Rename Car</button>
                        <button onClick={() => this.props.sellCarFn(this.props.carId)}>Sell Car</button>
                    </div>
                </section>
            </div>


                
        )
    }
}           
export default OwnedCar;