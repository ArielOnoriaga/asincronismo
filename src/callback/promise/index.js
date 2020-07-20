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
