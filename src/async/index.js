const doSometimeAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('KE ONDA'), 3000)
            : reject(new Error('test error'));
    })
}

const doSometime = async () => {
    const sometime = await doSometimeAsync();
    console.log(sometime)
}

console.log('before');
doSometime();
console.log('after');

const anotherFunction = async () => {
    try {
        const sometime = await doSometimeAsync();
        console.log(sometime)
    } catch (error) {
        console.error(error)
    }
}


console.log('before 3');
anotherFunction();
console.log('after 2');