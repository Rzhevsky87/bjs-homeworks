'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    percent = typeof(percent) === 'number' ? (percent/100)/12 : Number(percent);
    contribution = typeof(contribution) === 'number' ? contribution : Number(contribution);
    amount = typeof(amount) === 'number' ? amount : Number(amount);
   
    // if(
    //     !percent 
    //     || !contribution 
    //     || !amount 
    //     || !(date instanceof Date && !isNaN(date.valueOf()))
    // ) {
    //     alert('Все значения должны быть введены арабскими цыфрами дата должна быть выбрана');
    //     return;
    // }


    let S = amount - contribution;

    let period = new Date().getMonth() - date.getMonth();

    // let payment = S*(P+P/(((1+P)^n)-1)); P percent n - месяцы ^ - степень
    // amount*
    // let q = Math.pow((1+percent), period);
    let totalAmount = S*( percent + percent/( (Math.pow(1+percent, period))-1) ); //++

    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let isName = name ? name : 'Аноним';

    let greeting = `Привет, мир! Меня зовут ${isName}.`;

    return greeting;
}