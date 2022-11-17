// Requiring modules

const path = require('path');
const _v = require('../varsOfProblem');
const {ReturnOfIndex1Cicle} = require('./functions/ReturnOfIndex1Cicle');
const {ReturnOfIndex4Cicle} = require('./functions/ReturnOfIndex4Cicle');
const {ReturnOfIndex2Cicle} = require('./functions/ReturnOfIndex2Cicle');

// Declaring Groups
const groupCicleOf4 = _v.gc4;
const groupCicleOf2 = _v.gc2;


// Return General del Indice
function ReturnOfIndex(array,group){
    if(group == groupCicleOf4){
        console.log('I am here on group 4');
        return ReturnOfIndex4Cicle(array);
    }
    if(group == groupCicleOf2){
        console.log('I am here on group 2');
        return ReturnOfIndex2Cicle(array);
    }
    else{
        return ReturnOfIndex1Cicle();
    }
}

module.exports.ReturnOfIndex = ReturnOfIndex;

let proove = [2,4,5,7,8,9,9]
console.log(ReturnOfIndex(proove,_v.gc4));