const calendar = document.querySelector(".calendar");
date =document.querySelector(".date");
daysContainer = document.querySelector(".days");
prev = document.querySelector(".prev");
next = document.querySelector(".next");

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
        const prevDayIndex = prevLastDay.getDay();
        const firstDayIndex = firstDay.getDay();
        const lastDayIndex = lastDay.getDay();
            const nextDays = 7 - lastDayIndex - 1;
    date.innerHTML = months[month] + " " + year;
    let days = "";

    for (let x = prevDayIndex; x > 0; x--) {
        days += `<div class="day prev-date">${prevLastDay.getDate() - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (
            i === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
        ) {
            activeDay = i;
            days += `<div class="day today">${i}</div>`;
        } else {
            days += `<div class="day">${i}</div>`;
        }

