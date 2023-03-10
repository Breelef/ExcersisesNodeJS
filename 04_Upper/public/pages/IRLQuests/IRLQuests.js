fetch("https://www.boredapi.com/api/activity")
  .then(response => response.json())
  .then(result => {
    let insert = document.getElementById("quest");
    insert.innerText = result.activity;
  });