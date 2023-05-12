const router = require('express').Router()
const {dataReceiverAPI, filterData} = require('../services/function')

router.get('/', async (req, res) => {
    const data = await dataReceiverAPI()
    filterData(data)
    res.send('hello world!')
})

module.exports = router