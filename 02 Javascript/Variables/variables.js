//variables.js

//En JavaScript se define una variable con la palabra reservada <var>
// ENTEROS
var dos = 2;
var tres = 3;
var quince = 15;
var diesYSiete = 17;
console.log(dos)
console.log(tres)
console.log(quince)
console.log(diesYSiete)

//FLOAT
var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco)

//TODAS LAS DEMAS

var verdaderoOFalso = true;
var falso = falso;
var nombre = 'Adrian';
var negativo = -4;
var fechaNacimiento = new Date();

var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = falso;
cuatroString = -5443;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;
console.log(cuatroString)

var variable;
console.log(variable)

var numero2 = 2;
console.log(typeof numero2)

// OBJETOS JSON
var adrian = {
        id:1,
        nombre:'Adrian',
        createdAt:new Date(),
        updatedAt:new Date()
        prestamos:false,
        casado:true,
        altura:1.78,
        hijos:null,
        negativo:-1,
        mascota:{
            nombre:'cachetes',
                fechaNacimiento:new Date()
        }
};
console.log(adrian+"Hola")
console.log(adrian.altura);
console.log(adrian.mascota.fechaNacimiento);

console.log('Altura:', adrian.altura);
adrian.altura = 1.48;
console.log('Altura:',adrian.altura);

adrian.altura = {
    ancho:2.4,
    alto:1.79
};

console.log('Altura', adrian.altura);

//Borrando atributos o propiedades del objeto
delete adrian.altura; //para borrar el parametro altura del objeto adrian
console.log('Objeto', adrian);

//añadir atributos
adrian.juegos = 'varios'; //para añadir parametros o atributos o propiedades al objeto adrian

//ARREGLOS
var arreglo = [1,
'adr',
2.4,
false,
true,
null,
undefined,
new Date(),
-3421,
    {
        a:'b'
    }];

console.log(arreglo.true);

var nuevoOnjeto = {
    papas:['chola','chaucha','maria'],
    cebollas:['paiteña','perla','blanca']
}
console.log(nuevoOnjeto.papas.[1]); //me muestra el elemento chaucha del arreglo papas


var matriz = [[0,1],[2,3]];
console.log(matriz[0][0])

var arregloDeObjetos = [
    id:1,
    nombre:'Adrian'
},
    {
    id:2,
        nombre:'Felipe'
    }
];

//splice(delimita la posicion en la que vamos a trabjar, numero de objetos a eliminarse)
console.log('Antes',arregloDeObjetos);
arregloDeObjetos.slice(0,1);//borar adrian y dejar a felipe
console.log('Despues',arregloDeObjetos);

arrregloDeObjetos.splice(0,0,{id:3,nombre:'Carmen'})//añadir a carmen antes que felipe
console.log('Despues2:',arrregloDeObjetos)




