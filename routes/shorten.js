// import express for routing
const express = require('express')
// import valid-url package to verify if the URL
const validUrl = require('valid-url')
// import short id package to generate url identifier
const shortid = require('shortid')

// creating express route handler
const router = express.Router()

// import the Url database model
const Url = require('../models/shortUriModel')

// @route    POST /api/url/shorten
// @description     Create short URL

// The API base Url endpoint
const baseUrl = 'http:localhost:5000'

router.post('/shorten', async (req, res) => {
    const {
        longUrl
    } = req.body // destructure the longUrl from req.body.longUrl

    // if valid, we create the url code
    const urlCode = shortid.generate()

    // check long url if valid using the validUrl.isUri method
    if (validUrl.isUri(longUrl)) {
        try {
            //before creating the short URL, we check if the long URL is in the DB ,else we create it.

            let url = await Url.findOne({
                longUrl
            })

            // url exist and return the respose
            if (url) {
                res.json(url)
            } else {
                // join the generated short code the the base url
                const shortUrl = baseUrl + '/' + urlCode

                // invoking the Url model and saving to the DB
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }
        // exception handler
        catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(401).json('Invalid longUrl')
    }
})

module.exports = router