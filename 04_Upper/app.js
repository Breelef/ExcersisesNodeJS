import express from "express";
const app = express();

import path from "path";
//import jokes from "./util/jokes.js";
//app.use(express.static("public"));


app.get("/", (req, res) =>{
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/IRLQuests", (req, res) =>{
    res.sendFile(path.resolve("public", "pages", "IRLQuest/IRLQuests.html"));
});







const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log('Server is running on', port);
});