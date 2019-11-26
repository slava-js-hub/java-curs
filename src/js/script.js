// 'use strict';

let money = prompt("ваш бюджет на месяц", ''),
    time = prompt("ввидите дату в формате yyyy-mm-dd",'');

let appData = {
    budget: money,
    exprenses: {},
    optionalExprenses: {},
    income: [],
    timeData: time,
    savinga: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("введите обязательную статью расходов в этом месяце",''),
        b = prompt("во сколько обойдётся?",'');

     if ((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
            console.log("done");
         appData.exprenses[a] = b;
     }
    
}

alert(appData.budjet / 30); 