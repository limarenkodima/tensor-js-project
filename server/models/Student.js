const {Schema, model} = require("mongoose")

const Student = new Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    university: {type: String, required: true},
    telephone: {type: String, required: true},
    mail: {type: String, required: true},
})

module.exports = model('Student', Student)