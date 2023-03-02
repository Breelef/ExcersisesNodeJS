const express = require("express");
const app = express();

app.use(express.static("public"));

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

app.get("/time/day", (req, res)=>{
    console.log(day[date.getDay()])
    res.send({data: day[new Date().getDay()]});
});

app.get("/time/month", (req, res)=>{
    res.send({data: month[new Date().getMonth]});
});
const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});