const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    }
}, {timestamps : true}) 

module.exports = mongoose.model("User", UserSchema)

// contact
// route_category
// bus_number 

// username
// password
// email
// contact
// route_category