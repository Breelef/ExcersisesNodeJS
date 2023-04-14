/*
Why: Because JavaScript is single-threaded 








*/
// new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("YAAAAAAAY");
//         reject("NOOOOOOO");
//     }, 3000)
// })
// .then(successMessage => console.log(successMessage))
// .catch(errorMessage => console.log(errorMessage));

function celebrate (name){
    return new Promise((resolve, reject) => {
        if(name){
            resolve(`Lets GOOOO! ${name} YEEEEEEEEEEEEEEEEEEEEEEEEEEEEET`);
        }else{
            reject("No name specified");
        }
        

    });
}
celebrate().then(celebrationMessage => console.log(celebrationMessage));

function someGoodSomeBad(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            try{
                throw Error;
                resolve("Some good");
            }catch(e){
                reject("somebad");
            }
        }, 3000)
    });
}
someGoodSomeBad()
.then(console.log)
.catch(console.log);

//IIFE - Immediate invoke fucntions expression
(async function getGoodorBad(){
    const somegoodorbad = await someGoodSomeBad();
    const celebrateMessage = await celebrate("Emil");
    console.log(somegoodorbad, celebrateMessage);
})()