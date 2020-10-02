const express = require('express')
const request = require('request')
const router = new express.Router()

const CryptoCurrency = require('../models/cryptocurrency')

router.get('/cryptocurrency/map', async (request, response) => {
    //make request to map endpoint
    request('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map', (error, response, body) => {
        if (error) {
            console.log('There was an error fetching the /map endpoint: ', error)
            return
        }

        if (response) {
            console.log('/map endpoint response code = ', response.statusCode)
        }

        console.log('body: ', body)
    })
})

module.exports = router