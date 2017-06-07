//foreach
//operadores some y every

let arreglo = [10,3,8,5,9,7,6];

let notasSupletorio =arreglo.map((valor,indice)=>{
        return valor/5;
})
.every((valor)=>{
    return valor<=0.3;
})

console.log(notasSupletorio);

