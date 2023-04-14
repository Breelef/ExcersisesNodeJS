import bcrypt from "bcrypt";

const passwordPlain = "hunter420";
const passwordPlain2 = "notHunter";
const hashedPassword = "$2b$12$eKetXvYy4j.46jaPquP/ZeGOv2aIw9SonKskHQuHgKZdQ0jqb5Bxm";

const encryptedPassword = await bcrypt.hash(passwordPlain, 12);
console.log(encryptedPassword);
const isSame = await bcrypt.compare(passwordPlain, hashedPassword);

console.log(isSame);