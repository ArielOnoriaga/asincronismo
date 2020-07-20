const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if(true) {
            resolve("heeeey");
        } else {
            reject("fa loco");
        }
    })
}

somethingWillHappen()
    .then(reponse => console.log(reponse))
    .catch(err => console.error(err));


const sometimesWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve("NICEEEEEEEE");
            }, 2000)
        } else {
            const error  = new Error("NOOOOOO");
            reject(error);
        }
    });
}

sometimesWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));