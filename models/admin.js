const mongoose=require("mongoose")
const loginschema=mongoose.Schema(
    {
        username:String,
        password:String
    }
)

let model=loginmodel=mongoose.model("logins",loginschema)
module.exports=loginmodel