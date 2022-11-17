const {Normalizer} = require('./Normalizer');
const rOG = require('./ReturnOfGroup');
const {ReturnOfIndex} = require('./ReturningIndex.js/ReturnOfIndex');
const {returnOfCicle} = require('./ReturnOfCicle');
// Setting the array to do the exrcise

function main(array){
//  x = arrayFiller();
    // x = [6,56,4,5,76,4,6,6,4];
    Normalizer(array);
    let group = rOG.rOG(array);
    index = ReturnOfIndex(x,group);
    cicle = returnOfCicle(x);
    console.log(cicle[index]);
}

main();

























