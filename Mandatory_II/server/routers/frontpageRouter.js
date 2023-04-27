import { Router } from 'express';
const router = Router();
import dotenv from "dotenv";
dotenv.config();

router.get("/frontpage", (req, res) => {
    console.log(req.session);
    if(!req.session.user){
        res.status(404, "User has no session");
        return;
    }
    res.send({message: "User is logged in"});
});

export default router;