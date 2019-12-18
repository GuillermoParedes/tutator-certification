const People = require('./people.json');

const diffNumbers = (numberInit, numberEnd) => {
    return (numberEnd - numberInit);
}

const otherOperation = (value, exp = 3) => {
    return Math.pow(value, exp)
}

const asyncFuny = (delay = 2000, data = People) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const response = data.map(person => {
                const [month, day, year] = person.birthday.split('/');
                const age = diffNumbers(year, 2018)
                return {
                    ...person,
                    full_name: person.first_name + ' ' + person.last_name,
                    age
                };
            }).filter(person => person.age > 20);
            resolve(response)
        }, delay)
    })
    
}


asyncFuny()
.then(response => {
    // console.log('responseLength', response);
    return response.length
})
.then(peopleLength => {
    return otherOperation(peopleLength)
})
.then(response => {
    console.log('Is the other response with operations', response);
});