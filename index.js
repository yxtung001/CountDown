




 const countDown = new Date('Dec 31 2022').getTime();


setInterval(function myFunc(){
    const now = new Date().getTime()
    let timeLeft = countDown - now;
    console.log(timeLeft)
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeLeft % (1000 * 60 * 60 ) / (1000 * 60 )+1);
    let seconds = Math.floor(timeLeft % (1000 * 60 ) / (1000 ));
    document.getElementById("days").innerHTML = days 
    document.getElementById("hours").innerHTML = hours 
    document.getElementById("minutes").innerHTML = minutes 
    document.getElementById("seconds").innerHTML = seconds 
},1000)


    







