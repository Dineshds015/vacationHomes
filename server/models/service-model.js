const {Schema, model} = require("mongoose");

const serviceSchema = new Schema({
    propertyName: {type:String, required:true},
    propertyType: {type:String, required:true},
    location: {type:String, required:true},
    pricePerNight: {type:String, required:true},
});

const Service = new model("Service", serviceSchema);

module.exports = Service;