const axios = require('axios')
const _ = require('lodash')
const {db} = require('./database')

module.exports.dataReceiverAPI = async () => {
    const axiosRequest = await axios.get('https://jsonplaceholder.typicode.com/users')
    return await axiosRequest.data
}

module.exports.filterData = async (data) => {
    _.forEach(data, (eachObj) => {
        console.log(eachObj.name)
        db(eachObj.name)
    })
}