const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const apiRoutes = require('./routes/apiRoutes')

// routes
app.use('/api', apiRoutes)


app.get('/', (req, res) => {
    res.send("updated routes :)")
})


app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
})