const fibonacci = (valor: number = 0) => {
  let x = 0;

  const arreglo: Array<any> = []
//   valor = parseInt(valor)
  for (x; x < valor; x++) {
    if (x == 0) {
      arreglo.push(0)
    } else if (x == 1) {
      arreglo.push(1)
    } else {
      arreglo.push(arreglo[x - 1] + arreglo[x - 2])
    }
  }
}

const reverseValue = (n: any) => {
  n = n + ''
  return n.split('').reverse().join('')
}


export { reverseValue, fibonacci }



