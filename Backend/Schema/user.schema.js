const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  // date: {type:String, required:true},
  // data: [{
  //       type: mongoose.Schema.Types.ObjectId, 
  //       ref: "data"
  //   }]
})


const User = mongoose.model("user", userSchema);

module.exports = User