export class CelularClass{

  constructor(public nombre?:string,
              public sistemaOperativo?:string,
              public version?:number,
              public createdAt?:Date,
              public updateAt?:Date){
    this.nombre=nombre;
  }
}
