//let holaMundo = `Que tal la clase`;
//holaMundo
//console.log("Hola Mundo");
let soltero: boolean = true; //false

//Number
let  novias = 4;

//String
let frase = "You are happy";
let otraFrase = `El numero de novias es : ${novias + 1}`;

//arrays
let notas:number []=[1,2,3,4] //[]
let jaladas:Array<number> =[1,2,3]//[]

//any sirve para utilizar las ventajas de javascript en typescript
let nombre:any = "asdasd";
nombre = 12;

//crear nuestro propios tipos de datos
let usuario:UsuarioLogin = {
    nombre: "Andres",
    apellido: "Tinajero"
};

interface UsuarioLogin {
    nombre:string,
    apellido:string
    direccion?:string
}

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
class Persona{
    nombre:string = "Nom"; //publico por defecto
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){
    }
    public imprimirPersona():UsuarioLogin{
        console.log(this.nombre,this.apellido,this.fechaNacimiento);
        return{
            nombre:this.nombre;
            apellido:this.apellido;
        }
        private imprimirNombre(nombre:string,
                                      apellido?:string):void{
            if (apellido){
                console.log(nombre,apellido);
            }else {
                console.log(nombre);
            }
        }
    }
}

let andres:Persona = new Persona();//instanciamos la clase persona

function SumarNumeros(numero1:number,numero2:number):number{
    return numero1 + numero2;
}

