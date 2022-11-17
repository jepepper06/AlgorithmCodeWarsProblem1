
// Normalizing the problem
proove = [21319,20,4,6,34]
function Normalizer(array){
    a = array[0]%10;
    array[0] = a;
    return array[0];
}
Normalizer(proove);
console.log(proove);
module.exports.Normalizer = Normalizer;