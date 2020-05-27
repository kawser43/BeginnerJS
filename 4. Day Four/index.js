// let object = new Object();
// let object = {};


function fun() {
    return 4;
}
let objectvar = {
    "name": "Ducket",
    "age": 27,
    "fun": fun(),
    "ob": { "house": 170, "country": "Ghana" }
}


document.write(Object.keys(objectvar.ob))
// document.write(Object.values(objectvar.ob))