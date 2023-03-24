import express from "express";
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
//import jokes from "./util/jokes.js";
import templateEngine from "./util/templateEngine.js";
const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const IRLQuests = templateEngine.readPage(".//public/pages/IRLQuests/IRLQuests.html");
const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Upper | Welcome"});
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, {
    tabTitle: "IRLQuests"});
const jokesPage = templateEngine.renderPage(jokes, {
    tabTitle: "Jokes",
    cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`    
});
const contactPage = templateEngine.readPage("./public/pages/contact/contact.html");
const contact = templateEngine.renderPage(contactPage, {
    tabTitle: "Contact ||Upper"
})
app.get("/", (req, res) =>{
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) =>{
    res.send(IRLQuestsPage);
});

app.get("/jokes", (req,res) => {
    res.send(jokesPage);
})

app.get("/contact", (req, res) =>{
    res.send(contact);
});


//API
app.post("/api/contact", (req, res) =>{
    console.log(req.body);
    res.send(req.body);
    //res.redirect("/");
});




const port = Number(process.env.PORT) || 8082;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log('Server is running on', port);
});