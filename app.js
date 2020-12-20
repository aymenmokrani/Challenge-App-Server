const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000


app.get('/', (req, res) => {
    res.send("Hello Express !!")
})


app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
})