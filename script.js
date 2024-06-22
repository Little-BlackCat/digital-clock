const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
const ampmJpEl = document.getElementById("ampm_jp")

const cdDayEl = document.getElementById("cd_day")
const cdHourEl = document.getElementById("cd_hour")
const cdMinuteEl = document.getElementById("cd_minutes")
const cdSecondEl = document.getElementById("cd_seconds")

const monthJp = document.getElementById("month")
const dateJp = document.getElementById("date")
const dayJp = document.getElementById("day")

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

function writeDayJp() {
    const dayJp = [
        "(日曜日)", "(月曜日)", "(火曜日)", "(水曜日)", "(木曜日)", "(金曜日)", "(土曜日)"
    ]
    const nowDate = new Date().getDay()
    return dayJp[nowDate]
}

function updateDate() {
    const m = new Date().getMonth() + 1
    const d = new Date().getDate()
    const day = writeDayJp()

    monthJp.innerText = String(m).padStart(2, '0')
    dateJp.innerText = String(d).padStart(2, '0')
    dayJp.innerText = day

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    setTimeout(() => {
        updateDate();
    }, oneDayInMilliseconds);
}

updateClock()
updateCountDown()
updateDate()