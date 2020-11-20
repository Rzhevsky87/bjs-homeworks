//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function () {
    let normStr = this.split('').filter(
            (item) => { return item != ' ';}
        ).join('').toLowerCase();
    let reversedStr = this.split('').filter(
            (item) => { return item != ' ';}
        ).reverse().join('').toLowerCase();
    
    return normStr == reversedStr;
};

// console.log('А роза упала на лапу Азора'.isPalindrome());
// console.log('Ад гонит иногда'.isPalindrome());
// console.log('сел лес'.isPalindrome());
// console.log('еле-еле'.isPalindrome());
// console.log('еле-еле шёл Емеля!'.isPalindrome());
// console.log('Иван Васильевич меняет профессию'.isPalindrome());

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let averageMark = 0;

    if (marks.length > 0) {
        marks.forEach(element => {
            averageMark += element != undefined ? element : 0;
        });

        averageMark = Math.round(averageMark / marks.length);
    }

    return averageMark;
}

// let a = undefined; let b = undefined; let c = null;
// console.log(a == b, a === b, a == c, a === c);
// let res = getAverageMark([2,4,5]);
// let res2 = getAverageMark([2,3,5]);
// let res3 = getAverageMark([]);
// console.log(res, res2, res3);

function checkBirthday(birthday) { // "2020-11-20"
    // код для задачи №3 писать здесь
    let now = Date.parse(new Date);    
    birthday = Date.parse(new Date(birthday));

    // милисек / 1000 = сек / 3600 = часы / 24 = сутки
    // через часы в году 19.001930850254773
    // через сутки и год 19.01495107179097
    // через сутки и год по среднему (365.25) 19.00193902578143
    let diff = (((((now - birthday) / 1000) / 3600) / 24) / 365.25); 

    let verdict = diff >= 18;
    return verdict;
}

console.log(checkBirthday('2002-11-21'));