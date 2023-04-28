import db from "./connection.js"

const result = await db.shops.updateOne({ city: "Hellerup"}, { $push: {shops: {name: "Slikhytten"}}});
console.log(result);