document.getElementById('id-first-button').onclick = function() {
    let nameofperfomance = document.getElementById('zagolov').textContent;
    localStorage.setItem('name', nameofperfomance);
    let timeofperfomance = document.getElementById('date1').textContent;
    localStorage.setItem('time', timeofperfomance);
}

document.getElementById('id-second-button').onclick = function() {
    let nameofperfomance = document.getElementById('zagolov').textContent;
    localStorage.setItem('name', nameofperfomance);
    let timeofperfomance = document.getElementById('date2').textContent;
    localStorage.setItem('time', timeofperfomance);
}

document.getElementById('id-third-button').onclick = function() {
    let nameofperfomance = document.getElementById('zagolov').textContent;
    localStorage.setItem('name', nameofperfomance);
    let timeofperfomance = document.getElementById('date3').textContent;
    localStorage.setItem('time', timeofperfomance);
}

// let globalArray = [];
// localStorage.setItem ("globalArray", JSON.stringify(globalArray));