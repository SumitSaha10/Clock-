setInterval(() => {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    clockHour = hour * 30 + minute * (1/2);
    clockMinute = minute * 6;
    clockSecond = second * 6;
    let hourDiv = document.getElementById('hour');
    let minuteDiv = document.getElementById('minute');
    let secondDiv = document.getElementById('second');

    hourDiv.style.transform = `rotate(${clockHour}deg)`;
    minuteDiv.style.transform = `rotate(${clockMinute}deg)`;
    secondDiv.style.transform = `rotate(${clockSecond}deg)`;
}, 100);