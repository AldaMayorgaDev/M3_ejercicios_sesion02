
/*
1. Crea una variable llamada fruta y asígnale el valor Manzana.
* */

let fruta = "Manzana";


/**
 * 
 * 2. Crea una variable llamada c, ahora asígnale el valor 50.
 */

let c = 50;


/**
 * 3. Muestra la suma de 3 + 10, utilizando dos variables: x , y.
 */

let x = 3;
let y= 10;
console.log("La suma es: "+(x+y));


/**
 * 4. Crea una variable llamada z, ahora asígnale x + y. 
 * Después muestra el resultado en consola.
 */

 let x = 3;
 let y= 10;
 let z= x+y;
 console.log("La suma es: "+z);


/**
 * 
    5. En una sola línea declara tres variables con los siguientes nombres y valores:
    - primerNombre | "David"
    - apellido | "Mendoza"
    - edad | 26
 */

let  primerNombre = "David", apellido = "Mendoza", edad= 26;    


/**
 * 
 * 6. Crea dos variables, asígnales valores númericos, 
 *    multiplícalas entre sí y muestra el resultado en consola.
 */

let num1 = 5;
let num2 = 10;

console-log("El resultado de la multiplicacion de" +num1 +" y " +num2+ " es igual a: " +(num1*num2));

/**
 * 
 * 7. Muestra en consola el residuo de dividir 13 y 7.
 */

 let residuo  = 13 % 7;
 console.log("El residuo de dividir 13 y 7 es: "+residuo);


 /**
  * 8. Crea una variable cuyo valor sea 15 y otra 5, 
  * utiliza el operador de asignación adecuado para 
  * añadirle a la primera variable el valor 20 
  * (pista: es la forma simplificada de a = a + b).
  */

let a = 15;
let b = 5;
a+=b;
console.log(a);

/**
 * 9. Crea una variable cuyo valor sea 10 y otra 3, 
 * utiliza el operador de asignación adecuado para añadirle 
 * a la primera variable el valor 30.
 */

let a = 10;
let b = 3;
a*=b;
console.log(a);


/**
 * 10. Teniendo una variable que vale 10 y otra 8, 
 * muestra en consola si es verdad que la primera variable 
 * vale más que la segunda.
 */

 let a= 10, b=8;

 if(a>b){
     console.log(+a+" Si es mayor que " +b);
 }else{
     console.log(+a+" No es menor que " +b);
 }

 /**
  * 11. Teniendo una variable que vale 24 y otra 24, 
  * muestra en consola si es verdad que la primera y segunda
  * variable valen lo mismo.
  */

  let a= 24, b=24;

  if(a===b){
      console.log(+a+" Si es igual " +b);
  }else{
      console.log(+a+" No es igual " +b);
  }


  /**
   * 12. Teniendo una variable que vale 7 y otra 3, 
   * muestra en consola si es verdad que la primera no vale 
   * lo mismo que la segunda variable.
   */

  let a= 7, b=3;
  if(a!==b){
    console.log(+a+ " es diferente (!=) a " +b);
  }else{
    console.log(+a+" Si es igual " +b);
  }


  /**
   * 13. Completa el siguiente código y
   *  explica que es lo que realiza.
   * if x > y
   * console.log('Hola koder')
   */


  let x = 10;
  let y = -5;

  if(x>y){
    console.log('Hola Koder');
  }else{
    console.log('Adios Koder');
  }

  /**
   * Explicacion: Se declaran 2 variables (x, y)
   * Si x es mayor que y, envia un saludo en consola (Hola koder)
   * si no es asi, se envia una despedida en consola (Adios koder)
  */


  /**
   * 14. Completa el siguiente código y explica que es lo que realiza.
   * x>=y
   * console.log('Manzanas')
   *    {
   *        console.log('peras')
   * }
   */

   let x = 5;
   let y = 5;
 
   if(x>=y){
     console.log('Manzanas');
   }else{
     console.log('Peras');
   }

    /**
   * Explicacion: Se declaran 2 variables (x, y)
   * Si x es mayor igual que y, envia un mensaje en consola (Manzanas)
   * si no es asi, se envia la palabra (Peras)  en consola
  */
