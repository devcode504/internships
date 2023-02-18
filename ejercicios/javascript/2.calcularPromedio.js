function calcularPromedio(numeros) {
  const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  return total / numeros.length;
}

console.log(calcularPromedio([3, 5, 1, 8, 10])); // 5.4
