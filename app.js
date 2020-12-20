const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const apiRoutes = require('./routes/apiRoutes')
const mongoose = require('mongoose')


// routes
app.use('/api', apiRoutes)


// MongoDb Connection
mongoose.connect(MONGODB_URI, {
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