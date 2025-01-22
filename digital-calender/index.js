const date = document.getElementById("date")
const month = document.getElementById("month")
const day = document.getElementById("day")
const year = document.getElementById("year")


const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]

const allmonths = ["Jan","Feb","Mar","Apr","May","jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const today = new Date();
date.innerHTML = (today.getDate()<10 ? "0":"") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();
