import express from "express";
const app = express();

import path from "path";
//import jokes from "./util/jokes.js";
app.use(express.static("public"));
import jokes from "./util/jokes.js";
//console.log(await jokes.getJoke());
import fs from "fs";
const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const IRLQuests = fs.readFileSync(".//public/pages/IRLQuests/IRLQuests.html").toString();
const jokesP = fs.readFileSync("./public/pages/jokes/jokes.html").toString();
const frontpagePage = navbar + frontpage + footer;
const IRLQuestsPage = navbar + IRLQuests + footer;
const jokesPage = navbar + jokesP + footer;
app.get("/", (req, res) =>{
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) =>{
    res.send(IRLQuestsPage);
});

app.get("/jokes", (req,res) => {
    res.send(jokesPage);
})







const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log('Server is running on', port);
});