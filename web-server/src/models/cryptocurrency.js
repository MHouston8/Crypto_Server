const mongoose = require('mongoose')

const cryptoCurrencySchema = new mongoose.Schema({
    cmc_id: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    symbol: {
        type: String,
    },
    slug: {
        type: String
    },
    num_market_pairs: {
        type: Number
    },
    date_added: {
        type: String 
    }
})

const CryptoCurrency = mongoose.model('CryptoCurrency', cryptoCurrencySchema)

module.exports = CryptoCurrency