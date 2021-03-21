const express = require("express");
const forSale = require ('./control/forSale');
const garage = require ('./control/garage');


const app = express();
const port = 3776;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.json());


//load cars to be displayed in ForSale component
app.get('/api/carsList', forSale.loadCars)

//load cars in garage initially 0
app.get ('/api/carsList', forSale.loadGarage)

//add car to myGarage and remove from carsList
app.post('/api/buyCar/:id', forSale.buyCar)

//add car back to carsList and remove from myGarage
app.post('/api/carsList:id', forSale.sellCar)

//edit the name of a car within myGarage
app.put('/api/carsList:id', forSale.renameCar)

//add all cars back to carsList and remove all from myGarage
app.delete('/api/carsList', forSale.sellAll)




app.listen(port, () => console.log(`server running on port ${port}`))