const express = require("express"),
const forSale = require ('./control/forSale'),
const garage = require ('./control/garage'),

const app = express(),
const port = 3776;

app.use(express.json());
//load cars to be sold
app.get('/api/carsList', forSale.loadCars)

//load cars in garage initially 0
app.get ('/api/myGarge', garage.loadGarage)

//add car to myGarage and remove from carsList
app.post('/api/myGarage', forSale.buyCar)

//add car back to carsList and remove from myGarage
app.post('/api/carsList', garage.sellCar)

//add all cars back to carsList and remove all from myGarage
app.delete('/api/myGarage', garage.sellAll)

//edit the name of a car within myGarage
app.put('/api/myGarage', garage.renameCar)



app.listen(port, () => console.log(`server running on port ${port}`))