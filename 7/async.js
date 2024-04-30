console.log(1)

const getUserName = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(user.name)
            }catch(error) {
                reject(error)
            }
        }, 2000)
    })
}

const user = {
    name: 'James Bond'
}

const user2 = {
    name: 'Aget 007'
}

// getUserName(user)
//     .then((value) => {
//         console.log(value)
//         return 2*2
//     })
//     .then((value) => console.log('Val2', value))
//     .catch((error) => console.log(error.message))
//     .finally(() => console.log('finally'))

// getUserName(user)
//     .then((value) => {
//         console.log(value)
//         getUserName(user2)
//             .then((value) => console.log(value))
//             .catch((error) => console.log(error.message))
//     })
//     .catch((error) => console.log(error.message))


const main = async () => {
    const res1 = await getUserName(user)
    console.log(res1)
    const res2 = await getUserName(user2)
    console.log(res2)
}
main().then(() => console.log('Main is finished'))





console.log(2)