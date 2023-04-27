import express from "express"
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
import helmet from "helmet";
app.use(helmet());

import session from "express-session"
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


//Sign Up Route
import signupRouter from "./routers/signupRouter.js";
app.use(signupRouter);
//Sign In Route
import loginRouter from "./routers/loginRouter.js";
app.use(loginRouter);
//Frontpage route
import frontpageRouter from "./routers/frontpageRouter.js";
app.use(frontpageRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log("Server is running at port ", server.address().port);
});