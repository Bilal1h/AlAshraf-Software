const mongoose = require("mongoose");

const months_Schema = new mongoose.Schema({
    name:String,
    ammount_to_be_collected:Number,
    ammount_collected:Number,
    Year:String,
    categories_of_this_month: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "house_category"
        }],
        utilities_of_this_month:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "utilities"
        }],
 
});

module.exports = mongoose.model("months",months_Schema);