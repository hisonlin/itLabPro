const clock = document.createElement('div');
document.body.appendChild(clock);
clock.style.fontSize = '50px';
clock.style.color = 'black';
clock.style.fontWeight = 'bold';
clock.style.border = '3px solid black';
clock.style.padding = '10px';
clock.style.opacity ='0';

function runningClock(){
    clock.innerText = new Date().getHours() + ':'
        + new Date().getMinutes() + ':'
        + new Date().getSeconds();
    clock.style.opacity = '1';
}

setInterval(runningClock, 1000);