let arrayOfDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

let dateString = localStorage.getItem('time');
let dateParts = dateString.split(', ');
let datePart = dateParts[0].split(' ');
let timePart = dateParts[1]; 
let timee = timePart.split(':')[0];
let day = parseInt(datePart[0]);
let monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let month = monthNames.indexOf(datePart[1]);
let date = new Date(2023, month, day); 
let dayOfWeek = arrayOfDays[date.getDay()]; 

let workday, morning;
for (let i = 0; i < 7; i++) {
    if (dayOfWeek == arrayOfDays[i]) {
        if (i == 0 || i == 6) {
            workday = false;
        }
        else {
            workday = true;
        }
    }
}
if (timee < 18) {
    morning = true;
}
else {
    morning = false;
}

let svgContainer = document.getElementById("svg-container");

for (let i = 2; i < 14; i++) {
    let y = 1;
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", i * 40 - 40);
    circle.setAttribute("cy", y * 40);
    circle.setAttribute("r", "15");
    circle.setAttribute("class", "clickcircle");
    circle.setAttribute("data-row", i);
    circle.setAttribute("data-column", y);
    if (morning == true && workday == true) {
        circle.setAttribute("data-date", '25BYN');
    }
    else if (morning == false && workday == true) {
        circle.setAttribute("data-date", '35BYN');
    }
    else if (morning == true && workday == false) {
        circle.setAttribute("data-date", '30BYN');
    }
    else if (morning == false && workday == false) {
        circle.setAttribute("data-date", '40BYN');
    } 
    circle.setAttribute("fill", "#71F022");
    svgContainer.appendChild(circle);
}

for (let i = 1; i < 15; i++) {
    for (let y = 2; y < 9; y++) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", i * 40 - 40);
    circle.setAttribute("cy", y * 40);
    circle.setAttribute("r", "15");
    circle.setAttribute("class", "clickcircle");
    circle.setAttribute("data-row", i);
    circle.setAttribute("data-column", y);
    if (y < 5) {
    circle.setAttribute("fill", "#71F022");
    if (morning == true && workday == true) {
        circle.setAttribute("data-date", '25BYN');
    }
    else if (morning == false && workday == true) {
        circle.setAttribute("data-date", '35BYN');
    }
    else if (morning == true && workday == false) {
        circle.setAttribute("data-date", '30BYN');
    }
    else if (morning == false && workday == false) {
        circle.setAttribute("data-date", '40BYN');
    } 
    }
    else if (y > 4 && y < 9) {
        circle.setAttribute("fill", "#75C4F0");
        if (morning == true && workday == true) {
            circle.setAttribute("data-date", '35BYN');
        }
        else if (morning == false && workday == true) {
            circle.setAttribute("data-date", '45BYN');
        }
        else if (morning == true && workday == false) {
            circle.setAttribute("data-date", '40BYN');
        }
        else if (morning == false && workday == false) {
            circle.setAttribute("data-date", '50BYN');
        } 
    }
    svgContainer.appendChild(circle);
}
}

for (let i = 1; i < 15; i++) {
    if (i != 4 && i != 5 && i != 10 && i != 11)
    for (y = 10; y < 13; y++) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", i * 40 - 40);
    circle.setAttribute("cy", y * 40);
    circle.setAttribute("r", "15");
    circle.setAttribute("class", "clickcircle");
    circle.setAttribute("data-row", i);
    circle.setAttribute("data-column", y);
    if (morning == true && workday == true) {
        circle.setAttribute("data-date", '15BYN');
    }
    else if (morning == false && workday == true) {
        circle.setAttribute("data-date", '25BYN');
    }
    else if (morning == true && workday == false) {
        circle.setAttribute("data-date", '20BYN');
    }
    else if (morning == false && workday == false) {
        circle.setAttribute("data-date", '30BYN');
    }     
    circle.setAttribute("fill", "#FB20F2");
    svgContainer.appendChild(circle);
    }
}

let globalArray = JSON.parse(localStorage.getItem('globalArray'));
for (let i = 0; i < globalArray.length; i++) {
    if (localStorage.getItem('name') === globalArray[i].name && localStorage.getItem('time') === globalArray[i].time) {
        for (let j = 0; j < globalArray[i].full.length; j++) {
            $('[data-row=' + globalArray[i].full[j][0] + '][data-column=' + globalArray[i].full[j][1] + ']').attr("fill", "#B4B8B1");
        }
    }
}

let infocontainer = document.getElementById("informpart");
let importcontainer = document.createElement('div');
let title = document.createElement('div');
title.setAttribute('id', 'title');
let time = document.createElement('div');
time.setAttribute('id', 'time')
title.innerHTML = localStorage.getItem('name');
time.innerHTML = localStorage.getItem('time');
time.innerHTML+=` ${dayOfWeek}`;
importcontainer.prepend(time);
importcontainer.prepend(title);
importcontainer.prepend()
infocontainer.prepend(importcontainer);