//Studing the cicles
function elevator(x,n){
    result = 1;
    register = [];
    for(i=0;i<=n; i++){
        result = result*x;
        register.push(result%10);
    };
    return [result,register];
};

console.log(elevator(3,20));

console.log(elevator(8,10));