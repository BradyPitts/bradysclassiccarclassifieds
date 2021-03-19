const express = require("express"),
const forSale = require ('./control/forSale'),
const garage = require ('./control/garage'),

const app = express(),
const port = 3000;

app.use(express.json());

app.get('/api/CarsList', forSale.loadCars)

app.get ('')

app.listen(port, () => console.log(`server running on port ${port}`))