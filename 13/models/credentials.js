const mongoose = require('mongoose')

const CredentialsSchema = mongoose.Schema({
    email: String,
    password: String
})

const Credentials = mongoose.model('Credentials', CredentialsSchema)

module.exports = {CredentialsSchema, Credentials}