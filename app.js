function helloParam (...param) {
    let newTest = document.createElement('div');
    newTest.innerHTML = "Bonjour";
    for (let it of param){
        newTest.innerHTML += ", " + it;
    }
    target.appendChild(newTest);
}

let target = document.querySelector('main');

helloParam('salut', 'tu', 'vas', 'bien ?');
helloParam('Ca', 'vas', 'bien', 'et', 'toi ?');

function addNbr (...nbr){
    let newTest = document.createElement('div');
    let result = 0;
    for(let x of nbr){
        if(Number.isInteger(x)){
            result += x;
        }
    }
    newTest.innerHTML = result.toString();
    target.appendChild(newTest);
}

addNbr(0, 1, 2);
addNbr(0, 1, 2, 3, 4, 5);
addNbr(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

function multiAdd (...nbr){
    let newTest = document.createElement('div');
    let result = 0;
    for(let x of nbr){
        if(Number.isInteger(x)){
            result += x;
        }
    }
    result = Math.trunc(result * 11.76);
    newTest.innerHTML = result.toString();
    target.appendChild(newTest);
}

multiAdd(0, 1, 2);
multiAdd(0, 1, 2, 3, 4, 5);
multiAdd(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

