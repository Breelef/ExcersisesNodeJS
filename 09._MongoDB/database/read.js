import db from "./connection.js";

const shops = await db.shops.find().toArray();
console.log(shops)