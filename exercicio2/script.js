const array = [1, 2, 3, 4, 5, 6, 7, 8];

const triplos = array.map((numero) => {
    return numero*3;
})

const metades = array.map((numero) => {
    return numero/2;
})

console.log(triplos, metades);
