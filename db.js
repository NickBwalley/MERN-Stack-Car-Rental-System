const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb+srv://nickycarz:wearelegion@cluster0.kdlvl.mongodb.net/nickycarz', 
        {useUnifiedTopology: true, useNewUrlParser:true})

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB connection successful')
    })

    connection.on('error', () => {
        console.log('Mongo DB connection Error')
    })
}

connectDB()

module.exports= mongoose