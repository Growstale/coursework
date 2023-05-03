document.getElementById('id_first_button').onclick = function() {
    let nameofperfomance = document.getElementById('zagolov').textContent;
    localStorage.setItem('name', nameofperfomance);
    let timeofperfomance = document.getElementById('date1').textContent;
    localStorage.setItem('time', timeofperfomance);
}

document.getElementById('id_second_button').onclick = function() {
    let nameofperfomance = document.getElementById('zagolov').textContent;
    localStorage.setItem('name', nameofperfomance);
    let timeofperfomance = document.getElementById('date2').textContent;
    localStorage.setItem('time', timeofperfomance);
}

document.getElementById('id_third_button').onclick = function() {
    let nameofperfomance = document.getElementById('zagolov').textContent;
    localStorage.setItem('name', nameofperfomance);
    let timeofperfomance = document.getElementById('date3').textContent;
    localStorage.setItem('time', timeofperfomance);
}

//localStorage.setItem('globalArray', JSON.stringify([]));
