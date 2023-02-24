//Write a fetch that gets the visitor count and shows it in #Visitor-count

/*fetch("/api/visitors").then(response => response.json().then(result => {
    updateVisitorCount(result.data);
}));*/

function updateVisitorCount(visitorCount){
    const visitorCountDiv = document.getElementById("visitor-count");
    visitorCountDiv.innerText = visitorCount;
}

function writeVisitorLog(){
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => updateVisitorCount(result.data));
}