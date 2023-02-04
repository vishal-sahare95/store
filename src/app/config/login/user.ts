export interface Users {
    email:string
    password:string,
    token:string
}

export class UsersC implements Users{
    email:string;
    password:string;
    token:string
    constructor(){
        this.email= '' ;
        this.password='';
        this.token= '';
    }
}

