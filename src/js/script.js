// 'use strict';

let money = +prompt("ваш бюджет на месяц", ''),
    time = prompt("ввидите дату в формате yyyy-mm-dd", '');

let appData = { 
    budget: money,
    exprenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("введите обязательную статью расходов в этом месяце", ''),
        b = prompt("во сколько обойдётся?", '');

     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
         && a != '' && b != '' && a.length < 50) {
            console.log("done");
         appData.exprenses[a] = b;
     } else {
        i = i - 1;
     }
    
};

appData.moneyPerDay = appData.budget / 30; 

alert("ежедневный бюджет : " + appData.moneyPerDay); 

if(moneyPerDayppData. < 100) {
    console.log("минимальный уровень достатка");
} else if(moneyPerDayppData > 100 && amoneyPerDayppData < 2000) {
    console.log("средний уровень достатка");
}else if(moneyPerDayppData < 2000) {
    console.log("высокий уровень достатка");
}else{
    console.log("произошла ошибку")
}