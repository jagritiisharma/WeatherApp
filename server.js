const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path");

//dotenv configuration
dotenv.config();
//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json())
//statics files access
app.use(express.static(path.join(__dirname, './weatherapp/build')));
//routes
app.get('/', (req, res)=> {
    res.send("RAJ SHARMA");
})
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, './weatherapp/build/index.html'));
})
//port
const PORT = process.env.PORT || 8080
 
//listen
app.listen(PORT,() => {
    console.log("server is running")
})