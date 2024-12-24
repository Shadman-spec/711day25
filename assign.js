

function fixWeightMachine(array) {
    const finalrray = []
    if (!Array.isArray(array)) {
        console.log('Invalid Input');
        return;



    }
    for (let index = 0; index < array.length; index++) {
        if (typeof array[index] === 'number' && !isNaN(array[index]) && array[index] > 0) {
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
var word = 'Bangladesh'
const result = countVowels(word)
console.log(result);

function evaluateResult
    (e) {

    if (!Array.isArray(e)) {
        console.log('Invalid Input');
        return;
    }

    const num = []

    for (let grades of e) {
        if (typeof grades !== 'number' || isNaN(grades)) {
            num.push('Invalid')
        }

        if (grades < 50) num.push('F')
        else if (grades < 60) num.push('D')



        else if (grades < 70) num.push('C')

        else if (grades < 80) num.push('B')

        else if (grades < 90) num.push('A')

        else num.push('A+')

    }
    return num
}


var arr = [40, 87, 90]
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
    year: 2004
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

        return outp
    }

}
const income = [2000, 1000, 4000]
const expense = 3000
const resul = calculateMonthlyExpenses(income, expense)

console.log(resul);


