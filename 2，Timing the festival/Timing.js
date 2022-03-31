//today
let ToDay = new Date()
let toYear = ToDay.getFullYear()

function getDay() {
    let toMonth = ToDay.getMonth() + 1
    let toDay = ToDay.getDate()
    toMonth < 10 ? toMonth = "0" + toMonth : ''
    toDay < 10 ? toDay = "0" + toDay : ''
    let thisDay = `${toMonth}月${toDay}日`
    document.getElementById("thisDay").innerHTML = thisDay;
}

// 时间
function getTime() {
    let Time = new Date()
    let toHour = Time.getHours()
    let toMinute = Time.getMinutes()
    let toSecond = Time.getSeconds()
    toHour < 10 ? toHour = "0" + toHour : ''
    toMinute < 10 ? toMinute = "0" + toMinute : ''
    toSecond < 10 ? toSecond = "0" + toSecond : ''

    let thisTime = `${toHour}:${toMinute}:${toSecond}`
    console.log(toHour, toMinute, toSecond, thisTime)
        // setTimeout(getTime, 1000)
    document.getElementById("thisTime").innerHTML = thisTime;
}
window.onload = function() {
    getDay();
    getTime()
}
window.setInterval(getTime, 1000);

// 设置节日-计算-赋值

//周末
let weekday = ToDay.getDay()
switch (weekday) {
    case 0:
        week = 5;
        break;
    case 1:
        week = 4;
        break;
    case 2:
        week = 3;
        break;
    case 3:
        week = 2;
        break;
    case 4:
        week = 1;
        break;
    case 5:
        week = 0;
        break;
    case 6:
        week = 6;
        break;
}
if (4 < weekday && weekday < 7) {
    console.log("weekday1", weekday)
    theWeek = `你离下周周末还有${week}天`
    console.log(theWeek)
    document.getElementById("weeks").innerHTML = theWeek;
} else {
    theWeek = `你离这周周末还有${week}天`
    console.log(theWeek)
    document.getElementById("weeks").innerHTML = theWeek;
}

//圣诞节
let ChristmasDay = new Date(toYear, 12, 25)
ChristmasDay.setMonth(ChristmasDay.getMonth() - 1)
let Christmas = Math.ceil((ChristmasDay - ToDay) / (1000 * 60 * 60 * 24)); //向上取整
document.getElementById("Christmas").innerHTML = Christmas;

//过年
let YearDay = new Date(toYear + 1, 01, 21, )
YearDay.setMonth(YearDay.getMonth() - 1)
let Years = Math.ceil((YearDay - ToDay) / (1000 * 60 * 60 * 24)); //向上取整
document.getElementById("years").innerHTML = Years;

//元旦
let NewYear = new Date(toYear + 1, 01, 01, )
NewYear.setMonth(NewYear.getMonth() - 1)
let NewYears = Math.ceil((NewYear - ToDay) / (1000 * 60 * 60 * 24)); //向上取整
document.getElementById("Newyears").innerHTML = NewYears;

//元宵
let LanternFestival = new Date(toYear + 1, 02, 15, )
LanternFestival.setMonth(LanternFestival.getMonth() - 1)
let Lanterns = Math.ceil((LanternFestival - ToDay) / (1000 * 60 * 60 * 24));
document.getElementById("Lanterns").innerHTML = Lanterns;
console.log(Years, Christmas, ToDay.getDay(), Lanterns)