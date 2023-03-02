function countDownToChristmas(){
    let now = new Date();
    let year = now.getFullYear();
    let christmasDate = new Date(year, 11, 24, 00, 00, 00, 00);
    let difference =  christmasDate.getTime() - now.getTime();
    console.log(difference);

    if(difference <= 0){
        clearTimeout(time-looper);
        document.write("Christmas is here");
    }
    let seconds = Math.floor(difference/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("days2go").textContent = days;
    document.getElementById("hours2go").textContent = hours;
    document.getElementById("minutes2go").textContent = minutes;
    document.getElementById("seconds2go").textContent = seconds;

    let time_looper = setTimeout('countDownToChristmas()', 1000);
}