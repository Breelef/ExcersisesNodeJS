import express from 'express'
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
//app.use(express.static("../client/dist"))
import planetsRouter from "./routers/planetsRouter.js";
app.use(planetsRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, (error) =>{
    if(error){
        console.log(error)
    }
    console.log("Server is running at port ", server.address().port);
})