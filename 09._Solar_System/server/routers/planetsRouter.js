import { Router } from "express";
const router = Router();
import db from '../databases/connection.js';

router.get("/planets", async (req, res) => {
    const planets = await db.all("SELECT * FROM planets");
    
    res.send({ data: planets});
});

router.post("/people", async (req, res) => {
    if(!req.body.name){
        return res.status(400).send({message: "Missing the key (Name) in the body"});
    }
    const result = await db.run(`INSERT INTO people (name, favouritePlanet) VALUES (?, 3);"`, [req.body.name]);
    console.log(result);
    res.send({
        id: result.lastID,
        name: req.body.name
    });
});

router.get("/allPeople", async (req, res) =>{
    res.send({data: await db.all("SELECT * FROM people;")});
});

export default router;