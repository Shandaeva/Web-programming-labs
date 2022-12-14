function showDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-Ru');
}


window.addEventListener('load', showDate);

