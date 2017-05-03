// void

function holaMundo() {
    console.log('Hola mundo');

}
holaMundo(); //para correr a la funcion

//el doble de un entero

function doble(numero) {
    return numero*2;
}

console.log(doble(2)); //4

//multiplicar dos numeros
function multiplicar2(a,b) { //no poner var ni int ni nada en javascript
    return a*b;
}
console.log(multiplicar2(4,3))//multiplica los dos parametros

var multiplicacion = multiplicar2(1,2); // aqui se va a guardar el resultado de la multiplicacion
//yo quiero que se guarde la funcion..? DEBO GUARDAR LA DEFINICION DE LA FUNCION, sin los parentesis
var multiplicacion = multiplicar2;
console.log(multiplicacion(6,4));

//funcion anonima ya que no hay nombre despues de la palabra reservada function
//guardamos en una variable la funcion que imprime HOLA
//ES UNA funcion VOID
var hola = function () {
    console.log('Hola')
}
hola(); //imprime hola
console.log(hola());  //devuelve undifined

var resultado = hola();
console.log(resultado); //undefined

console.log('Hola',hola)//nos devuelve la deficinicion de la funcion

//funciones como parametros, un caso de estos sera usado en la clase.
function hazAlgo(algo) {
    algo()
}
hazAlgo(function (){console.log('Hola')});
hazAlgo(function () {return 2});

//transformar un numero, funcion gnerica que va a transformar un numero, esto es bastante raro
function transformarNumero(numero,transformacion) {
    transformacion (numero);
}
transformarNumero(5,function (numero) {return numero*2;});
transformarNumero(8,function (numero) {return numero/2;});