// String
// number
// boolean
// null
// undefined
// symbol
// BigInt

// object

// let const var


// a = 20;
// var a;
// console.log(a);

// let a = 10;
// const b = a;
// a = 50;

// console.log(b);

// const user = {
//     name: 'Temo',
//     age: 30
// }

// const user2 = user;

// user2.name = 'Lasha'

// console.log(user.name)

// const arr = [1, 2, 3, 'hello', user, [123]];
// const arr2 = arr;
// arr2[3] = 'Hello World';
// console.log(arr);


// const func = a => a * a

// function func2(a, b) {
//     return a + b
// }

// const func3 = function(a, b) {
//     return func2(a, b);
// }

// const user = {
//     name: 'Temo',
//     sayHello: function() {
//         return 'Hello ' + this.name;
//     }
// }

// const user2 = {
//     name: 'Temo',
//     sayHello: () => 'Hello ' + this.name
// }

// console.log(user.sayHello(), user2.sayHello());

// const main = () => {
//     if(true) {
//         let a = 'Hello';
//     }
//     console.log(a)
// }
// main()

// const user = {
//     name: 'Temo',
//     age: 30,
//     address: {
//         city: 'Tbilisi',
//         phone: {
//             prefix: '995',
//             number: '123456789'
//         },
//         street: 'Balanchivadze',
//         country: 'GE'
//     }
// }

// const user2 = {
//     ...user
// }
// user2.address.city = 'Batumi'
// console.log(user.address.city)

// const name = user.name;
// const age = user.age;
// const address = user.address;

// const city = 'NY';

// const {name, age, address: {city: cityName, phone: {number, prefix}}} = user;
// console.log(name, age, cityName, number, prefix)

// const {name, age, address: {city: cityName, country, ...rest}} = user;
// console.log(name, age, cityName, rest)

// const arr = [1, 2, 3, user, [4, 5, 6, [7, 8, 9, user]]]

// const [a, b, c, {address: {city}}, [,,,[,,,{name}]]] = arr;
// console.log(a, b, c, city, name);

// const [a, b, ...rest] = arr;
// console.log(a, b, c, city, name);

// const func = (a, b, ...rest) => {
//     console.log(a, b, rest)
//     return  rest.reduce((sum, value) => sum + value, 0)
// }
// console.log(func(2))

// const getName = ({name}) => {
//     return name
// }
// console.log(getName(user))

const user = {
    name: 'Temo',
    age: 30,
    skills: ['Java', 'Python'],
    address: {
        city: 'Tbilisi',
        phone: {
            prefix: '995',
            number: '123456789'
        },
        street: 'Balanchivadze',
        country: 'GE'
    }
}

const deepCopy = (obj) => {
    if(typeof obj !== 'object') {
        return obj
    }
    const keys = Object.keys(obj);
    const result = {};

    for(let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] !== 'object') {
            result[keys[i]] = obj[keys[i]];
        } else {
            if(Array.isArray(obj[keys[i]])) {
                result[keys[i]] = obj[keys[i]].map((value) => deepCopy(value))
            } else {
                result[keys[i]] = deepCopy(obj[keys[i]])
            }
        }
    }

    return result;
}

const user2 = deepCopy(user);
// const user2 = user;
user2.address.city = 'Batumi'
console.log(user.address.city)