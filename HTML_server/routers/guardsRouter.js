import { Router } from "express";
const router = Router();

router.get("/api/guards", (req, res) => {
    if(req.query.passport === "theskyisblue"){
        return res.redirect("/api/tanks");
    } 
    res.send({message: "you are not allowed to see the tanks, you dont have the secret"});
});

export default router;