const express = require("express")
const env = require("dotenv")
const morgan = require("morgan")

env.config();
require('./database')
const api = express()
const port = process.env.PORT

api.use(morgan("dev"))
api.use(express.json())

// Rutas

api.use('/api/user', require('./routes/UserRoutes'))
api.listen(port, () => console.log(`ruuning API, Port ${port}`))

