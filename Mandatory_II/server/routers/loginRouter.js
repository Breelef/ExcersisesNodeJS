import { Router } from 'express';
const router = Router();
import db from '../databases/connection.js';
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

router.post("/login", async (req, res) => {
    console.log(req.body.username);
    const { username, password } = req.body;   
    try{
        const user = await db.get("SELECT * FROM users WHERE username=?", [username]);
        console.log(password, user.password)
        const isSame = await bcrypt.compare(password, user.password);
        console.log(isSame);
            if(user && isSame){
                req.session.user = {username};
                res.status(200).send("Login Succesful");
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
    }catch (error){
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy(() =>{
        res.send({message: "User logged out"})
    });
});

export default router;