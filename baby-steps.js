function argSum(p1){
    let result = 0;
    for (let i = 2; i < p1.length; i++){
        result += Number(p1[i])
    }
    return result;
}
console.log(argSum(process.argv));