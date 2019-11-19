const express = require('express')
const router = express.Router()

const Url = require('../models/Url')
const { route } = require('./url')

//@route    GET /:urlCode
//desc      redirect to longUrl(original)
router.get('/:urlCode', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.urlCode })

    if (url) {
      return res.redirect(url.longUrl) 
    } else {
      res.status(404).json('url not found')
    }
  } catch (error) {
    console.error(error)
    res.status(500).json('server error')
  }

  
})

module.exports = router