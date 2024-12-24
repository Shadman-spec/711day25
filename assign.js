

function fixWeightMachine(array) {
    const finalrray = []
    if (!Array.isArray(array)) {
        console.log('Invalid Input');
        return;



    }
    for (let index = 0; index < array.length; index++) {
        if (typeof array[index] === 'number' && !isNaN(array[index]) && typeof array[index] !== 'undefined' && array[index] > 0) {
            finalrray.push(array[index])

        }


    }



    return finalrray
}

var numbers = [100, null, 20, 34, 45, undefined]
const finalresult = fixWeightMachine(numbers)
console.log(finalresult);






function countVowels(v) {
    const vowels = 'aeiouAEIOU'
    let count = 0

    if (typeof v !== "string") {
        console.log('Invalid Input');


        return
    }

    for (let i = 0; i < v.length; i++) {
        if (vowels.indexOf(v[i]) !== -1) {
            count++


        }

    }
    return count;
}
var word = ''
const result = countVowels(word)
console.log(result);

function evaluateResult
    (e) {

    if (!Array.isArray(e)) {
        console.log('Invalid Input');
        return;


    }
    for (let numind = 0; numind < e.length; numind++) {
        const num = e[numind]
        if (typeof num !== 'number' || isNaN(num)) {
            console.log('Invalid ');
        }

        if (num < 50) {
            console.log('F');


        }
        else if (num >= 50 && num < 60) {
            console.log('D');
        }



        else if (num >= 60 && num < 70) {
            console.log('C');
        }
        else if (num >= 70 && num < 80) {
            console.log('B');
        }
        else if (num >= 80 && num < 90) {
            console.log('A');
        }
        else if (num >= 90) {
            console.log('A +');
        }

    }


}
var arr = [100, 87, 90]
const res = evaluateResult(arr)
console.log(res);



function createPerfectPassword
    (pa) {
    if (typeof pa.name !== "string") {
        console.log(' Invalid Input');

        return
    }

    if (typeof pa.year !== "number") {
        console.log('Invalid Input');

        return
    }

    if (pa.year.toString().length !== 4) {
        console.log('Invalid Input');

        return
    }

    const nam = pa.name.charAt(0).toLocaleUpperCase() + pa.name.slice(1)
    const password = nam + pa.year



    return password


}

const data = {
    name: 'shadman',
    year: 200
}
const results = createPerfectPassword(data)
console.log(results);



function calculateMonthlyExpenses(income, expense) {

    if (!Array.isArray(income)) {
        console.log('Invalid Input');

        return
    }
    if (typeof expense !== "number") {
        console.log('Invalid Input');

        return
    }
    const totalincome = income.reduce((sum, amount) => sum + amount, 0)
    const outp = totalincome - expense

    if (outp < 0) {
        console.log('Save More Money');

        return;
    }
    else {
        console.log(outp);
        return outp
    }

}
const income = [2000, 1000, 4000]
const expense = '20000'
const resul = calculateMonthlyExpenses(income, expense)

console.log(resul);


