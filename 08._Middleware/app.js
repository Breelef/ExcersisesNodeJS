import express from "express";
const app = express();


function guard(req, res, next){
    if(req.query.name === "Emil") {
        next();
    }else{
       res.send({message: "You are not allowed to enter"}); 
    }
}

app.get("/frontdoor", guard, (req, res, next)=>{
    res.send({message: "please enter"})
});
function houseButler(req, res, next){
    console.log("This way.....");
    next();
}
app.use("/room", houseButler);

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter);

app.get("*", (req, res) =>{
    res.send("<h1>404 - Not Found </h1>")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    }
    console.log("App is running on", PORT);
})