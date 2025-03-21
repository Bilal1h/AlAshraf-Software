const mongoose = require("mongoose");

const each_house_category_Schema = new mongoose.Schema({
    sNo:Number,
    name: String,
    OwnerName: String,
    OwnerPhone: String,
    amount_to_be_collected: Number,
    is_amount_collected: {type:Boolean, default: false},
    category: String,
    month: String,
    Year:String,
    shareTypeMembershipNumber: String,
    floors: String,
    monthId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "months"
    }],
    date: { type: Date, default: Date.now },
    ParentHouseid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "house_category"
    },
});

module.exports = mongoose.model("each_house_category", each_house_category_Schema);