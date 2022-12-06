const somaNumeros = (...numeros) => {
    return numeros.reduce ((acum,num) => acum += num);
}

console.log(somaNumeros (1, 1, 1,5))