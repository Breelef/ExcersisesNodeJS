import express from "express";
const app = express();
app.use(express.static("public"));
//import jokes from "./util/jokes.js";
import templateEngine from "./util/templateEngine.js";
const login = templateEngine.renderLogin();
const frontpage = templateEngine.renderFrontpage();

app.get("/login", (req, res) =>{
    res.send(login);
});

app.get("/frontpage", (req, res) =>{
    res.send(frontpage);
});

const PORT = 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    }
    console.log("Server is running on ", PORT);
});