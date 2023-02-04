import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produscts, ProdusctsC } from 'src/app/config/products/product.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
public productARR:Produscts[]=[]
public productObj:ProdusctsC=new ProdusctsC()

  public form: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { 
    this.form=this.fb.group({
      name:['',[Validators.required]],
      price:['',[Validators.required,Validators.pattern("^[0-9]*$")]]
    })
    
  }



  ngOnInit(): void {
    console.log(  localStorage.getItem('products'));
  }
  save(){
   
    localStorage.setItem('products',JSON.stringify(this.productARR))
    this.productARR.push(this.form.value)
    this.form.reset()
    
      
  }
  logout(){
    
    localStorage.setItem('token','');
    this.router.navigateByUrl('sign-in')
  }

}
