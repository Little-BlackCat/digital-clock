const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
const ampmJpEl = document.getElementById("ampm_jp")

const cdDayEl = document.getElementById("cd_day")
const cdHourEl = document.getElementById("cd_hour")
const cdMinuteEl = document.getElementById("cd_minutes")
const cdSecondEl = document.getElementById("cd_seconds")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    let ampmJp = "午前"

    if( h > 12 ) {
        h = h - 12
        ampm = "PM"
        ampmJp = "午後"

    } else if (h == 12) {
        ampm = "PM"
        ampmJp = "午後"
    }

    hourEl.innerText = String(h).padStart(2, '0');
    minuteEl.innerText = String(m).padStart(2, '0');
    secondEl.innerText = String(s).padStart(2, '0');
    ampmEl.innerText = ampm

    setTimeout(() => {
        updateClock()
    }, 1000);
}

function getNextNewYearTime() {
    let currentYear = new Date().getFullYear();
    let nextYear = currentYear + 1;
    let newYearTime = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
    return newYearTime;
}

function updateCountDown() {
    const now = new Date().getTime()
    const gap = getNextNewYearTime() -  now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.ceil((gap % minute) / second)

    cdDayEl.innerText = String(d).padStart(2, '0')
    cdHourEl.innerText = String(h).padStart(2, '0')
    cdMinuteEl.innerText = String(m).padStart(2, '0')
    cdSecondEl.innerText = String(s).padStart(2, '0')

    setTimeout(() => {
        updateCountDown()
    }, 1000);
    
}

updateClock()
updateCountDown()