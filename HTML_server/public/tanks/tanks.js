/* 
Task:
Step 1: Fetch Tanks
Step 2: console log tanks
Bonus: Add them to the div: Tanks-wrapper
*/

fetch("/api/tanks").then(response => response.json()).then(result => showTanks(result));

function showTanks(result){
    const tanksWrapperDiv = document.getElementById("tanks-wrapper");
    
    result.forEach(tank => {
        const tanksDiv = document.createElement("div");

        const tankName = document.createElement("p");

        tankName.innerText = tank.name;

        const tankNationalityP = document.createElement("p");

        tankNationalityP.innerText = tank.nationality;

        tanksDiv.appendChild(tankName);

        tanksDiv.appendChild(tankNationalityP);
        const breakBr = document.createElement("br");
        tanksDiv.appendChild(breakBr);
        tanksWrapperDiv.appendChild(tanksDiv);
    });
    
};
