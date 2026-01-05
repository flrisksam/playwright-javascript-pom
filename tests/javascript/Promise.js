const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved!'), reject('Promise rejected!'),
        1000);
});

myPromise
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });


    const randomValue = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve('Value above 0.5.') : reject('value below or equal to 0.5');
        }, 500)
    });
    randomValue
    .then(result => {
        console.log(result, ' Successfully resolved.');
    })
    .catch(error => {
        console.error('Catch: ' + error);
    });

    function isEven(inputValue, time){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                inputValue % 2 === 0 ? resolve(`${inputValue} is even.`) : reject(`${inputValue} is odd.`);
            }, time);
        });
    }
    isEven(4, 700)
    .then(result => {
        console.log(result);
        return isEven(7, 700);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });