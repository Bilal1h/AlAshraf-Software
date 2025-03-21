const mongoose = require("mongoose");

const utility_Schema = new mongoose.Schema({
    name:String,
    amount:Number,
    date: { type: Date, default: Date.now },
    month:String,
    Year:String,
    monthId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "month"
        }]
 
});

module.exports = mongoose.model("utilities",utility_Schema);