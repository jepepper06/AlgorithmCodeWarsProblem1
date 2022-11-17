
//returning the proper cicle
const returnOfCicle = function returnOfCicle(x){
    if(returnOfGroup === groupCicleOf4){
        switch (x[0]) {
            case 2:
                result = groupCicleOf4.cicle2;
                return result;
            case 3:
                result = groupCicleOf4.cicle3;
                return result ;
            case 7:
                result = groupCicleOf4.cicle7;
                return result;
            case 8:
                result = groupCicleOf4.cicle8;
                return result;
            default:console.error(error);
            break;  
        }
    }
    if(returnOfGroup === groupCicleOf2){
        switch (x[0]) {
            case 4:
                result = groupCicleOf2.cicle4;
                return result;
            case 9:
                result = groupCicleOf2.cicle9;
                return result;
            default:console.error(error);
                break;
        };
    }
    else{
        switch (x[0]) {
            case 5:
                result = groupCicleOf1.cicle5;
                return result;
            case 6:
                result = groupCicleOf1.cicle6;
                return result;
            default:console.error(error);
                break;
        }
    };
    return result;
};
module.exports.returnOfCicle = returnOfCicle;