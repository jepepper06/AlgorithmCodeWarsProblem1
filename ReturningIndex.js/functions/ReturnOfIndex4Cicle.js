function ReturnOfIndex4Cicle(array) {
    auxPair = 0;
    auxPair_ = 0;
    auxEven = 0;
    auxEven_= 0;
    for(i=1;i<array.length;i++){
        
        // console.log(i);
        
        if((array[i]%4) == 2){
            auxPair++;
        }
        
        if(array[i]%4 == 0){
            auxPair_++;
        }
        
        if(array[i]%4 == 3){
            auxEven++;
        }
        
        if(array[i]%4 ==1){
            auxEven_++;
        }

        
    }
    // console.log(`pair: ${auxPair}, pair_: ${auxPair_}, even: ${auxEven}, even_: ${auxEven_}`);
        
    if( ((auxEven >= 1) || (auxEven_ >= 1)) && ((auxPair == 0) && (auxPair_ ==0))){
        if(auxEven%2 == 1){
            indexInCicle = 2;
            // console.log(`index: ${indexInCicle}`);
            return indexInCicle; 
        }
        if(auxEven%2 == 0){
            indexInCicle = 0;
            // console.log(`index: ${indexInCicle}`);
            return indexInCicle;
        }
    }
    
    else{
        if( ((auxPair > 1)||(auxPair_ >= 1)) ){
            indexInCicle = 3;
            // console.log(`index: ${indexInCicle}`);
            return indexInCicle;
        }
        else{
            indexInCicle = 1;
            // console.log(`index: ${indexInCicle}`);
            return indexInCicle;
        }
    }
}
    


module.exports.ReturnOfIndex4Cicle = ReturnOfIndex4Cicle;
// let proove = [3,2,5,7,568,4,7,8,5454,6,8,9];
// let proove = [2,4,5,7,8,9,9];
// console.log(ReturnOfIndex4Cicle(proove));

