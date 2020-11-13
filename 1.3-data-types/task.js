'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    percent = typeof(percent) === 'number' 
        ? (percent/100)/12 : (Number(percent)/100)/12;
    contribution = typeof(contribution) === 'number' 
        ? contribution : Number(contribution);
    amount = typeof(amount) === 'number' 
        ? amount : Number(amount);


    let S = amount - contribution;

    let now = new Date();
    let long = date;
    let period = 
        (long.getFullYear() - now.getFullYear()) * 12 + long.getMonth() - now.getMonth();

    let perManth = S*( percent + percent/( (Math.pow(1+percent, period))-1) );

    let total = perManth * period;

    return Number(total.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let isName = name ? name : 'Аноним';

    let greeting = `Привет, мир! Меня зовут ${isName}.`;

    return greeting;
}

