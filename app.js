const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const apiRoutes = require('./routes/apiRoutes')
const usersRoutes = require('./routes/userRoutes')
const mongoose = require('mongoose')


//midlleWares
app.use(express.json())

// routes
app.use('/api', apiRoutes)
app.use('/users', usersRoutes)


// MongoDb Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/serverDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
mongoose.connection.once('open', () => {
    console.log("Connection with MongoDb has been established !")
}).on('error', (error) => console.log(error))



app.get('/', (req, res) => {
    res.send("updated routes :)")
})


app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
})