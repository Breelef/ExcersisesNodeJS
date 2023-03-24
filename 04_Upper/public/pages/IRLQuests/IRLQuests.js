const typesOfActivities = ["education", "recreational", "social", "diy", 
                          "charity", "cooking", "relaxation", "music", "busywork"];


// fetch("https://www.boredapi.com/api/activity")
//   .then(response => response.json())
//   .then(result => {
//     let insert = document.getElementById("quest");
//     insert.innerText = result.activity;
//   });

  function fetchNewQuest(activityQueryString=""){
    fetch("https://www.boredapi.com/api/activity" + activityQueryString)
    .then(response => response.json())
    .then(result => {
    let insert = document.getElementById("quest");
    insert.innerText = result.activity;
    });
  }
  fetchNewQuest();
  
  function getNewQuest(){
    let activityType = document.getElementById("activity").value;
    fetchNewQuest(`?type=${activityType}`);
  }
  document.getElementById("IRLQuestFetch").addEventListener("click", getNewQuest);