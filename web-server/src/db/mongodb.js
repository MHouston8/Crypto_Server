const mongodb = require('mongodb')

//initialize the mongo
const MongoClient = mongodb.MongoClient

//connect to the database
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'crypto-server-db'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('There was an error connecting to the database.')
    }

    console.log('You have successfully connected to the database!')

    //gives us a reference to 
    const db = client.db(databaseName)

    db.collection('cryptocurrency').insertOne({
        name: 'Andrew'
    })
})