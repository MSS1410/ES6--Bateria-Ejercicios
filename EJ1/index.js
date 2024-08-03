const suma = (a = 10, b = 5) => {
  console.log(a + b)
}
/*1.1*/
console.log('Ejecucion sin parametros')
suma()

/*1.2*/
console.log('Ejecucion con un parametro')
suma(20)

/*1.3*/
console.log('Ejecucion con 2 parametros')
suma(9, 12)
