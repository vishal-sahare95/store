export interface Produscts{
    name:string;
    price:number|null
}
export class ProdusctsC implements Produscts{
    name:string;
    price:number|null
    constructor(){
        this.name= '',
        this.price =  0|| null
    }
}