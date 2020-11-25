class PrintEditionItem 
{
    constructor (name, releaseDate, pagesCount) {
        // this.author = null;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    /**
     * @param {number} state
     */
    set state(state) {
        state = state < 0 ? 0 : state > 100 ? 100 : state;
        this._state = state;
    }

    get state() {
        return this._state;
    }

    fix () {
        let fixedState = this.state * 1.5;
        // if(this.state > 0 && fixedState < 100) {
        //     this.state = fixedState;
        // }
        this.state = fixedState < 0 ? 0 : fixedState > 100 ? 100 : fixedState;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 
    2019, 
    1008
);
// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.state = 10;
// sherlock.fix();
// console.log(sherlock.state); //100


// const Lorem = new Magazine('Lorem', 2015, 50);
// console.log(Lorem.name);
// console.log(Lorem.releaseDate); //2019
// console.log(Lorem.state); //100
// Lorem.fix();
// console.log(Lorem.type);



// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15


class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let res = this.books.find(function(el) {
            if(el[type] == value) {
                return true;
            }
            return false;
        });

        return res != undefined ? res : null;
    }

    giveBookByName(bookName) {
        let book = this.books.find(function(el) {
            return el.name == bookName ? true : false;
        });
        
        if(book) {
            this.books = this.books.filter(item => item.name != book.name);
            return book;
        }

        return null;
    }
}

const library = new Library('Библиотека имени Ленина');
const printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
library.addBook(printItem);
// const firstBook = library.findBookBy("releaseDate", 2019);
// console.log(firstBook.name);

const firstBook = library.giveBookByName('Типовой школьный журнал');
const secondBook = library.giveBookByName('Судовой журнал');


class StudentLog {
    constructor (name) {
        this.name = name;
        this.subjects = {
            algebra: [],
            geometry: [],
            math: []
        };
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) { // grade — оценка, subject — предмет
        // validate grade
        if(typeof(grade) != 'number' || grade < 1 || grade > 5 || !this.subjects[subject]) {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
        }

        if( (grade >= 1 && grade <= 5) && this.subjects[subject] ) {
            this.subjects[subject].push(grade);
        }

        return this.subjects[subject].length;
    }

    /**
     * Return average grade of subject
     * If subject is null, return 0
     * 
     * @param {string} subject
     * @param {number} res
     * 
     * 
     * @return {number}
     */
    getAverageBySubject(subject, res = 0) {
        if(this.subjects[subject] && this.subjects[subject].length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            res = this.subjects[subject].reduce(reducer) / this.subjects[subject].length;
        }
        return res;
    }

    /**
     * Че-то решил на базовых циклах сделать..
     * 
     */
    getTotalAverage() {
        let avg = [];
        let res = 0;
        for (const key in this.subjects) {
            if(this.subjects[key].length > 0) {
                avg.push(
                    this.subjects[key].map(function(n) {
                        return n;
                    })
                );
            }
        }

        let countOfGrade = 0;
        for (const iterator of avg) {
            if(typeof(iterator) == 'object') {
                for (const qwe of iterator) {
                    countOfGrade += 1;
                    res += qwe;
                }
            }
        }

        return res / countOfGrade;
    }
}

const log = new StudentLog('Олег Никифоров');
// console.log(log.getName()) // Олег Никифоров
// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade('qweqwe', 'algebra'));
// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade('fsdfsdf', 'geometry'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(25, 'geometry'));

// 3-3
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

// log.getTotalAverage();
console.log(log.getTotalAverage());