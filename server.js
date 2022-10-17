// import js
const express = require('express')

// initialise epxpress

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started, listening on PORT: ${PORT}`))