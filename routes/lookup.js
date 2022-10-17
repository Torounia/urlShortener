//require express for routing
const express = require('express')

//initialise new route
const router = express.Router()

//use the 
const Url = require('../models/shortUriModel')

// @route       GET /:code
// @description    Redirect to the long/original URL 
router.get('/lookup/:code', async (req, res) => {
    try {
        // search for the original URL in the database 
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if (url) {
            // if found, redirect,
            return res.redirect(url.longUrl)
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found')
        }

    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})


module.exports = router