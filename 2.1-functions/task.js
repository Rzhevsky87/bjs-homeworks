'use strict';

function getSolutions( a, b, c ) {
    let roots = [];
    let descrim = Math.pow(b,2) - 4*a*c;

    if(descrim === 0) {
        let x1 = -b / 2*a;
        roots.push(x1);
    }

    if(descrim > 0) {
        let x1 = (-b + Math.sqrt(descrim)) / 2*a;
        let x2 = (-b - Math.sqrt(descrim)) / 2*a;
        roots.push(x1, x2);
    }

    return { D: descrim, roots : roots };
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions( a, b, c );

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if(result.roots.length == 0) {
        console.log('Уравнение не имеет вещественных корней');
    }
    if(result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    if(result.roots.length === 2) {
        console.log(
            `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
        );
    }
}


function getAverageMark(data) {
    if(data.length > 0) {
        let resForArr = 0;    
        data.forEach(element => {
            resForArr += element;
        });
        let res = resForArr / data.length;
        return Number(res);
    }

    if(data.length == 0) {
        let res = 0;
        return Number(res);
    }
}

function getAverageScore(data) {
    if(Object.keys(data).length == 0) {
        return {average: 0};
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let dataAvg = {};
    dataAvg.average = 0;
    let lengthDataAvg = 0;
    if(Object.keys(data).length > 0) {
        for (const key in data) {
            if(data.hasOwnProperty(key) && key != {}) {
                if(data[key].length > 0) {
                    dataAvg[key] = data[key].reduce(reducer) / data[key].length;
                    dataAvg.average += dataAvg[key];
                    lengthDataAvg += 1;
                }
            }
        }

        dataAvg.average = dataAvg.average / lengthDataAvg;
        
        return dataAvg;
    }
}


function getDecodedValue(secret) {
    let notSecretData = secret == 1 ? 'Эмильо' : 'Родриго';
    return notSecretData;
}

function getPersonData(secretData) {

    let firstName = secretData.aaa == 1 ? 'Эмильо' : 'Родриго',
    lastName = secretData.bbb == 1 ? 'Эмильо' : 'Родриго';

    return {firstName : firstName, lastName : lastName};
}