const _v = require('./varsOfProblem');
let groupCicleOf4 = _v.gc4;
let groupCicleOf2 = _v.gc2;
let groupCicleOf1 = _v.gc1;

// Return of the group of cicle
const returnOfGroup = function returnOfGroup(x){
    if(x[0] === 2||3||7||8){
        return groupCicleOf4;
    }
    if(x[0] === 4||9){
        return groupCicleOf2;
    }
    else{
        return groupCicleOf1;
    };
};
// let proove = [2,4,78,4,3];
// console.log(returnOfGroup(proove));

module.exports.rOG = returnOfGroup;
