import express from "express";
const app = express();
app.use(express.static("public"));
//import jokes from "./util/jokes.js";
import templateEngine from "./util/templateEngine.js";
const login = templateEngine.renderLogin();
const frontpage = templateEngine.renderFrontpage();
const nodemodulesPage = templateEngine.renderNodeModules();
const ssrPage = templateEngine.renderSSR();
const apiPage = templateEngine.renderApi();

app.get("/login", (req, res) =>{
    res.send(login);
});

app.get("/frontpage", (req, res) =>{
    res.send(frontpage);
});

app.get("/nodemodules", (req, res) =>{
    res.send(nodemodulesPage);
});

app.get("/ssr", (req, res) =>{
    res.send(ssrPage);
});

app.get("/apipage", (req, res) =>{
    res.send(apiPage);
});

const PORT = 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    }
    console.log("Server is running on ", PORT);
});