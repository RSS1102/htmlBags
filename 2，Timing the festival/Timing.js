//today
let ToDay = new Date()
let toMonth = ToDay.getMonth() + 1
let toDay = ToDay.getDate()
let thisDay = `${toMonth}月${toDay}日`
document.getElementById("today").innerHTML = thisDay;

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
if (5 <= week < 7) {
    theWeek = `你离下周周末还有${week}天`
    console.log(theWeek)
    document.getElementById("weeks").innerHTML = theWeek;
} else {
    theWeek = `你离这周周末还有${week}天`
    console.log(theWeek)
    document.getElementById("weeks").innerHTML = theWeek;
}

//圣诞节
let ChristmasDay = new Date(2021, 12, 25)
ChristmasDay.setMonth(ChristmasDay.getMonth() - 1)
let Christmas = Math.ceil((ChristmasDay - ToDay) / (1000 * 60 * 60 * 24));//向上取整
document.getElementById("Christmas").innerHTML = Christmas;

//过年
let YearDay = new Date(2022, 02, 01,)
YearDay.setMonth(YearDay.getMonth() - 1)
let Years = Math.ceil((YearDay - ToDay) / (1000 * 60 * 60 * 24));//向上取整
document.getElementById("years").innerHTML = Years;

//元旦
let NewYear = new Date(2022, 01, 01,)
NewYear.setMonth(NewYear.getMonth() - 1)
let NewYears = Math.ceil((NewYear - ToDay) / (1000 * 60 * 60 * 24));//向上取整
document.getElementById("Newyears").innerHTML = NewYears;

//元宵
let LanternFestival = new Date(2022, 02, 15,)
LanternFestival.setMonth(LanternFestival.getMonth() - 1)
let Lanterns = Math.ceil((LanternFestival - ToDay) / (1000 * 60 * 60 * 24));
document.getElementById("Lanterns").innerHTML = Lanterns;
console.log(Years, Christmas, ToDay.getDay(), Lanterns)




