import express from "express";
const app = express();
app.use(express.static("public"));
//import jokes from "./util/jokes.js";
import templateEngine from "./util/templateEngine.js";

app.get("/login", (req, res) =>{
    res.send(templateEngine.renderLogin());
});

const PORT = 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    }
    console.log("Server is running on ", PORT);
});