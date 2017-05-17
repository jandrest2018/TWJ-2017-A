//let holaMundo = `Que tal la clase`;
//holaMundo
//console.log("Hola Mundo");
var soltero = true; //false
//Number
var novias = 4;
//String
var frase = "You are happy";
var otraFrase = "El numero de novias es : " + (novias + 1);
//arrays
var notas = [1, 2, 3, 4]; //[]
var jaladas = [1, 2, 3]; //[]
//any sirve para utilizar las ventajas de javascript en typescript
var nombre = "asdasd";
nombre = 12;
//crear nuestro propios tipos de datos
var usuario = {
    nombre: "Andres",
    apellido: "Tinajero"
};
//escribir clases
/* Esto es lo mismo que lo de abajo, la diferencia es que el codigo autolaticamente hace el match
class Persona{
    nombre:string = "Nom"; //publico por defecto
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}
*/
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
        this.nombre = "Nom"; //publico por defecto
    }
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido, this.fechaNacimiento);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return Persona;
}());
var andres = new Persona(); //instanciamos la clase persona
function SumarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
