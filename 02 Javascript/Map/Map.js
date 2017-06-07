//foreach
//operadores

let arreglo = [10,3,8,5,9,7,6];

let resultado =arreglo.map((valor,indice)=>{
        return valor/5;
})
console.log(resultado);



let arregloUsuarios = [{
    nombre:"Andres" //Sr. o Sra. Andres
    //fechaCreacion:new Date()
    //anoCreacion:getFullYear()
},{
    nombre: "Maria" //Sr. o Sra. Maria
    //fechaCreacion:new Date()
    //anoCreacion:getFullYear()
}];

let resultadoArregloUsuarios = arreglo2((usuario)=>{
    usuario.nombre = "Sr o Sra" +usuario.nombre
usuario.fechaCreacion = new Date();
usuario.anoCreacion = usuario.fechaCreacion.getFullYear
return usuario;
})

console.log(resultadoArregloUsuarios);