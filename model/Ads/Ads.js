var db = global.db;
const
mongoose = require('mongoose');

const AdsSchema = new mongoose.Schema({
	
		itemsName:{type:String},
		category:{type:String},
		numberAvail:{type:String},
		price:{type:String},
		shopName:{type:String},
		shopLocation:{type:String}	

})

module.exports = mongoose.model("Ads", AdsSchema)