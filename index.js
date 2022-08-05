const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    return [...cats,'Broom'];
}

function prependCat(name){
    return ['Arnold', ...cats];
}

function removeLastCat() {
    removeLastCat = cats.slice(0, cats.length - 1)
    return removeLastCat
}

function removeFirstCat() {
    removeFirstCat = cats.slice(1)
    return removeFirstCat
}
