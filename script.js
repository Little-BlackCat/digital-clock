const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if( h > 12 ) {
        h = h - 12
        ampm = "PM"
    } else if (h == 12) {
        ampm = "PM"
    }

    hourEl.innerText = String(h).padStart(2, '0');
    minuteEl.innerText = String(m).padStart(2, '0');
    secondEl.innerText = String(s).padStart(2, '0');
    ampmEl.innerText = ampm

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock()
