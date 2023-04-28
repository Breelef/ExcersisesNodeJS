import db from "./connection.js";

const result = await db.candyTypes.insertOne({type: "Kongen af Danmark" })
console.log(result);