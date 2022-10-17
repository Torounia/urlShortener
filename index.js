const express = require("express")
const app = express()

// Connect to MongoDB
const connection = require('./config/db.config.js')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

// Routes Config
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.
app.use('/api/v1', require('./routes/lookup.js'))
app.use('/api/v1', require('./routes/shorten.js'))

//Listen for incoming requests
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))


app.get('/foo', function (req, res) {
    res.send('Hello')
})