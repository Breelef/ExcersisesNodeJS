import { Router } from 'express';
const router = Router();
import db from '../databases/connection.js';
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "cloezfulgaming@gmail.com",
        pass: "zdqfzsummdxctikc"
    }
});

function constructMail(email){
    
    let message = {
        from: "emil_vinther@hotmail.com",
        to: email,
        subject: "Sign Up Confirmed",
        text: "Thank you for signing up to my Mandatory II assignment. Now you have a login to use!",
        html: "<p>Thank you for signing up to my Mandatory II assignment. Now you have a login to use!</p>"
    };
    return message;
}

router.post("/signup", async (req, res) => {
    const {email, username, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.run("INSERT INTO users (email, username, password) VALUES (?,?,?);", [email, username, hashedPassword]);
        console.log(result);
        const message = constructMail(email);
        transporter.sendMail(message, (err, info) => {
            if(err){
                console.log("Error sending mail", err)
            }else{
                console.log("Email sent", info.response)
            }
        })
        res.send({
            id: result.lastID,
            username: result.username,
            email: result.email
        });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

export default router;