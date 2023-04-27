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
const message = constructMail("emil11m8@stud.kea.dk");

transporter.sendMail(message, (err, info) => {
    if(err){
        console.log("Error sending mail", err)
    }else{
        console.log("Email sent", info.response)
    }
})