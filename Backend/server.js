const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors");
const User = require("./Schema/user.schema");
const app = express();
app.use(express.json());
app.use(cors());

const DB_URL = "mongodb+srv://sumant:sumant_321@userdata.wkz7zsy.mongodb.net/internUserData?retryWrites=true&w=majority";

const connect = () => {
    return mongoose.connect(DB_URL)
}

app.get("/", async (req, res)=> {
    let users = await User.find();
    console.log(users);
    res.status(200).json(users);
    // res.send(users);
})

app.listen(8000, async()=>{
    // for error handling
    try{
        await connect();
        console.log("Listening to PORT No. 8000")
    }
    catch(e){
        console.log(e.message);
    }
})