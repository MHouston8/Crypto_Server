const express = require('express')
const application = express()
const mongoose = require('./db/mongodb')

//This will tell express to automatically parse the incoming request as a real world object that we can work with.
//application.use(express.json())


//pull in the routers (route handlers) from the other files
const cryptoCurrencyRouter = require('./routers/cryptocurrency')
application.use(cryptoCurrencyRouter)

console.log("aaa")

application.listen(3000, () => {
    console.log('server is up on port ' + 3000)
})