import express from "express";
const app = express();
app.use(express.static("public"));
//import jokes from "./util/jokes.js";
import templateEngine from "./util/templateEngine.js";