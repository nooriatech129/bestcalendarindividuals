const calendar = document.querySelector(".calendar");
const date = document.querySelector(".date");
const daysContainer = document.querySelector(".days");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const nextDays = 7 - lastDayIndex - 1;

    date.innerHTML = months[month] + " " + year;
    let days = "";

    // Fix 1: was using prevDayIndex (undefined), should be firstDayIndex
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="day prev-date">${prevLastDay.getDate() - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (
            i === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
        ) {
            activeDay = i;
            // Fix 2: added "active" class alongside "today"
            days += `<div class="day today active">${i}</div>`;
        } else {
            days += `<div class="day">${i}</div>`;
        }
    }

    // Fix 3: nextDays was calculated but never rendered
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
    }

    daysContainer.innerHTML = days;
}

prev.addEventListener("click", () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
});

next.addEventListener("click", () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
});

initCalendar();