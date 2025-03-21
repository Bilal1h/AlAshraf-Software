const mongoose = require("mongoose");

const house_category_Schema = new mongoose.Schema({
    name: String,
    ammount_to_be_collected: Number,
    month: String,
    Year:String,
    monthId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "months"
    }],
    data: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "each_house_category"
    }],
    amount_per_house: Number, 
    amount_for_G: Number,
    amount_for_G1: Number,
    amount_for_G2: Number,
    amount_for_G3: Number,
    amount_for_G4: Number,
});

module.exports = mongoose.model("house_category", house_category_Schema);