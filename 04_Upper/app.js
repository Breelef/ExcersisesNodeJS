import express from "express";
const app = express();

import path from "path";
//import jokes from "./util/jokes.js";
app.use(express.static("public"));
import jokes from "./util/jokes.js";
import renderPage from "./util/templateEngine.js";
const frontpagePath = "./public/pages/frontpage/frontpage.html";
const IRLQuestsPath = ".//public/pages/IRLQuests/IRLQuests.html";
const jokesPath = "./public/pages/jokes/jokes.html";
const frontpagePage = renderPage(frontpagePath, {
    tabTitle: "Upper | Welcome"});
const IRLQuestsPage = renderPage(IRLQuestsPath, {
    tabTitle: "IRLQuests"});
const jokesPage = renderPage(jokesPath, {
    tabTitle: "Jokes",
    cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`    
});
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