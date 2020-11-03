'use strict';

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let descriminant = Math.pow(b, 2)-(4*a)*c;
    let x = [];
    
    if(descriminant === 0) {
        x[0] = -b / 2*a;
    }
    if(descriminant > 0) {
        x[0] = (-b + Math.sqrt(descriminant)) / (2 * a);
        x[1] = (-b - Math.sqrt(descriminant)) / (2 * a);
    }
    
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if(marks.length > 5) marks = marks.slice(0,5);
    // let sumMarks = 0; **Вопрос** Правильно я понимаю, что такая запись и ниже следующая сделают одно и тоже, но эта еще присвоит значение?
    let sumMarks = new Number;
    marks.forEach(element => {
        sumMarks = sumMarks + element; // **Вопрос** как можно эту строчку короче записать?
    });
    let averageMark = sumMarks > 0 ? sumMarks / marks.length : 0;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let sovershennoletniy = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let message = sovershennoletniy > 18
        ? `Не желаете ли олд-фэшн, ${name}?`
        : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    
    return message;
}