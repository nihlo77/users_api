const env = require("dotenv");
const mongoose = require('mongoose')
env.config()

const uri = process.env.MONGODB_ATLAS

//, {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(uri)
    .then((db) => console.log(`DB conection, !!! SUCCESS !!! `))
    .catch((err) => console.log(err))

module.exports = mongoose