const express = require("express"),
      forSale = require ('./control/forSale'),
      garage = require ('./control/garage'),
      port = 3943,
      app = express()

app.use(express.json());

app.get('/api/')

app.listen(port, () => console.log(`server running on port ${port}`))