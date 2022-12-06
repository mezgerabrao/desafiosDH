const funcionarios = require('./employees.js')

const financeiro = funcionarios.filter (dep => (dep.department == 'Financeiro'))

const salario = financeiro.map(sal => (sal.salary += ((0.5*sal.salary))))

const soma = salario.reduce ((acum, num) => acum+=num)


console.log(funcionarios)
console.log(salario)
console.log(financeiro)
console.log(soma)