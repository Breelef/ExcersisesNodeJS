import db from "./connection.js";

const result = await db.candyTypes.deleteOne({type: "Kongen af Danmark"});
console.log(result);