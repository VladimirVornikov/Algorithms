function recurs(x){
    if(x <= 1){
        return 1;
    } else {
        return x * recurs(x-1);
    }
}

console.log(recurs(10));
console.log(recurs(20));
console.log(recurs(30));

function iteral(x){
    sum = 1
    for(let i = 1; i<=x; i++){
        sum = sum*i
    }
    return sum;
}
console.log(iteral(10));
console.log(iteral(20));
console.log(iteral(30));

/*При больших чисел Фибоначчи лучше использовать итеративную функцию, использующая цикл, будет эффективнее 
использовать память и ресурсы, поскольку она не порождает дополнительных вызовов функции. */ 