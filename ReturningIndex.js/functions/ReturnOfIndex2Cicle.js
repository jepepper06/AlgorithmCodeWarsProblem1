function ReturnOfIndex2Cicle(array){
    
    countPair=0;
    countEven=0;
    
    for(i=1;i<=array.length;i++){
        if(array[i]%2 == 1){
            countEven++;
        }
        if(array[i]%2 == 0){
            countPair++;
        }
    }

    console.log(`even: ${countEven}, pair: ${countPair}`);

    if(countPair >= 1){
        indexInCicle = 1;
        console.log(`index: ${indexInCicle}`);
        return indexInCicle;
    }
    if(countPair = 0 && countEven >= 1){
        indexInCicle = 0;
        console.log(`index: ${indexInCicle}`);
        return indexInCicle;
    }
    
};
// let proove = [ 9,23,341,761,83,3];
// console.log(proove);
// console.log(ReturnOfIndex2Cicle(proove));
module.exports.ReturnOfIndex2Cicle = ReturnOfIndex2Cicle;