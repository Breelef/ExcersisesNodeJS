import express from "express";
const app = express();
app.use(express.static("public"));
import templateEngine from "./util/templateEngine.js";
const login = templateEngine.renderLogin();
const frontpage = templateEngine.renderFrontpage();
const expressPage = templateEngine.renderExpress();
const ssrPage = templateEngine.renderSSR();
const apiPage = templateEngine.renderApi();
const docuPage = templateEngine.renderDocumentationPage();
const nodemonPage = templateEngine.renderNodemonPage();
const npmPage = templateEngine.renderNPMpage();
const exportPage = templateEngine.renderExportpage();

app.get("/login", (req, res) =>{
    res.send(login);
});

app.get("/", (req, res) =>{
    res.send(frontpage);
});

app.get("/express", (req, res) =>{
    res.send(expressPage);
});

app.get("/ssr", (req, res) =>{
    res.send(ssrPage);
});

app.get("/apipage", (req, res) =>{
    res.send(apiPage);
});

app.get("/adddocumentation", (req, res) =>{
    res.send(docuPage);
});

app.get("/nodemon", (req, res) =>{
    res.send(nodemonPage);
});

app.get("/npm", (req, res) =>{
    res.send(npmPage);
});

app.get("/export", (req, res) =>{
    res.send(exportPage);
});

const PORT = 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    }
    console.log("Server is running on ", PORT);
});
module.exports = app;