const express = require("express");
const app = express();

app.use(express.static("public"));

//const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//Pages

app.get("/christmasTimer", (req, res) => {
    res.sendFile(__dirname + "public/timepage/timepage.html");
})

//API

app.get("/api/timer", (req, res)=>{
    res.send({});
});

const PORT = 5000;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

module.exports = app;