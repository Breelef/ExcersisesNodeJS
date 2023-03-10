import express from "express";
const app = express();

import path from "path";
//import jokes from "./util/jokes.js";
app.use(express.static("public"));
import jokes from "./util/jokes.js";
//console.log(await jokes.getJoke());


app.get("/", (req, res) =>{
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/IRLQuests", (req, res) =>{
    res.sendFile(path.resolve("public", "pages", "IRLQuests/IRLQuests.html"));
});

app.get("/jokes", (req,res) => {
    res.sendFile(path.resolve("public", "pages", "jokes/jokes.html"));
})







const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log('Server is running on', port);
});