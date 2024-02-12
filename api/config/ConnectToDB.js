require('dotenv').config()
const mongoose = require('mongoose');
async function ConnectToDB(){
    try {
        await mongoose.connect(process.env.mongodb_url);
    console.log("connected")
    } catch (error) {
        console.log(error);
    }
    
}
module.exports=ConnectToDB;